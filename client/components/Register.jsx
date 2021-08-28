import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      city: '',
      state: '',
      zip: '',
      instruments: [],
      genre: [],
      photo: '',
      bio: '',
      website: '',
      maxTravel: '',
      minPay: '',
      phone: '',
      email: ''
    }

    this.changeInstrument = this.changeInstrument.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      name: '',
      city: '',
      state: '',
      zip: '',
      instruments: [],
      genre: [],
      photo: '',
      bio: '',
      website: '',
      maxTravel: '',
      minPay: '',
      phone: '',
      email: ''
    });
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
    console.log(e.target.value);
    this.setState((prev) => {
      let arr = prev.instruments.concat(e.target.value);
      return {
        instruments: arr
      }
    }, () => console.log(this.state));
  }

  // make handle multiples eventually
  changeGenre(e) {
    console.log(e.target.value);
    this.setState((prev) => {
      let arr = prev.genre.concat(e.target.value);
      return {
        genre: arr
      }
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
    e.preventDefault();
    let options = this.state;
    axios.post('http://localhost:3600/musicians', options)
      .then((results) => {
        console.log('post client to server');
        this.resetState();
      })
      .catch((err) => {
        console.log('error')
      })

  }

  render() {

    return (
      <form>
        <label className='category'>
          Name:
          <input type='text' value={this.state.name} onChange={(e) => this.changeName(e)}></input>
        </label>
        <label className='category'>
          City:
          <input type='text' value={this.state.city} onChange={(e) => this.changeCity(e)}></input>
        </label>
        <label className='category'>
          State:
          <select value={this.state.state} onChange={(e) => this.changeState(e)}>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
        </label>
        <label className='category'>
          Zip:
          <input type='text' value={this.state.zip} onChange={(e) => this.changeZip(e)}></input>
        </label >
        {/* <Instruments />
        <Genres /> */}
        <label className='category'>
          Instruments: (choose all that apply)
          <div>
            <input type='radio' value='Bass' onChange={(e) => this.changeInstrument(e)}/>Bass
            <input type='radio' value='Guitar' onChange={(e) => this.changeInstrument(e)}/>Guitar
            <input type='radio' value='Piano' onChange={(e) => this.changeInstrument(e)}/>Piano
            <input type='radio' value='Drums' onChange={(e) => this.changeInstrument(e)}/>Drums
            <input type='radio' value='Saxophone' onChange={(e) => this.changeInstrument(e)}/>Saxophone
            <input type='radio' value='Trumpet' onChange={(e) => this.changeInstrument(e)}/>Trumpet
            <input type='radio' value='Vocals' onChange={(e) => this.changeInstrument(e)}/>Vocals
          </div>
        </label>
        <label className='category'>
          Genre: (choose all that apply)
          <div>
            <input type='radio' value='Country' name='Country' onChange={(e) => this.changeGenre(e)}/>Country
            <input type='radio' value='Jazz' name='Jazz' onChange={(e) => this.changeGenre(e)}/>Jazz
            <input type='radio' value='Rock' name='Rock' onChange={(e) => this.changeGenre(e)}/>Rock
            <input type='radio' value='Folk' name='Folk' onChange={(e) => this.changeGenre(e)}/>Folk
            <input type='radio' value='Bluegrass' name='Bluegrass' onChange={(e) => this.changeGenre(e)}/>Bluegrass
            <input type='radio' value='Classical' name='Classical' onChange={(e) => this.changeGenre(e)}/>Classical
            <input type='radio' value='Soul' name='Soul' onChange={(e) => this.changeGenre(e)}/>Soul
            <input type='radio' value='Metal' name='Metal' onChange={(e) => this.changeGenre(e)}/>Metal
          </div>
        </label>
        <label className='category'>
          Photo:
          <input type='text' value={this.state.photo} onChange={(e) => this.changePhoto(e)}></input>
        </label>
        {/* <label className='category'>
          Bio:
          <input type='text' value={this.state.bio} onChange={(e) => this.changeBio(e)}></input>
        </label> */}
        <label className='category'>
          Website:
          <input type='text' value={this.state.website} onChange={(e) => this.changeWebsite(e)}></input>
        </label>
        <label className='category'>
          Max Travel Distance (miles):
          <input type='text' value={this.state.maxTravel} onChange={(e) => this.changeMaxTravel(e)}></input>
        </label>
        <label className='category'>
          Minimum Pay:
          <input type='text' value={this.state.minPay} onChange={(e) => this.changeMinPay(e)}></input>
        </label>
        {/* <label className='category'>
          Phone:
          <input type='text' value={this.state.phone} onChange={(e) => this.changePhone(e)}></input>
        </label> */}
        <label className='category'>
          Email:
          <input type='text' value={this.state.email} onChange={(e) => this.changeEmail(e)}></input>
        </label>

        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    )
  }
}

export default Register;