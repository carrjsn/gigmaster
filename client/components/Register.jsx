import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      city: null,
      state: null,
      zip: null,
      instruments: null,
      genres: null,
      photo: null,
      bio: null,
      website: null,
      maxTravel: 50,
      minPay: 0,
      phone: null,
      email: null
    }

  }

  changeName(e) {
    this.setState({
      name: e.target.value
    }, () => console.log(this.state));
  }

  changeCity(e) {
    this.setState({
      city: e.target.value
    }, () => console.log(this.state));
  }

  changeState(e) {
    this.setState({
      state: e.target.value
    }, () => console.log(this.state));
  }

  changeZip(e) {
    this.setState({
      zip: e.target.value
    }, () => console.log(this.state));
  }

  // make handle multiples eventually
  changeInstrument(e) {
    this.setState({
      instruments: e.target.value
    }, () => console.log(this.state));
  }

  // make handle multiples eventually
  changeGenre(e) {
    this.setState({
      genres: e.target.value
    }, () => console.log(this.state));
  }

  changePhoto(e) {
    this.setState({
      photo: e.target.value
    }, () => console.log(this.state));
  }

  changeBio(e) {
    this.setState({
      bio: e.target.value
    }, () => console.log(this.state));
  }

  changeWebsite(e) {
    this.setState({
      website: e.target.value
    }, () => console.log(this.state));
  }

  changeMaxTravel(e) {
    this.setState({
      maxTravel: e.target.value
    }, () => console.log(this.state));
  }

  changeMinPay(e) {
    this.setState({
      minPay: e.target.value
    }, () => console.log(this.state));
  }

  changePhone(e) {
    this.setState({
      phone: e.target.value
    }, () => console.log(this.state));
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value
    }, () => console.log(this.state));
  }

  handleSubmit(e) {
    // TODO: fetch things
    e.preventDefault()
    console.log('submitted')
    console.log(this.state);
  }

  render() {

    return (
      <form>
        <label className='category'>
          Name:
          <input type='text' onChange={(e) => this.changeName(e)}></input>
        </label>
        <label className='category'>
          City:
          <input type='text' onChange={(e) => this.changeCity(e)}></input>
        </label>
        <label className='category'>
          State:
          <input type='text' onChange={(e) => this.changeState(e)}></input>
        </label>
        <label className='category'>
          Zip:
          <input type='text' onChange={(e) => this.changeZip(e)}></input>
        </label >
        {/* <Instruments />
        <Genres /> */}
        <label className='category'>
          Instruments:
          <select onChange={(e) => this.changeInstrument(e)}>
            <option>Bass</option>
            <option>Guitar</option>
            <option>Drums</option>
            <option>Saxophone</option>
            <option>Trumpet</option>
            <option>Vocals</option>
            <option>Piano</option>
            <option>Keyboard</option>
          </select>
        </label>
        <label className='category'>
          Genres:
          <select onChange={(e) => this.changeGenre(e)}>
            <option>Country</option>
            <option>Jazz</option>
            <option>Rock</option>
            <option>Folk</option>
            <option>Bluegrass</option>
            <option>Classical</option>
            <option>Metal</option>
            <option>Indie</option>
          </select>
        </label>
        <label className='category'>
          Photo:
          <input type='text' onChange={(e) => this.changePhoto(e)}></input>
        </label>
        <label className='category'>
          Bio:
          <input type='text' onChange={(e) => this.changeBio(e)}></input>
        </label>
        <label className='category'>
          Website:
          <input type='text' onChange={(e) => this.changeWebsite(e)}></input>
        </label>
        <label className='category'>
          Max Travel Distance (miles):
          <input type='text' onChange={(e) => this.changeMaxTravel(e)}></input>
        </label>
        <label className='category'>
          Minimum Pay:
          <input type='text' onChange={(e) => this.changeMinPay(e)}></input>
        </label>
        <label className='category'>
          Phone:
          <input type='text' onChange={(e) => this.changePhone(e)}></input>
        </label>
        <label className='category'>
          Email:
          <input type='text' onChange={(e) => this.changeEmail(e)}></input>
        </label>

        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    )
  }
}


export default Register;