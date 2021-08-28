import React from 'react';
import Register from './Register.jsx';
import GigForm from './GigForm.jsx';
import Musician from './Musician.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      musicians: []
    }

    this.handleGigSubmit = this.handleGigSubmit.bind(this);

  }

  handleGigSubmit(e, options) {
    // TODO: fetch things
    e.preventDefault();
    axios.post('http://localhost:3600/giginfo', options)
      .then((results) => {
        console.log('sent gig info to server');
        console.log('results client', results.data);
        // add musicians to state and render them upon retrieval
        this.setState({
          musicians: results.data
        }, () => console.log(this.state))

      })
      .catch((err) => {
        console.log('error')
      })
  }

  render() {

    let musiciansList;
    if (this.state.musicians.length) {
      musiciansList =
      <div className='musicians-list'>
        <h3>Musicians matching your description</h3>
        {this.state.musicians.map((musician, id) => <Musician key={id} details={musician}/>)}
      </div>
    } else {
      musiciansList = <div className='musicians-list'></div>;
    }

    console.log(musiciansList);

    return (
      <div className='main'>
        <nav className='nav-bar'><h1>Gigmaster</h1></nav>
        <div className='container'>
          <div className='register'>
          <h3>Register New Musician</h3>
          <Register />
          </div>
          <div className='gigform'>
          <h3>Enter Event Info</h3>
          <GigForm handleGigSubmit={this.handleGigSubmit} />
          </div>
        </div>
        {musiciansList}
      </div>
    )
  }

}


export default App;


