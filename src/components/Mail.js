import React, { useState } from 'react';
import axios from 'axios';
import './styles/Mail.scss';

const Mail = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3002/send`, {name: name, email: email, message: message}) 
      .then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        console.log(name) 
        resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

    return(
      <div className="mail">
        <h1 className="title" >Communicate with your Knights</h1>
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-select">
              <label htmlFor="name"></label>
              <select name="name" className="knight" id="knight-select" value={name} onChange={e => setName(e.target.value)} >
                  <option value="">--Please choose a Knight--</option>
                  <option value="bohort">Bohort</option>
                  <option value="calogrenant">Calogrenant</option>
                  <option value="galessin">Galessin</option>
                  <option value="gauvain">Gauvain</option>
                  <option value="karadoc">Karadoc</option>
                  <option value="lancelot">Lancelot</option>
                  <option value="leodagan">Leodagan</option>
                  <option value="perceval">Perceval</option>
                  <option value="yvain">Yvain</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" className="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
              <label htmlFor="message"></label>
              <textarea className="message" rows="5" id="message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
          </div>
          <button type="submit" className="submit" >Submit</button>
        </form>
      </div>
    );
}

export default Mail;