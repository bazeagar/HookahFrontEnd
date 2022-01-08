import "./styles/Map.scss";
import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import config from '../config';

const GM_API_KEY = config.GM_API_KEY;
const GC_API_KEY = config.GC_API_KEY;

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const GMap = ({ className, list, center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    list.map((item) =>
      fetch(`https://plus.codes/api?address=${item.address.plusCode}&key=${GC_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => new window.google.maps.Marker({
          position: result.plus_code.geometry.location,
          map: map}),
        (error) => console.error(error)
    ));
  });

  return (
    <div className={className ?? "Map"} ref={ref} />
  );
};

const Map = (props) => {
  const center = { lat: -37.8148335, lng: 144.937862 };
  const zoom = 15;
  return (
    <Wrapper apiKey={GM_API_KEY} render={render}>
      <GMap className={props.class} list = {props.list} center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default Map;
