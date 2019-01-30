import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNum: '',
      schedule: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleScheduleChange = this.handleScheduleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phoneNum: event.target.value});
  }

  handleScheduleChange(event) {
    this.setState({schedule: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
        </label>
        <br/>
        <label>Phone Number:
          <input type="text" value={this.state.phoneNum} onChange={this.handlePhoneChange}/>
        </label>
        <br />
        <label>Frequency:
        <select value={this.state.schedule} onChange={this.handleScheduleChange}>
          <option selected value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'))

export default HomePage;
