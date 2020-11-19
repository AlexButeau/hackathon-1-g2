import React from 'react';

const QuestDetails = (props) => {
  const id = props.match.params; // recuperer l'id depuis les params d'url
  return <div className='quest-details'>{id}</div>;
};

export default QuestDetails;
