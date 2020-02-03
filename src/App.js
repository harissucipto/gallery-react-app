import React from "react";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";
import Layout from "./components/Layout";
import Photos from "./pages/Photos";
import Post from "./pages/Post";

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Photos} />
            <Route path="/post" component={Post} />
          </Switch>
        </Layout>
      </Router>
    </StoreProvider>
  );
}

export default App;
