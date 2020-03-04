import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background: black;
  clip-path: circle(50%);
  overflow: hidden;
`;

const Fill = styled.div.attrs(props => ({
  style: {
    width: props.size + "px",
    height: props.size + "px",
    clipPath: `polygon(0 ${props.percent}%, 100% ${props.percent}%, 100% 100%, 0 100% )`,
    background: props.color
  }
}))`
  position: absolute;
`;

const Health = styled(Fill)`
  background: rgba(205, 5, 5, 1);

  &.gain {
    transition: clip-path ${props => props.time}ms 0.5s;
  }
`;

const Gain = styled(Fill)`
  background: green;
`;

const Loss = styled(Fill)`
  background: rgb(127, 6, 0);
  transition: clip-path ${props => props.time}ms 0.5s;
`;

const Text = styled.h1`
  background: none;
  position: absolute;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  margin: ${props => props.size - 60}px auto 0 0;
  color: pink;
`;

export default class HealthOrb extends React.Component {
  state = { gainOrLoss: "gain", changePercentage: 0 };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      console.log(prevProps, this.props);
      this.setState({
        gainOrLoss: this.props.health > prevProps.health ? "gain" : "loss",
        changePercentage:
          Math.abs(this.props.health - prevProps.health) / this.props.maxHealth
      });
    }
  }

  render() {
    const { health, maxHealth, size = 100 } = this.props;
    const { gainOrLoss, changePercentage } = this.state;
    const currentPercent = 100 - (100 * health) / maxHealth;

    return (
      <Wrapper size={size}>
        <Gain
          className={gainOrLoss}
          size={size}
          percent={currentPercent}
          time={changePercentage * 1000}
        />
        <Loss
          className={gainOrLoss}
          size={size}
          percent={currentPercent}
          time={changePercentage * 1000}
        />
        <Health
          className={gainOrLoss}
          size={size}
          percent={currentPercent}
          time={changePercentage * 1000}
        />
        <Text size={size}>{health}</Text>
      </Wrapper>
    );
  }
}
