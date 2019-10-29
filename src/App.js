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
              path="/simple-react-project/"
              exact
              component={() => (
                <PostList postListSources={this.props.posts} {...this.props} />
              )}
            />
            <Route
              path="/simple-react-project/nuevo"
              component={() => (
                <Form
                  hook="posts"
                  type="Nueva"
                  func={this.props.onCreatePost}
                  {...this.props}
                />
              )}
            />
            <Route
              path="/simple-react-project/actualizar/:id"
              component={({ match }) => (
                <Form
                  hook={`posts/${match.params.id}`}
                  type="Actualizar"
                  id={+match.params.id}
                  func={this.props.onUpdatePost}
                  {...this.props}
                />
              )}
            />
            <Route
              path="/simple-react-project/eliminar/:id"
              component={({ match, history }) => (
                <Form
                  hook={`posts/${match.params.id}`}
                  type="Eliminar"
                  id={+match.params.id}
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
