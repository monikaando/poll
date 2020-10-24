import React from "react";
import Create from "./components/Create"
import Vote from "./components/Vote"
import Results from "./components/Results"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className="app d-flex flex-column justify-content-between" >
      <div className="d-flex pb-3 m-5 flex-row justify-content-between">
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
