import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Upcoming from "./pages/upcoming";
import Next from "./pages/next";
import Header from "./components/Header";

const App = () => {
  return <Router>
    <div className="App">
      <div className="container mx-auto">
        <Header />

        <Routes>
          <Route exact path="/" element={<Next />} />

          <Route exact path="/upcoming" element={<Upcoming />} />
        </Routes>
      </div>
    </div>
  </Router>
}

export default App
