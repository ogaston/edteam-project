import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { Title } from "../components/StyledText";

const List = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const FlexColum = styled.div`
  flex: ${props => props.value || "1"};
  padding: 5px;
`;

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postListSources: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(response => {
        this.setState({
          postListSources: response
        });
      });
  }

  render() {
    return this.state.postListSources.length ? (
      <List>
        {this.state.postListSources.map((v, i) => (
          <FlexColum key={i}>
            <Card key={i} text={v.body} title={v.title}  id={v.id} />
          </FlexColum>
        ))}
      </List>
    ) : (
      <FlexColum>
        <Title>Cargando...</Title>
      </FlexColum>
    );
  }
}

export default PostList;
