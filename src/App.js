import React from "react";
import FreeBoard from "./pages/freeboard/FreeBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageDt from "./pages/freeboard/PageDt";

function App() {
  return (
    <Router>
      <Route exact path="/freeboard" component={FreeBoard} />
      <Route path="/freeboard/:board_id" component={PageDt} />
    </Router>
  );
}

export default App;
