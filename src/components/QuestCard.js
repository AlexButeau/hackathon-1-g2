import React from 'react';
import './styles/QuestCard.scss';
import { Link } from 'react-router-dom';

const QuestCard = ({ questData }) => {
  return (
    <div className='quest-card'>
      <div className='title'>
        <h2>{questData.name}</h2>
        <p>
          <span className='knight-icon'></span>
          {questData.assignment.label}
        </p>
      </div>
      <p className='localization'>
        <span className='pin'></span> {questData.localization}
      </p>
      <br />
      <p className='quest-description'></p>
      <br />
      <h3>
        <span className='reward-icon'></span> {questData.reward}
      </h3>
      <div className='button-details'>
        <Link to={`/quest/${questData.id}`}>More Infos</Link>
      </div>
    </div>
  );
};

export default QuestCard;
