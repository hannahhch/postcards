import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css'


const LeafletMap = (props) => {
  const initialPosition = { lon: -104.991531, lat: 39.742043 }
  let markers = props.dataFromParent.map(data => {
    return (
      <div key={data._id}>
        <Marker position={{ lon: data.lon, lat: data.lat}}>
          <Popup>
            <div>{data.sender}</div>
            <div>{data.location}</div>
            <div>{data.city} {data.state} {data.country}</div>
            <div>{data.year}</div>
          </Popup>
        </Marker>
      </div>
    )
  });
  
  return (
    <div className="map">
      <Map center={initialPosition} zoom={3}>
        <TileLayer
          url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        {markers}
      </Map>
    </div>
  )
};

export default LeafletMap;

