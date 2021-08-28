import React from 'react';

const Musician = (props) => (
  <div className='musician-card'>
    <div className='name'>Name: {props.details.name}</div>
    <div className='email'>Email: {props.details.email}</div>
    <div className='instruments'>
      <span>Instruments:</span>
      {props.details.instruments.map((instrument, id) => <span key={id}>{instrument} </span>)}
    </div>
    <div className='genres'>
      <span>Genres:</span>
      {props.details.genres.map((genre, id) => <span key={id}>{genre} </span>)}
    </div>
  </div>
);


export default Musician;