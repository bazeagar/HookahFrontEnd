import "./styles/Map.scss";
import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import config from '../config';

const API_KEY = config.API_KEY;

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const GMap = ({ className, center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div className={className ?? "Map"} ref={ref} id="map" />;
};

const Map = (props) => {
  const center = { lat: -37.8148335, lng: 144.937862 };
  const zoom = 17;
  return (
    <Wrapper apiKey={API_KEY} render={render}>
      <GMap className={props.class} center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default Map;
