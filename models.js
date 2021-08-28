const db = require('./db/connect.js');
const zipcodes = require('zipcodes');
const { getDistance } = require('geolib');

const findMusicians = (options, callback) => {
  // get musicians from DB
  console.log('gig model options', options)

  // filter by minimum pay
  db.query(`SELECT id, name, photo, min_pay, city, state, zip, max_travel, website, email FROM musicians WHERE min_pay < ${Number(options.pay)}`)
  // TODO: add more columns to extract here for react rendering later.. phone, website...
    .then( async (results) => {
      let musicians = [];

      // filter by distance musician is willing to travel
      let gigCoords = zipcodes.lookup(options.zip);
      console.log(gigCoords);
      for (let musician of results.rows) {
        let musicianCoords = zipcodes.lookup(musician.zip);
        let distanceInMeters = getDistance(
          { latitude: gigCoords.latitude, longitude: gigCoords.longitude },
          { latitude: musicianCoords.latitude, longitude: musicianCoords.longitude }
        );
        let distanceInMiles = distanceInMeters * 0.000621371;
        console.log('distance', distanceInMiles);
        if (distanceInMiles < musician.max_travel) {
          musicians.push(musician);
        }
      }

      return musicians;
    })
    .then( async (matches) => {
      // get instruments
      for (let musician of matches) {
        // just get the musician's insturments they play here. dont worry about the filter yet!!
        await db.query(`SELECT instruments.name FROM instruments, instruments_musicians WHERE '${musician.id}' = instruments_musicians.musician_id AND instruments.id = instruments_musicians.instrument_id`)
          .then((results) => {
            let instruments = results.rows.map(item => item.name);
            // add instruments prop to obj
            musician.instruments = instruments;
          })
      }

      // filter by instruments needed
      let musicians = matches.filter(musician => {
        // return curr musician if any of instruments are in instruments needed
        for (let i = 0; i < options.instrumentsNeeded.length; i++) {
          let instrumentNeeded = options.instrumentsNeeded[i];
          if (musician.instruments.includes(instrumentNeeded)) {
            return musician;
          }
        }
      })

      console.log('filter instrument', musicians);
      return musicians;

    })
    .then(async (matches) => {
      // get genres
      for (let musician of matches) {
        // just get the musician's genres they play here. dont worry about the filter yet!!
        await db.query(`SELECT genres.name FROM genres, genres_musicians WHERE '${musician.id}' = genres_musicians.musician_id AND genres.id = genres_musicians.genre_id`)
          .then((results) => {
            let genres = results.rows.map(item => item.name);
            // add genres prop to obj
            musician.genres = genres;
          })
      }

      // filter by gig genre
      let musicians = matches.filter(musician => {
        // return curr musician if any of genres are in gig genres
        for (let i = 0; i < options.genre.length; i++) {
          let currGenre = options.genre[i];
          if (musician.genres.includes(currGenre)) {
            return musician;
          }
        }
      })

      console.log('filter genre', musicians);
      return musicians;

    })
    .then((matches) => {
      callback(null, matches)
    })
    .catch((err) => {
      callback(err, null)
    })


};

const addMusician = (options, callback) => {
  // add musician to DB

  // add all columns except instruments and genres
  db.query(`INSERT INTO musicians (name, city, state, zip, photo, bio, website, max_travel, min_pay, phone, email) VALUES ('${options.name}', '${options.city}', '${options.state}', '${options.zip}', '${options.photo}', '${options.bio}', '${options.website}', '${options.maxTravel}', '${options.minPay}', '${options.phone}', '${options.email}') RETURNING id`)
  // after inserting other columns, get returning ID for new musician and pass to next operation

    .then( async (results) => {
      console.log('id', results.rows[0].id)
      // then insert into instruments table using the returned 'newly created' musician id as a FK
      insertId = results.rows[0].id;
      for (let instrument of options.instruments) {
        await db.query(`INSERT INTO instruments_musicians (musician_id, instrument_id) VALUES ('${insertId}', (SELECT id FROM instruments WHERE name = '${instrument.toLowerCase()}'))`);
      }
      return insertId;
    })

    .then( async (insertId) => {
      // then insert into genres table using the returned 'newly created' musician id as a FK
      for (let genre of options.genre) {
        await db.query(`INSERT INTO genres_musicians (musician_id, genre_id) VALUES ('${insertId}', (SELECT id FROM genres WHERE name = '${genre.toLowerCase()}'))`);
      }

      return;
    })
    .then(() => {
      callback(null, 'new musician added!');
    })

    .catch((err) => {
      callback(err, null);
    })

};


module.exports = {
  findMusicians,
  addMusician
}