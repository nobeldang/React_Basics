import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      firstName : "",
      lastName : "",
      isFriendly : false,
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target 
    
    type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
    
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
        <br />
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
        <br />
        <p>{this.state.firstName} {this.state.lastName}</p>
        <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/>is friendly?
        <br />
        <input type="radio" name="gender" value="male" checked={this.state.gender=="male"} onChange={this.handleChange}/>male
        <input type="radio" name="gender" value="female" checked={this.state.gender=="female"}  onChange={this.handleChange}/>female
        <br />
        {this.state.gender ? <p>Gender is {this.state.gender}</p> : null}
        <br />
        <select vaule = {this.state.favColor} name = "favColor" onChange={this.handleChange}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    )
  }
}

export default App;
