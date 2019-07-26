import React from "react";
import PropType from "prop-types";
import styled from "styled-components";
import Button from "./Buttons";
import { Text, Title } from "./StyledText";

const FlexGrid = styled.div`
  flex: ${props => props.value || "1"};
  padding: 5px;
`;

const Container = styled.section`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  align-items: center;
  margin: 0.8em auto;
  min-height: 250px;
  min-width: 350px;
  margin: 1em 1em;
`;

const TextContainer = styled.div`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
`;

/**
 * Componente de Card
 *
 * Este renderiza las card por defecto del projecto
 *
 * @param {string} text
 * @param {string} title
 * @param {string} id
 */
const Card = ({ text, title, id }) => {
  return (
    <Container>
      <FlexGrid>
        <TextContainer>
          <FlexGrid value={3}>
            <Title>{title}</Title>
          </FlexGrid>
          <FlexGrid value={3}>
            <Text>{text}</Text>
          </FlexGrid>
          <FlexGrid>
            <Button link={`/actualizar/${id}`} primary>
              Editar
            </Button>
            <Button link={`/eliminar/${id}`}>Eliminar</Button>
          </FlexGrid>
        </TextContainer>
      </FlexGrid>
    </Container>
  );
};

Card.propTypes = {
  text: PropType.string.isRequired,
  title: PropType.string.isRequired,
  id: PropType.number.isRequired
};

export default Card;
