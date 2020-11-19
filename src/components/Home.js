import React from 'react';
import Navbar from './Navbar';
import QuestPost from './QuestPost';
// import Agenda from './Agenda';
import QuestsList from './QuestsList';

const Home = () => {
  return (
    <div className='home'>
      {/* <Agenda /> */}
      <Navbar />
      <QuestPost />
      {/* <QuestsList /> */}
    </div>
  );
};

export default Home;
