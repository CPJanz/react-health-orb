import React from "react";
import styled from "styled-components";
import TechNode from "./TechNode";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default class TechTree extends React.Component {
  state = {
    highlight: [],
    owned: [0]
  };

  hoverFn = nodes => this.setState({ highlight: nodes });
  buyTechFn = (id, status) =>
    status === "unlocked" &&
    this.setState({ owned: [...this.state.owned, id] });

  getStatus = techNode => {
    if (this.state.owned.includes(techNode.id)) {
      return "owned";
    } else {
      return techNode.upstream.filter(id => this.state.owned.includes(id))
        .length === techNode.upstream.length
        ? "unlocked"
        : "locked";
    }
  };

  render() {
    const { highlight } = this.state;
    const { tech } = this.props;
    return (
      <Wrapper>
        {tech.map((techNode, index) => {
          const status = this.getStatus(techNode);
          return (
            <TechNode
              key={index}
              highlighted={highlight.includes(techNode.id) ? true : false}
              status={status}
              {...techNode}
              hoverFn={this.hoverFn}
              clickFn={id => this.buyTechFn(id, status)}
            />
          );
        })}
      </Wrapper>
    );
  }
}
