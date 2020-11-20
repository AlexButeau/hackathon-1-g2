import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './styles/Agenda.scss';
import FullCalendar from 'fullcalendar-reactwrapper';
import QuestsList from './QuestsList';
import axios from 'axios';
import Navbar from './Navbar';
import QuestPost from './QuestPost';
import './styles/Home.scss';

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get('https://kaamelot-server.herokuapp.com/agenda')
      .then((res) => res.data)
      .then((data) => {
        setEvents(data);
      });
  }, []);
  return (
    <div className='home'>
      <div className='agendaSection'>
        <FullCalendar
          id='agenda'
          header={{
            left: 'month,basicWeek,basicDay',
            center: '',
            right: 'prev,next',
          }}
          defaultDate={moment('0470-11-20')} // caution, i had to remove the .format to make it work on chrome
          events={events}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          height={450}
          selectable={true}
          eventLimit={true} // allow "more" link when too many events
        />
      </div>

      <Navbar />
      <QuestsList />
      <QuestPost />
    </div>
  );
};

export default Home;
