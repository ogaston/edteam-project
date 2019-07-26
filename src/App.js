import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./redux/index";
import "./App.css";
import TopNav from "./components/TopNav";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "./containers/PostList";
import Form from "./containers/Form";

class App extends React.Component {
  componentDidMount() {
    this.props.onGetPosts();
  }

  render() {
    return (
      <section>
        <BrowserRouter>
          <TopNav />
          <div className="App" style={{ padding: "25px" }}>
            <Route
              path="/"
              exact
              component={() => (
                <PostList postListSources={this.props.posts} {...this.props} />
              )}
            />
            <Route
              path="/nuevo"
              component={() => (
                <Form
                  hook="posts"
                  method="POST"
                  type="Nueva"
                  func={this.props.onCreatePost}
                  {...this.props}
                />
              )}
            />
            <Route
              path="/actualizar/:id"
              component={({ match }) => (
                <Form
                  hook={`posts/${match.params.id}`}
                  method="PUT"
                  type="Actualizar"
                  id={match.params.id}
                  func={this.props.onUpdatePost}
                  {...this.props}
                />
              )}
            />
            <Route
              path="/eliminar/:id"
              component={({ match, history }) => (
                <Form
                  hook={`posts/${match.params.id}`}
                  method="DELETE"
                  type="Eliminar"
                  id={match.params.id}
                  history={history}
                  func={this.props.onDeletePost}
                  {...this.props}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
