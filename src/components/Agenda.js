import React, {useEffect, useState} from 'react';
import moment from 'moment';
import './styles/Agenda.scss';
import axios from 'axios';
import FullCalendar from 'fullcalendar-reactwrapper';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Agenda = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [events, setEvents] = useState([]);
    const [titleEvent, setTitleEvent] = useState('');
    const [knightAssignedEvent, setKnightAssignedEvent] = useState('');
    const [dateEvent, setDateEvent] = useState(moment('470-11-20').format('YYYY-MM-DD'));
    const [commEvent, setCommEvent] = useState('');

    useEffect(() =>{
        axios.get("https://kaamelot-server.herokuapp.com/agenda")
            .then((res) => res.data)
            .then((data)=>{
                setEvents(data);
            });
    },[]);

    const conveneKnights = () => {
        const title = titleEvent + ' ' + knightAssignedEvent;
        axios.post('https://kaamelot-server.herokuapp.com/agenda', {
            title: title,
            start: dateEvent 
          })
          .then(function (response) {
            setEvents(response.data);
          });
    }

    const showEvent = (title) => {
        // return (<Popup trigger={<button> Trigger</button>} position="right center">
        //     <div>{title}</div>
        // </Popup>);
    }


    return (
    <>
    <div className='agendaSection'>
        <h2>Meetings with the knights</h2>
        <div className="calendarSection">
            <FullCalendar
                id="agenda"
                header={{
                    left: 'month,basicWeek,basicDay',
                    center: '',
                    right: 'prev,next'
                }}
                defaultDate = {moment('470-11-20').format('YYYY-MM-DD')}
                events={events}
                // eventClick={(e) => showEvent(e.title)}
                navLinks= {true} // can click day/week names to navigate views
                editable= {true}
                height={480}
                selectable={true}
                eventLimit= {true} // allow "more" link when too many events
            />
        </div>
            <form>
                <h3>Convene Knights :</h3>
                <input type='text' value={titleEvent} placeholder='Subject...' onChange={(e) => setTitleEvent(e.target.value)}/>
                <input type='text' value={knightAssignedEvent} placeholder='Knights...' onChange={(e) => setKnightAssignedEvent(e.target.value)}/>
                <input className='datepicker' type='date' value={dateEvent} onChange={(e) => setDateEvent(e.target.value)}/>
                <textarea value={commEvent} placeholder='Comment...' onChange={(e) => setCommEvent(e.target.value)}/>
                <input type='button' value='Convene' onClick={conveneKnights} />
            </form>
        </div>
        </>
    );
}

export default Agenda;