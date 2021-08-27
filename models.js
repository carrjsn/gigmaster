const db = require('./db/connect.js');

const findMusicians = (options, callback) => {
  // get musicians from DB
  // console.log('gig model options', options)




};

const addMusician = (options, callback) => {
  // add musician to DB
  // console.log('add model options', options)

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