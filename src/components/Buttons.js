import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropType from "prop-types";

/**
 * Recibe un objeto props y devuelve el color de acuerdo a la propiedad existente { primary, danger o disabled }
 */
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

/**
 * Componente de DefaultButton
 * 
 * Renderiza un botón estilizado de acuerdo a las propiedades { primary, danger o disabled }
 */
const DefaultButton = ({ children, ...othersProps }) => (
  <StyledButton {...othersProps}>{children}</StyledButton>
);



/**
 * Componente de Button
 * 
 * Renderiza un botón estilizado de acuerdo a las propiedades { primary, danger o disabled }
 * Recibe {link} para utilizarlo para navegación
 * 
 * @param {string} link
 * @param {any} children
 */
const Button = ({ link, children, ...othersProps }) => {
  return link ? (
    <Link to={link}>
      <DefaultButton {...othersProps}>{children}</DefaultButton>
    </Link>
  ) : (
    <DefaultButton {...othersProps}>{children}</DefaultButton>
  );
};


Button.propTypes = {
  link: PropType.string,
  children: PropType.any.isRequired
};

export default Button;
