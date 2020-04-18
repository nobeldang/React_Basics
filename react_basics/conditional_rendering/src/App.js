import React from 'react';
import logo from './logo.svg';
import './App.css';
import Condition from "./Condition"
class App extends React.Component{
  constructor(){
    super()
    this.state={
      isLoading : true
    }
  }
  
  componentDidMount(){
    ///In reality an API call will be made instead of this setTimeout function.
    setTimeout(() => this.setState(prevState => prevState.isLoading=false),
    1500)
  } 

  render(){
   return(
      <div>
      <header>This is a permanent header</header>
      {this.state.isLoading ? <h3>Loading...</h3> : <Condition />}
      <footer>This is a permanent footer</footer>
      </div>
    ) 
  }

}

export default App;
