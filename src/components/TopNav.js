import React from "react";
import styled from "styled-components";
import Button from "./Buttons";
import { FlexGrid, Shadow } from "./Styled"

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
              "https://drupal.ed.team/sites/default/files/inline-images/EDteam-isotipo.png"
            }
            alt={"Edteam Logo"}
            width={"50px"}
          />
        </FlexGridCustom>
        <FlexGridCustom value={4}>
          <Button link="/"> Inicio </Button>
          <Button link="/nuevo"> Nuevo + </Button>
        </FlexGridCustom>
      </NavContainer>
    </Container>
  );
};

export default TopNav;
