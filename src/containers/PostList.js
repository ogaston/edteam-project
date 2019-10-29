import React from "react";
import Card from "../components/Card";
import { Title, FlexGrid } from "../components/Styled";
import PostContainer from "./PostContainer";

class PostList extends React.Component {
  render() {
    return this.props.postListSources.length ? (
      <PostContainer>
        {this.props.postListSources.map((v, i) => (
          <FlexGrid key={i}>
            <Card key={i} text={v.body} title={v.title} id={v.id} />
          </FlexGrid>
        ))}
      </PostContainer>
    ) : (
      <FlexGrid>
        <Title>Cargando...</Title>
      </FlexGrid>
    );
  }
}

export default PostList;
