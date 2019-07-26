import React from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "./containers/PostList";
import Form from "./containers/Form";

function App() {
  return (
    <section>
      <BrowserRouter>
        <TopNav />
        <div className="App" style={{ padding: "25px" }}>
          <Route path="/" exact component={PostList} />
          <Route
            path="/nuevo"
            component={() => (
              <Form hook="posts" method="POST" type="Nueva" />
            )}
          />
          <Route
            path="/actualizar/:id"
            component={({ match }) => (
              <Form
                hook={`posts`}
                method="PUT"
                type="Actualizar"
                id={match.params.id}
              />
            )}
          />
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
