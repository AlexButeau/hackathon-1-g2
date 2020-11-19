import React from 'react';
import { Link } from 'react-router-dom';
import './styles/QuestCard.scss';

const QuestCard = ({ questData }) => {
  return (
    <div className='quest-card'>
      <div className='title'>
        <h2>{questData.name}</h2>
        <p>
          <span className='knight-icon'></span>
          {questData.assignment}
        </p>
      </div>
      <p className='localization'>
        <span className='pin'></span> {questData.localization}
      </p>
      <br />
      <p className='quest-description'>Your Quest: {questData.questDetails}</p>
      <br />
      <h3>
        <span className='reward-icon'></span>Reward: {questData.reward}.
      </h3>
      {/*     <div className="button-details">
        <Link to={`/quest/${questData.id}`}>More Infos</Link>
      </div> */}
    </div>
  );
};

export default QuestCard;
