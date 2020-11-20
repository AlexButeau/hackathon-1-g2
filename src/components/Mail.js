import React, { useState } from 'react';
import axios from 'axios';
import './styles/Mail.scss';

const Mail = (props) => {
  const [name, setName] = useState();
  const [object, setObject] = useState();
  const [message, setMessage] = useState();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3002/send`, {name: name, object: object, message: message}) 
      .then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  const resetForm = () => {
    setName('');
    setObject('');
    setMessage('');
  }

    return(
      <div className="mail">
        <h1 className="title" >Communicate with your Knights</h1>
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
              <label htmlFor="name"></label>
              <select name="name" id="pet-select" value={name} onChange={e => setName(e.target.value)} >
                  <option value="">--Please choose a Knight--</option>
                  <option value="lancelot">Lancelot</option>
                  <option value="perceval">Perceval</option>
                  <option value="karadoc">Karadoc</option>
                  <option value="leodagan">Leodagan</option>
                  <option value="yvain">Yvain</option>
                  <option value="gauvain">Gauvain</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="object"></label>
              <input type="text" className="form-control" id="text" placeholder="Object" value={object} onChange={e => setObject(e.target.value)} />
          </div>
          <div className="form-group">
              <label htmlFor="message"></label>
              <textarea className="form-control" rows="5" id="message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
          </div>
          <button type="submit" className="submit" >Submit</button>
        </form>
      </div>
    );
}

export default Mail;