import React, {useEffect, useState, useRef} from 'react';
import moment from 'moment';
import './styles/Agenda.scss';
import axios from 'axios';
import FullCalendar from 'fullcalendar-reactwrapper';

import 'reactjs-popup/dist/index.css';

const Agenda = () => {

    const [showWeekends, setShowWeekends] = useState(false);
    const [events, setEvents] = useState([]);
    const [titleEvent, setTitleEvent] = useState('');
    const [knights, setKnights] = useState([]);
    const [knightAssignedEvent, setKnightAssignedEvent] = useState('');
    const [dateEvent, setDateEvent] = useState(moment('470-11-20').format('YYYY-MM-DD'));
    const [commEvent, setCommEvent] = useState('');

        const knightAssigned = useRef(null);
        const addSelectedKnight = (ref) => {
            ref.target.value !== 'Knight...' ? setKnightAssignedEvent(ref.target.value) : setKnightAssignedEvent('');
        }

    useEffect(() =>{
        axios.get("https://kaamelot-server.herokuapp.com/agenda")
            .then((res) => res.data)
            .then((data)=>{
                setEvents(data);
            });
            axios.get("https://kaamelot-server.herokuapp.com/chevaliers")
            .then((res) => res.data)
            .then((data)=>{
                setKnights(data);
            });
    },[]);

    const toggleWeekends = () => {
        setShowWeekends(!showWeekends);
    }
    const conveneKnights = (e) => {
        e.preventDefault();
        const title = titleEvent + ' with ' + knightAssignedEvent;
        axios.post('https://kaamelot-server.herokuapp.com/agenda', {
            title: title,
            start: dateEvent,
            comment: commEvent 
          })
          .then(function (response) {
            setEvents(response.data);
          });
    }


    return (
    <>
    <div className='agendaSection'>
        <h1>Meetings with the knights</h1>
        <form className='form-event' onSubmit={(e)=>conveneKnights(e)} >
                <h3>Convene Knights :</h3>
                <input type='text' value={titleEvent} placeholder='Subject...' onChange={(e) => setTitleEvent(e.target.value)}/>
                <select ref={knightAssigned} onChange={addSelectedKnight}>
                    <option value={'Knight...'}>Knight...</option>
                    {
                        knights.map(knight => {return <option key={knight.id} value={knight.name}>{knight.name}</option>})
                    }
                </select>
                <input className='datepicker' type='date' value={dateEvent} onChange={(e) => setDateEvent(e.target.value)}/>
                <textarea value={commEvent} placeholder='Comment...' onChange={(e) => setCommEvent(e.target.value)}/>
                <input type='submit' value='Convene' />
            </form>
        <div className="calendarSection">
            <FullCalendar
                id="agenda"
                header={{
                    left: 'month, basicWeek',
                    center: '',
                    right: 'prev,next'
                }}
                defaultDate = {moment('0470-11-20')}
                events={events}
                editable= {true}
                height={480}
                selectable={true}
                weekends={showWeekends}
            />
            <label>Weekends : </label><input type='checkbox' checked={showWeekends} onChange={toggleWeekends}/>
        </div>
        
        </div>
        </>
    );
}

export default Agenda;