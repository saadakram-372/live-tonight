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
import SpotifyApi from "./components/SpotifyApi";

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

      <div
        style={{
          height: "100vh",
          width: "100%",
          flexDirection: "row",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div style={{ height: "100vh", width: "60%" }}>
          {/* Map */}
          <GoogleMap bandsData={bandsData} />
        </div>

        {/* Bands in town container */}
        <div
          style={{
            flexDirection: "column",
            width: "40%",
            height: "100%",
            backgroundColor: "#808080",
          }}
        >
          <div
            style={{
              height: "50vh",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
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

          <div
            style={{
              height: "50vh",
              width: "100%",
              backgroundColor: "#808080",
            }}
          >
            <SpotifyApi artistName={artistName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
