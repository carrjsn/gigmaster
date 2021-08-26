import React from 'react';
import axios from 'axios';

class GigForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      city: '',
      state: '',
      zip: '',
      instrumentsNeeded: [],
      genre: [],
      pay: '',
      summary: ''
    }

    this.changeInstrumentsNeeded = this.changeInstrumentsNeeded.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    console.log('state reset')
    this.setState({
      name: '',
      city: '',
      state: '',
      zip: '',
      instrumentsNeeded: [],
      genre: [],
      pay: '',
      summary: ''
    }, () => console.log(this.state));
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
  changeInstrumentsNeeded(e) {
    console.log(e.target.value);
    this.setState((prev) => {
      let arr = prev.instrumentsNeeded.concat(e.target.value);
      return {
        instrumentsNeeded: arr
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

  changePay(e) {
    this.setState({
      pay: e.target.value
    }, () => console.log(this.state));
  }

  changeSummary(e) {
    this.setState({
      summary: e.target.value
    }, () => console.log(this.state));
  }

  handleSubmit(e) {
    // TODO: fetch things
    e.preventDefault();
    let options = this.state;
    axios.post('http://localhost:3600/giginfo', options)
      .then((results) => {
        console.log('sent gig info to server');
        this.resetState();
      })
      .catch((err) => {
        console.log('error')
      })
  }

  render() {
    console.log('render')
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
          {/* <input type='text' onChange={(e) => this.changeState(e)}></input> */}
        </label>
        <label className='category'>
          Zip:
          <input type='text' value={this.state.zip} onChange={(e) => this.changeZip(e)}></input>
        </label >
        {/* <Instruments />
        <Genres /> */}
        <label className='category'>
          Instruments Needed: (choose all that apply)
          <div>
            <input type='radio' value='Bass' onChange={(e) => this.changeInstrumentsNeeded(e)}/>Bass
            <input type='radio' value='Guitar' onChange={(e) => this.changeInstrumentsNeeded(e)}/>Guitar
            <input type='radio' value='Piano' onChange={(e) => this.changeInstrumentsNeeded(e)}/>Piano
            <input type='radio' value='Drums' onChange={(e) => this.changeInstrumentsNeeded(e)}/>Drums
            <input type='radio' value='Saxophone' onChange={(e) => this.changeInstrumentsNeeded(e)}/>Saxophone
            <input type='radio' value='Trumpet' onChange={(e) => this.changeInstrumentsNeeded(e)}/>Trumpet
            <input type='radio' value='Vocals' onChange={(e) => this.changeInstrumentsNeeded(e)}/>Vocals
          </div>
        </label>
        <label className='category'>
          Genre: (choose all that apply)
          <div>
            <input type='radio' value='Country' onChange={(e) => this.changeGenre(e)}/>Country
            <input type='radio' value='Jazz' onChange={(e) => this.changeGenre(e)}/>Jazz
            <input type='radio' value='Rock' onChange={(e) => this.changeGenre(e)}/>Rock
            <input type='radio' value='Folk' onChange={(e) => this.changeGenre(e)}/>Folk
            <input type='radio' value='Bluegrass' onChange={(e) => this.changeGenre(e)}/>Bluegrass
            <input type='radio' value='Classical' onChange={(e) => this.changeGenre(e)}/>Classical
            <input type='radio' value='Soul' onChange={(e) => this.changeGenre(e)}/>Soul
            <input type='radio' value='Metal' onChange={(e) => this.changeGenre(e)}/>Metal
          </div>
        </label>
        <label className='category'>
          Pay:
          <input type='text' value={this.state.pay} onChange={(e) => this.changePay(e)}></input>
        </label>
        <label className='category'>
          Summary:
          <input type='text' value={this.state.summary} onChange={(e) => this.changeSummary(e)}></input>
        </label>

        <button onClick={this.handleSubmit.bind(this)}>Search for Musicians!</button>
      </form>
    )
  }
}

export default GigForm;