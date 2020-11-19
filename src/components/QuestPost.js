import React, { useState, useEffect } from 'react';
import './styles/QuestPost.scss';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";


function QuestPost() {
  const [quest, setQuest] = useState([]);
  // const { register, handleSubmit, reset: resetForm } = useForm([{toto: "tata"}]);
  const {control, register, handleSubmit, reset: resetForm } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    axios
    .post(`https://kaamelot-server.herokuapp.com/quests?apiKey=${window.apiKey}`, data)
    .then((res) => res.data)
    .then((newQuest) => {
      setQuest((oldList) => [...oldList, newQuest]);
      console.log(data)
      resetForm();
    })
    .catch(console.error);
  }

  useEffect(() => {
    axios
      .get("https://kaamelot-server.herokuapp.com/quests")
      .then((res) => res.data)
      .then(setQuest);
  }, []);

  
  return(
    <div className="post">
      <h1 className="title" >Add Quest</h1>
      <br />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="questTitle">
          <label htmlFor="name"></label>
            <input name="name" required placeholder="Quest's Title" ref={register}/>
        </div>
        <br />
        <div className="location">
          <label htmlFor="localization"></label>
          <input name="localization" required placeholder="Location" ref={register}/>
        </div>
        <br />
        <div className="assignment">
            <Controller
              name="assignment"
              as={Select}
              options={[
                { label: "Lancelot" },
                { label: "Perceval" },
                { label: "karadoc" },
                { label: "Leodagan" },
                { label: "Yvain" },
                { label: "Gauvain" },
              ]}
              control={control}
              rules={{ required: true }}
        />
        </div>
        <br />
        <div className="value">
          <label htmlFor="value"></label>
          <input name="value" type="number" min="1" max="5" ref={register} />
        </div>
        <br />
        <div className="reward">
          <label htmlFor="reward"></label>
          <textarea name="reward" required placeholder="Reward" ref={register}></textarea>
        </div>
        <br />
        <div className="questDetails">
          <label htmlFor="questDetails"></label>
          <textarea name="questDetails" required placeholder="Quest's Description" ref={register}></textarea>
        </div>
        <br />
        <input type="submit" className="add" placeholder="add" />
      </form>
    </div>
  )
}


export default QuestPost;
