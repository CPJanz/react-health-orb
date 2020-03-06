import React from "react";
import "./App.css";
import HealthOrb from "./Components/HealthOrb";
import TechTree from "./Components/TechTree";
import FakeData from "./FakeData.js";

class App extends React.Component {
  state = {
    health: 30,
    maxHealth: 100,
    size: 200
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TechTree tech={FakeData} />
          <HealthOrb {...this.state} />
          <span
            onClick={event =>
              this.setState({ health: Math.max(this.state.health - 30, 0) })
            }
          >
            -
          </span>
          <span
            onClick={event =>
              this.setState({
                health: Math.min(this.state.health + 10, this.state.maxHealth)
              })
            }
          >
            +
          </span>
        </header>
      </div>
    );
  }
}

export default App;
