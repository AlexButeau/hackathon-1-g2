import React from 'react';
import Navbar from './Navbar';
// import Agenda from './Agenda';
import QuestsList from './QuestsList';
import './styles/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      {/* <Agenda /> */}
      <Navbar />
      <QuestsList />
    </div>
  );
};

export default Home;
