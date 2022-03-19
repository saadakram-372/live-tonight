/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "@mui/material";

const SpotifyApi = ({ artistName }) => {
  // States
  const [spotifyToken, setSpotifyToken] = useState(null);
  const [albums, setAlbums] = useState([]);

  // Constants
  const CLIENT_ID = "0d4924e733134eb29bcd6d1ae9f7d4e7";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  // UseEffect to save the spotify token when once user logs in and redirects to the web app url
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setSpotifyToken(token);
  }, []);

  // Function to logout of the spotify api
  const logout = () => {
    setSpotifyToken("");
    window.localStorage.removeItem("token");
    setAlbums([]);
  };

  // UseEffect to get the album of the artist searched
  useEffect(async () => {
    if (
      artistName !== " " &&
      artistName.length !== 0 &&
      spotifyToken !== null &&
      spotifyToken.length !== 0
    ) {
      const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
        params: {
          query: encodeURIComponent(artistName),
          type: "album",
        },
      });
      setAlbums(data.albums.items);
    }
  }, [artistName]);

  // Function to render the list of albums of an artist
  const renderAlbums = () => {
    return albums.map((album, index) => (
      <div key={index}>
        <div
          style={{
            overflow: "scroll",
            flexDirection: "row",
            display: "flex",
            margin: 32,
          }}
        >
          {/* Album cover */}
          {album.images.length ? (
            <img
              width={100}
              height={100}
              style={{ borderRadius: 8, marginRight: 32 }}
              src={album.images[0].url}
              alt=""
            />
          ) : (
            <div>No Image</div>
          )}

          {/* Div for album details */}
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {/* Album name */}
            <span
              style={{
                textAlign: "left",
                alignSelf: "center",
                fontWeight: "600",
                fontSize: 20,
                width: "100%",
              }}
            >
              Album Name: {album.name}
            </span>

            {/* Number of tracks in an album */}
            <span
              style={{
                textAlign: "left",
                alignSelf: "center",
                fontWeight: "400",
                fontSize: 16,
                width: "100%",
              }}
            >
              Total Tracks: {album.total_tracks}
            </span>

            {/* Album release date */}
            <span
              style={{
                textAlign: "left",
                alignSelf: "center",
                fontWeight: "400",
                fontSize: 16,
                width: "100%",
              }}
            >
              Release Date: {album.release_date}
            </span>

            {/* Album link to spotify app  */}
            <a
              style={{
                textAlign: "left",
                alignSelf: "center",
                fontWeight: "400",
                fontSize: 14,
                width: "100%",
                marginTop: 12,
              }}
              href={album.uri}
            >
              Spotify Link
            </a>
          </div>
        </div>
        <Divider />
      </div>
    ));
  };
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#808080" }}>
      {/* Header */}
      <h2
        style={{
          color: "#000000",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Spotify
      </h2>

      {/* Login/Logout toggle button */}
      {!spotifyToken ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
      <div style={{ overflow: "scroll", maxHeight: "80%", paddingBottom: 32 }}>
        {renderAlbums()}
      </div>
    </div>
  );
};

export default SpotifyApi;
