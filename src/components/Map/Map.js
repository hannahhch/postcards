import React from 'react';
import './Map.css'

const Map = (props) => {
  return props.dataFromParent.map(data => {
    return (
      <div key={data._id} id={data._id} className='card'>
        <h1>{data.sender}</h1>
        <div>{data.location}</div>
        <div>{data.city} {data.state} {data.country}</div>
        <div>{data.year}</div>
      </div>
    )
  })
}

export default Map;

