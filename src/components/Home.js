import React from 'react';
import moment from 'moment';
import './styles/Agenda.scss'
import FullCalendar from 'fullcalendar-reactwrapper';
import QuestsList from './QuestsList';

const Home = () => {
  const events = [{
          title: 'Birthday Party',
          start: '470-11-13 07:00:00'
      },
      {
          title: 'Click for Google',
          start: '470-11-28'
      }];
  return (
    <div className='home'>
      <div className='agendaSection'>
      <FullCalendar
            id="agenda"
            header={{
              center: '',
              right: 'prev,next'
            }}
            defaultDate = {moment('470-11-20').format('YYYY-MM-DD')}
            events={events}
            navLinks={true} // can click day/week names to navigate views
            editable={true}
            height={450}
            today={false}
            selectable={true}
            eventLimit={true} // allow "more" link when too many events
        />
        </div>
      {/* <QuestsList /> */}
    </div>
  );
};

export default Home;
