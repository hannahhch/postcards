import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostcardService from './services/postcard-service';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <PostcardService />
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
