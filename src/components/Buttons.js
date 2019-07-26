import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const colorSelector = props =>
  props.disabled
    ? "#8eb08f"
    : props.primary
    ? "#4caf50"
    : props.danger
    ? "#af4c4c"
    : "#e9e9e9";

const StyledButton = styled.button`
  background-color: ${colorSelector};
  border: none;
  color: ${props => (!props.primary && !props.danger ? "#7c7c7c" : "white")};
  padding: 0.6em 1.4em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 3px;
  margin: auto 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const DefaultButton = ({ children, ...othersProps }) => (
  <StyledButton {...othersProps}>{children}</StyledButton>
);

const Button = ({ link, children, ...othersProps }) => {
  return link ? (
    <Link to={link}>
      <DefaultButton {...othersProps}>{children}</DefaultButton>
    </Link>
  ) : (
    <DefaultButton {...othersProps}>{children}</DefaultButton>
  );
};

export default Button;
