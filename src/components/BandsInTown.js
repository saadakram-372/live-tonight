/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

// Libraries
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";

// Core components
import SearchBar from "./SearchBar";
import { Divider } from "@mui/material";

export default function BandsInTown(props) {
  const {
    searchInput,
    setSearchInput,
    setArtistName,
    bandsData,
    loading,
    setLoading,
  } = props;

  const [artistData, setArtistData] = useState({});

  useEffect(() => {
    if (bandsData) {
      setArtistData(bandsData[0]?.artist);
    }
  }, [bandsData]);

  return (
    <div style={{ height: "60vh", width: "30%", backgroundColor: "#808080" }}>
      <div style={{ height: "15%" }}>
        {/* Search Bar */}
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setArtistName={setArtistName}
          setLoading={setLoading}
        />
      </div>

      <div
        style={{
          height: "85%",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          overflow: "scroll",
        }}
      >
        {loading ? <CircularProgress style={{ color: "#FFFFFF" }} /> : null}
        <div style={{ paddingLeft: 32, paddingRight: 32 }}>
          {bandsData.map((item, index) => {
            return bandsData.length > 0 ? (
              <>
                <div
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    flexDirection: "row",
                    display: "flex",
                    marginTop: 16,
                    marginBottom: 16,
                  }}
                >
                  <img
                    src={artistData?.image_url}
                    style={{
                      borderRadius: 8,
                      height: 100,
                      width: 100,
                      marginRight: 32,
                    }}
                  />
                  <div style={{ flexDirection: "column", display: "flex" }}>
                    <span
                      style={{
                        textAlign: "left",
                        alignSelf: "center",
                        fontWeight: "600",
                        fontSize: 20,
                        width: "100%",
                      }}
                    >
                      Artist: {item.lineup[0]}
                    </span>

                    <span
                      style={{
                        textAlign: "left",
                        alignSelf: "center",
                        fontWeight: "400",
                        fontSize: 16,
                        width: "100%",
                      }}
                    >
                      City: {item?.venue?.city}
                    </span>

                    <span
                      style={{
                        textAlign: "left",
                        alignSelf: "center",
                        fontWeight: "400",
                        fontSize: 16,
                        width: "100%",
                      }}
                    >
                      Country: {item?.venue?.country}
                    </span>

                    <span
                      style={{
                        textAlign: "left",
                        alignSelf: "center",
                        fontWeight: "200",
                        fontSize: 14,
                        width: "100%",
                        marginTop: 12,
                      }}
                    >
                      Date: {moment(item?.datetime).format("YYYY-MM-DD")}
                    </span>
                  </div>
                </div>
                <Divider />
              </>
            ) : (
              bandsData.length ===
                0(
                  <div style={{ height: "100%", width: "100%" }}>
                    <span
                      style={{
                        textAlign: "left",
                        alignSelf: "center",
                        fontWeight: "600",
                        fontSize: 14,
                        width: "100%",
                        marginTop: 16,
                      }}
                    >
                      No upcoming events!
                    </span>
                  </div>
                )
            );
          })}
        </div>
      </div>
    </div>
  );
}
