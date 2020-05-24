import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed : false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed : false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed : false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Todos />
      </div>
    );
  }
}




export default App;
