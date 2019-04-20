import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      {name:'Nehu', age: 29},
      {name:'Teju', age: 25},
      {name:'Rahul', age: 33}
      
    ]
  }

  switchNameHandler = () => {
    this.setState(
      {
        persons: [
          {name:'Nehudi', age: 29},
          {name:'Teju', age: 24},
          {name:'Rahulya', age: 33}
          
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Teju's hobby: Troubling me</Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>

      </div>
    );

    //return React.createElement('div', {className:"App" }, React.createElement('h1', 
    //null, 'Hello, this is Neha\'s first react app taught by Max'));
  }
}

export default App;
