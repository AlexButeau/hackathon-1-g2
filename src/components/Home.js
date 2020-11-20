import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './styles/Agenda.scss';
import FullCalendar from 'fullcalendar-reactwrapper';
import QuestsList from './QuestsList';
import axios from 'axios';
import Navbar from './Navbar';

import './styles/Home.scss';
// import Knights from './Knights';

const Home = () => {
  const [showWeekends, setShowWeekends] = useState(false);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get('https://kaamelot-server.herokuapp.com/agenda')
      .then((res) => res.data)
      .then((data) => {
        setEvents(data);
      });
  }, []);
  const toggleWeekends = () => {
      setShowWeekends(!showWeekends);
  }
  return (
    <div className='home'>
      <div className='agendaSection'>
        <FullCalendar
          id='agenda'
          header={{
            left: 'month,basicWeek',
            center: '',
            right: 'prev,next',
          }}
          defaultDate={moment('0470-11-20').format('YYYY-MM-DD')}
          events={events}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          height={500}
          weekends={showWeekends}
          selectable={true}
          eventLimit={true} // allow "more" link when too many events
        />
        <label>Weekends : </label><input type='checkbox' checked={showWeekends} onChange={toggleWeekends}/>
      </div>
      {/* <Knights /> */}
      <Navbar />
      <QuestsList />
    </div>
  );
};

export default Home;
