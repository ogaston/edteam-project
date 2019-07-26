import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { Title } from "../components/StyledText";

const List = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const FlexGrid = styled.div`
  flex: ${props => props.value || "1"};
  padding: 5px;
`;

class PostList extends React.Component {
  render() {
    return this.props.postListSources.length ? (
      <List>
        {this.props.postListSources.map((v, i) => (
          <FlexGrid key={i}>
            <Card key={i} text={v.body} title={v.title} id={v.id} />
          </FlexGrid>
        ))}
      </List>
    ) : (
      <FlexGrid>
        <Title>Cargando...</Title>
      </FlexGrid>
    );
  }
}

export default PostList;
