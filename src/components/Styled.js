import styled from "styled-components";

export const Title = styled.h1`
  color: #666666;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 0.8em;
  color: #b4b4b4;
  font-weight: 400;
`;

export const FlexGrid = styled.div`
  flex: ${props => props.value || "1"};
  padding: 5px;
`;

export const Container = styled.section`
  width: 70%;
  margin: 1em auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  align-items: center;
  padding: 1em 5em;
  border-radius: 5px;
  max-width: 400px;
`;

export const Shadow = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
