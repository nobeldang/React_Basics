import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./TodoItem"
import TodoData from './TodoData';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        todos : TodoData
    }
    this.handleClick=this.handleClick.bind(this)
}

  handleClick(id){
    this.setState(prevState => {
      const todoArr = prevState.todos.map(arrItem => {
        if (arrItem.id == id){
          arrItem.isCompleted = !arrItem.isCompleted 
        }
        return(arrItem)
      })
      return {
        todos: todoArr
      }
    }) 
  }

  render(){ 
      const updatedTodo = this.state.todos.map(item => 
        <TodoItem key={item.id} item={item} handleClick={this.handleClick} />
      )
      return( 
          <div>
              {updatedTodo}
          </div>           
      )
  }    
}

export default App;
