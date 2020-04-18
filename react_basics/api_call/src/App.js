import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {
      loading : false,
      api_data : {}
    }
  }

  componentDidMount(){
    this.setState({
      loading : true
    })

    fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()).then(data => {
      this.setState({
        loading : false,
        api_data : data
      })  
      
    })
  }

  render(){

    // Conditional rendering...
    const text = this.state.loading ? "Loading..." : this.state.api_data.title
    
    return(
      <div>
        <h3>{text}</h3>
      </div>
    )
  }

}
export default App;
