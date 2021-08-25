import React from 'react';

class GigForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      city: null,
      state: null,
      zip: null,
      instrumentsNeeded: null,
      genre: null,
      pay: null,
      summary: null
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
  changeInstrumentsNeeded(e) {
    this.setState({
      instrumentsNeeded: e.target.value
    }, () => console.log(this.state));
  }

  // make handle multiples eventually
  changeGenre(e) {
    this.setState({
      genre: e.target.value
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
          Instruments Needed:
          <select onChange={(e) => this.changeInstrumentsNeeded(e)}>
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
          Genre:
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
          Pay:
          <input type='text' onChange={(e) => this.changePay(e)}></input>
        </label>
        <label className='category'>
          Summary:
          <input type='text' onChange={(e) => this.changeSummary(e)}></input>
        </label>

        <button onClick={this.handleSubmit.bind(this)}>Search for Musicians!</button>
      </form>
    )
  }
}

export default GigForm;