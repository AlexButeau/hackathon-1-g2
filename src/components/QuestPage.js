import React from 'react';
import QuestPost from './QuestPost';
import QuestsList from './QuestsList';
import './styles/QuestPage.scss';

const QuestPage = () => {
  return (
    <div className='quest-list-page'>
      <QuestsList />
      <QuestPost />
    </div>
  );
};

export default QuestPage;
