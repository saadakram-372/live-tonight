import React, { useEffect, useState } from "react";
import "./App.css";

// Core component
import AppHeader from "./components/AppHeader";
import GoogleMap from "./components/GoogleMap";
import { bandsInTown } from "./helper";

function App() {
  // States
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    bandsInTown();
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <AppHeader searchInput={searchInput} setSearchInput={setSearchInput} />

      {/* Map */}
      <GoogleMap />
    </div>
  );
}

export default App;
