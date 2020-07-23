import React from 'react';
import './App.css';
import Calculator from './components/Calculator.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Calculator onClick={this.onClick} />
      </div>
    );
  }
  
}

export default App;
