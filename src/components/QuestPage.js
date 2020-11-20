import React from 'react';
import QuestPost from './QuestPost';
import QuestsList from './QuestsList';

const QuestPage = () => {
  return (
    <div>
      <QuestsList />
      <QuestPost />
    </div>
  );
};

export default QuestPage;
