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

  // componentDidMount() {
  //   window.setTimeout(() => this.setState({ health: 50 }), 3000);
  //   window.setTimeout(() => this.setState({ health: 80 }), 4000);
  //   window.setTimeout(() => this.setState({ health: 20 }), 5000);
  //   window.setTimeout(
  //     () => this.setState({ health: 150, maxHealth: 150 }),
  //     8000
  //   );
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
