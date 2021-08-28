import React from 'react';

const Musician = (props) => (
  <div className='musician-card'>
    <img className='musician-photo' src={props.details.photo || 'https://www.chocolatebayou.org/wp-content/uploads/No-Image-Person-1536x1536.jpeg'} />
    <div className='musician-info'>
      <div className='name'>{props.details.name}</div>
      <div className='location'>{props.details.city}, {props.details.state}</div>
      <div className='email'>{props.details.email}</div>
      <div className='phone'>{props.details.phone || null}</div>
      <div className='website'><a href={props.details.website}>{props.details.website}</a></div>
      <div className='instruments'>
        <span className='instrument-title'>Instruments: </span>
        {props.details.instruments.map((instrument, id) => <span className='instrument' key={id}>{instrument} </span>)}
      </div>
      <div className='genres'>
        <span className='genre-title'>Genres: </span>
        {props.details.genres.map((genre, id) => <span className='genre' key={id}>{genre} </span>)}
      </div>
    </div>
  </div>
);

export default Musician;