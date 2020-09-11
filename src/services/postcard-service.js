import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import LeafletMap from '../components/Map/Map';
import { GoogleProvider } from 'leaflet-geosearch';

const PostcardService = () => {
  const [postcards, setPostcards] = useState(null);
  const provider = new GoogleProvider({
    params: {
      key: 'AIzaSyDFxdIE3cbGB7T64Lnj5RRy6T6nRia2mww',
    },
  });

  async function fetchData (endpoint) {
    try {
      const response = await fetch(endpoint);
      const json = await response.json();
      getSearchableStrings(json);
      await getLongAndLat(json)
      setPostcards(json);
    }
    catch(error) {
      console.error(error)
    }
  }

  function getLongAndLat(data) {
    return Promise.all(
      data.map(el => {
        return provider.search({
          query: el.searchString
        })
      })
    ).then(providerValues => providerValues.forEach((value, index) => {
          const dataItem = data[index];
          if (value[0] !== undefined) {
            dataItem.lon = value[0].x;
            dataItem.lat = value[0].y;
          } else {
            dataItem.lon = null;
            dataItem.lat = null;
          }
      })
    )
  }

  const getSearchableStrings = (data) => {
    data.forEach(el => {
      el.searchString = `${el.country} ${el.city} ${el.state}`;
    });
    return data;
  }

  useEffect(() => {
    fetchData('http://pure-castle-62242.herokuapp.com/postcards');
  },[]);

  if (!postcards) {
    return <Loader/>
  }
  return <LeafletMap dataFromParent={postcards}/>
}

export default PostcardService;
