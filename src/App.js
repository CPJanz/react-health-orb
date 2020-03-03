import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HealthOrb from "./Components/HealthOrb";

class App extends React.Component {
  state = {
    health: 30,
    maxHealth: 100,
    size: 200
  };

  componentDidMount() {
    window.setTimeout(() => this.setState({ health: 50 }), 3000);
    window.setTimeout(() => this.setState({ health: 80 }), 4000);
    window.setTimeout(() => this.setState({ health: 20 }), 5000);
    window.setTimeout(
      () => this.setState({ health: 150, maxHealth: 150 }),
      8000
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HealthOrb {...this.state} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
