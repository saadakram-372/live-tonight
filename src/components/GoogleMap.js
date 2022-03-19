/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const APPI_KEY = "AIzaSyCUuk6mQyMlLnU73UhMC8TWCtZ_rTHMvFg";

const GoogleMap = ({ bandsData }) => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    lng: null,
  });
  const ZOOM = 10;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const Marker = (props) => {
    const { color, name, image } = props;
    return (
      <div
        className="marker"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      >
        <img
          src={image}
          className="Concert"
          style={{ height: 70, width: 70 }}
        />
      </div>
    );
  };

  return (
    <div>
      {currentLocation.lat !== null && currentLocation.lng !== null ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: APPI_KEY }}
          defaultCenter={currentLocation}
          defaultZoom={ZOOM}
        >
          <Marker
            lat={currentLocation.lat}
            lng={currentLocation.lng}
            name="My Marker"
            image={require("../assets/current_marker.png")}
          />
          {bandsData.map((val, index) => {
            return (
              <Marker
                lat={val.venue.latitude}
                lng={val.venue.longitude}
                name={val.lineup[0]}
                image={require("../assets/marker.png")}
              />
            );
          })}
        </GoogleMapReact>
      ) : null}
    </div>
  );
};

export default GoogleMap;
