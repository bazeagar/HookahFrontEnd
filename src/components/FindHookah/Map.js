import "../styles/Map.scss";
import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import config from '../../config';
import { usePreviousProps } from "@mui/utils";

const GM_API_KEY = config.GM_API_KEY;
const GC_API_KEY = config.GC_API_KEY;

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const GMap = ({ className, list, center, zoom, setActiveListItem }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    list.map((item) => new window.google.maps.Marker({
      position: item.address.position,
      map: map,
      title: item.title
    }).addListener("click", () => setActiveListItem(item)))
  });

  return (
    <div className={className ?? "Map"} ref={ref} />
  );
};

const Map = (props) => {
  const center = { lat: -37.8148335, lng: 144.937862 };
  const zoom = 13;
  console.log(props.activeListItem);
  return (
    <Wrapper apiKey={GM_API_KEY} render={render}>
      {
        props.activeListItem
        ?  <GMap className={props.class} list = {props.list} center={props.activeListItem.address.position} zoom={18} setActiveListItem={props.setActiveListItem} />
        :  <GMap className={props.class} list = {props.list} center={center} zoom={zoom} setActiveListItem={props.setActiveListItem} />
      }
    </Wrapper>
  );
};

export default Map;
