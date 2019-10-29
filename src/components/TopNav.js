import React from "react";
import styled from "styled-components";
import Button from "./Buttons";
import { FlexGrid, Shadow, LogoText } from "./Styled";

const Container = styled(Shadow)`
  margin-bottom: 0.8em;
  padding: 1em 0.6em;
`;

const NavContainer = styled.nav`
  display: flex;
`;

const FlexGridCustom = styled(FlexGrid)`
  text-align: right;
`;

/**
 * Componente de TopNav
 *
 * Este renderiza la barra de navegación superior
 */
const TopNav = () => {
  return (
    <Container>
      <NavContainer>
        <FlexGridCustom>
          <img
            src={
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            }
            alt="React Logo"
            width="50px"
          />
        </FlexGridCustom>
        <LogoText>React Simple</LogoText>
        <FlexGridCustom value={4}>
          <Button link="/"> Inicio </Button>
          <Button link="/nuevo"> Nuevo + </Button>
        </FlexGridCustom>
      </NavContainer>
    </Container>
  );
};

export default TopNav;
