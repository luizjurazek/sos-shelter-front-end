import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMapApi = ({ shelterAddress }) => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_API_GOOGLE_MAPS_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.55052, lng: -46.633308 }, // Posição inicial arbitrária
        zoom: 14,
      });

      const fullAddress = `
      ${shelterAddress.street}, 
      ${shelterAddress.number}, 
      ${shelterAddress.city}, 
      ${shelterAddress.state}, 
      ${shelterAddress.zipcode}, 
      ${shelterAddress.country}`;

      geocoder.geocode({ address: fullAddress }, (results, status) => {
        if (status === "OK" && results[0]) {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    });
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default GoogleMapApi;
