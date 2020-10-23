import React from "react";
import Create from "./components/Create"
import Vote from "./components/Vote"
import Results from "./components/Results"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        <Create />
        <Vote />
        <Results />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
