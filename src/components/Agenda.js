import React, {useState} from 'react';
import moment from 'moment';
import './styles/Agenda.scss'
import FullCalendar from 'fullcalendar-reactwrapper';

const Agenda = () => {
    const [events, setEvents] = useState([]);
    const [titleEvent, setTitleEvent] = useState('');
    const [knightAssignedEvent, setKnightAssignedEvent] = useState('');
    const [dateEvent, setDateEvent] = useState(moment(Date.now()).format('YYYY-MM-DD'));
    const [commEvent, setCommEvent] = useState('');


    const conveneKnights = () => {

    }

    return (
    <>
        <FullCalendar
            id="agenda"
            defaultDate = {moment(Date.now()).format('YYYY-MM-DD')}
            events={events}
            navLinks={true} // can click day/week names to navigate views
            editable={true}
            eventLimit={true} // allow "more" link when too many events
        />
            <form>
                <h3>Convene Knights :</h3>
                <input type='text' value={titleEvent} placeholder='Subject...' onChange={(e) => setTitleEvent(e.target.value)}/>
                <input type='text' value={knightAssignedEvent} placeholder='Knights...' onChange={(e) => setKnightAssignedEvent(e.target.value)}/>
                <input type='date' value={dateEvent} onChange={(e) => setDateEvent(e.target.value)}/>
                <textarea value={commEvent} placeholder='Comment...' onChange={(e) => setCommEvent(e.target.value)}/>
                <input type='button' value='Convene' onClick={conveneKnights} />
            </form>
        </>
    );
}

export default Agenda;