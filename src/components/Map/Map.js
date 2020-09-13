import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css'


const LeafletMap = (props) => {
  const position = { lon: -104.991531, lat: 39.742043 }
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
      <Map center={position} zoom={2}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </Map>
    </div>
  )
};

export default LeafletMap;

