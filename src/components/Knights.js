import React, { useEffect, useState } from 'react';
import './styles/Knights.scss';
import axios from 'axios';

const Knights = () => {
  useEffect(() => {
    axios
      .get('https://kaamelot-server.herokuapp.com/chevaliers')
      .then((res) => res.data)
      .then((data) => {});
  }, []);
  return <div></div>;
};

export default Knights;
