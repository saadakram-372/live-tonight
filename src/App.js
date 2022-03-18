/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";

// Core component
import AppHeader from "./components/AppHeader";
import GoogleMap from "./components/GoogleMap";
import BandsInTown from "./components/BandsInTown";

// Helper function
import { bandsInTown } from "./helper";
import moment from "moment";

function App() {
  // States
  const [searchInput, setSearchInput] = useState("");
  const [artistName, setArtistName] = useState("");
  const [bandsData, setBandsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // constant
  const CURR_DATE = moment().format("YYYY-MM-DD");

  useEffect(() => {
    if (artistName !== " ") {
      bandsInTown({ input: artistName }).then((value) => {
        setLoading(false);
        setBandsData(
          value.data.filter((value) => CURR_DATE <= value?.datetime)
        );
      });
    }
  }, [artistName]);

  return (
    <div className="App">
      {/* Header */}
      <AppHeader />

      <div style={{ flexDirection: "row", display: "flex" }}>
        {/* Map */}
        <GoogleMap bandsData={bandsData} />

        {/* Bands in town container */}
        <BandsInTown
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setArtistName={setArtistName}
          bandsData={bandsData}
          CURR_DATE={CURR_DATE}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}

export default App;
