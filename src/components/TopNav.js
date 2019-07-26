import React from "react";
import styled from "styled-components";
import Button from "./Buttons";

const Container = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  align-items: center;
  margin-bottom: 0.8em;
  padding: 1em 0.6em;
`;

const NavContainer = styled.nav`
  display: flex;
`;

const FlexGrid = styled.div`
  flex: ${props => props.value || "1"};
  padding: 5px;
  text-align: right;
`;

const TopNav = () => {
  return (
    <Container>
      <NavContainer>
        <FlexGrid>
          <img
            src={
              "https://drupal.ed.team/sites/default/files/inline-images/EDteam-isotipo.png"
            }
            alt={"Edteam Logo"}
            width={"50px"}
          />
        </FlexGrid>
        <FlexGrid value={4}>
          <Button link="/"> Inicio </Button>
          <Button link="/nuevo"> Nuevo + </Button>
        </FlexGrid>
      </NavContainer>
    </Container>
  );
};

export default TopNav;
