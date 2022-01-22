import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Upcoming from "./pages/upcoming";
import Next from "./pages/next";

const App = () => {
  return <Router>
    <div className="App">
      <div className="container mx-auto pt-10">
        <Routes>
          <Route exact path="/" element={<Upcoming />} />

          <Route exact path="/upcoming" element={<Upcoming />} />

          <Route exact path="/next" element={<Next />} />
        </Routes>
      </div>
    </div>
  </Router>
}

export default App
