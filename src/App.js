import React from "react";
import "./App.css";
import HealthOrb from "./Components/HealthOrb";
import TechTree from "./Components/TechTree";
import FakeData from "./FakeData.js";
import styled from "styled-components";

const Button = styled.span`
  padding: 0 25px;
  margin: 15px;
  border: 1px white solid;
  border-radius: 5px;
`;

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
          <Button
            onClick={event =>
              this.setState({
                health: Math.min(this.state.health + 10, this.state.maxHealth)
              })
            }
          >
            +
          </Button>
          <Button
            onClick={event =>
              this.setState({ health: Math.max(this.state.health - 30, 0) })
            }
          >
            -
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
