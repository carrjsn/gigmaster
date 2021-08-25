import React from 'react';
import Register from './Register.jsx';
import GigForm from './GigForm.jsx';

const App = (props) => (
  <div>
    <div className='register'>
    <h3>Register New Musician</h3>
    <Register />
    </div>

    <div className='gigform'>
    <h2>Find Musicians For Your Event</h2>
    <h3>Enter Gig Info</h3>
    <GigForm />
    </div>
  </div>
);

export default App;


