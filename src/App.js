import React, { Component } from 'react';
import main_logo2 from './main_logo2.png';
//styles
import './styles/App.css';
//components
import MenuRow from './router/MenuBar';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
        <img src={main_logo2} className="App-logo" alt="logo" />
          <h1 className="App-title">TSB100, Tillämpad SystemIntegration, Jonas Johansson!</h1>
          </header>
          <p className="App-intro">
           <MenuRow/> 
        </p>
      </div>
      </div>
    );
  }
}
export default App;