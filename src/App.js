import React from "react";
import FreeBoard from "./pages/freeboard/FreeBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageDt from "./pages/freeboard/PageDt";
import WriteBoard from "./pages/freeboard/WriteBoard";

function App() {
  return (
    <Router>
      <Route exact path="/freeboard" component={FreeBoard} />
      <Route path="/freeboard/:board_id" component={PageDt} />
      <Route path="/writeboard" component={WriteBoard} />
    </Router>
  );
}

export default App;
