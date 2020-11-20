import React, {useEffect, useState, useRef} from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';

const PopupEvent = (props) =>{

    const {event} = props;

    return(<Popup trigger={<button > Trigger</button>} position="right center">
        <div>{event.title}</div>
    </Popup>);
}