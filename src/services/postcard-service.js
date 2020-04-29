import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import Map from '../components/Map/Map';

const PostcardService = () => {
  const [postcards, setPostcards] = useState(null);

  async function fetchData (endpoint) {
    try {
      const response = await fetch(endpoint);
      const json = await response.json()
      setPostcards(json);
    }
    catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData('http://pure-castle-62242.herokuapp.com/postcards');
  },[]);

  if (!postcards) {
    return <Loader/>
  }
  return <Map dataFromParent={postcards}/>
}

export default PostcardService;
