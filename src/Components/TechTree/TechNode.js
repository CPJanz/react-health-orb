import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  grid-row: ${props => props.tier};
  grid-column: ${props => props.column};
  border: white 1px solid;
  margin: 10px;
  border-radius: 5px;

  &.locked {
    background: darkgrey;
    border: grey 1px solid;
    color: grey;
  }

  &.highlight,
  &:hover {
    border: yellow 1px solid;
    color: yellow;
  }

  &.owned {
    background: black;
  }
`;

export default function TechNode(props) {
  const { clickFn } = props;
  return (
    <Wrapper
      className={(props.highlighted && "highlight") + " " + props.status}
      {...props}
      onMouseOver={() => props.hoverFn(props.downstream)}
      onMouseOut={() => props.hoverFn([])}
      onClick={() => clickFn(props.id)}
    >
      {props.name}
    </Wrapper>
  );
}
