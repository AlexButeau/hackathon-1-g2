import React, { useEffect, useState } from 'react';
import './styles/Knights.scss';
import axios from 'axios';

const Knights = () => {
  const [allKnights, setAllKnights] = useState([]);
  useEffect(() => {
    axios
      .get('https://kaamelot-server.herokuapp.com/chevaliers')
      .then((res) => res.data)
      .then((data) => {
        setAllKnights(data);
      });
  }, []);
  return (
    <div className='knightsContainer'>
      {allKnights.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Knights;
