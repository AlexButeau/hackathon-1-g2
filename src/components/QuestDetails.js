import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/QuestDetails.scss';

const QuestDetails = (props) => {
  const id = props.match.params.id; // recuperer l'id depuis les params d'url
  const [quest, setQuest] = useState({
    id: '',
    name: '',
    localization: '',
    questDetails: '',
    value: '',
    state: false,
    reward: '',
    assignment: {
      label: '',
    },
  });

  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get('https://kaamelot-server.herokuapp.com/quests', {
        cancelToken: source.token,
      })
      .then((res) => res.data)
      .then((data) => {
        setQuest(data.find((item) => item.id.toString() === id));
      })
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          // handle error
          console.error('error while requesting the api' + thrown.message);
        }
      });
  }, [id]);

  const handleFormRender = () => {
    const apiKey = '76fqibqibiqefb';
    if (formActive) {
      axios
        .put(
          `https://kaamelot-server.herokuapp.com/quest/?id=${quest.id}&apiKey=${apiKey}`,
          quest
        )
        .then((res) => res.data)
        .then((newQuest) => {
          setQuest(newQuest);
        });
    }

    setFormActive((prevValue) => !prevValue);
  };

  return (
    <div className='page'>
      {quest.name !== '' && formActive === false && (
        <div className='quest-details'>
          <div className='title'>
            <h2>{quest.name}</h2>
            <p>{quest.assignment.label}</p>
          </div>
          <p className='localization'>
            <span className='pin'></span> {quest.localization}
          </p>
          <br />
          <p>Difficulty: {quest.value} </p>
          <br />
          <p>{quest.state ? 'Completed' : 'In progress'} </p>
          <br />
          <p className='quest-description'>Your Quest: {quest.questDetails}</p>
          <br />
          <h3>Reward: {quest.reward}</h3>
        </div>
      )}
      {formActive === true && (
        <div className='update-form'>
          <div className='title'>
            <input
              type='text'
              value={quest.name}
              onChange={(e) =>
                setQuest((prevQuest) => {
                  return { ...prevQuest, name: e.target.value };
                })
              }
            />
            <br />
            <select
              name='assignment'
              id='knight-select'
              value={quest.assignment.label}
              onChange={(e) =>
                setQuest((prevQuest) => {
                  return {
                    ...prevQuest,
                    assignment: { label: e.target.value },
                  };
                })
              }
            >
              <option value=''>--Please choose an option--</option>
              <option value='Lancelot'>Lancelot</option>
              <option value='Perceval'>Perceval</option>
              <option value='Karadoc'>Karadoc</option>
              <option value='Leodagan'>Leodagan</option>
              <option value='Yvain'>Yvain</option>
              <option value='Gauvain'>Gauvain</option>
            </select>
          </div>
          <p className='localization'>
            <span className='pin'></span>{' '}
            <input
              type='text'
              value={quest.localization}
              onChange={(e) =>
                setQuest((prevQuest) => {
                  return { ...prevQuest, localization: e.target.value };
                })
              }
            />
          </p>

          <br />
          <p>
            Difficulty:{' '}
            <input
              type='number'
              min='1'
              max='5'
              value={quest.value}
              onChange={(e) =>
                setQuest((prevQuest) => {
                  return { ...prevQuest, value: parseInt(e.target.value) };
                })
              }
            />{' '}
          </p>
          <br />
          <p>
            <select
              name='status'
              id='status-select'
              value={!quest.state ? 'progress' : 'completed'}
              onChange={(e) =>
                setQuest((prevQuest) => {
                  return {
                    ...prevQuest,
                    state: e.target.value === 'progress' ? false : true,
                  };
                })
              }
            >
              <option value=''>--Please choose an option--</option>
              <option value='completed'>Completed</option>
              <option value='progress'>In progree</option>
            </select>
          </p>
          <br />
          <p className='quest-description'>
            Your Quest:{' '}
            <textarea
              name='details'
              required
              value={quest.questDetails}
              onChange={(e) =>
                setQuest((prevQuest) => {
                  return { ...prevQuest, questDetails: e.target.value };
                })
              }
            ></textarea>
          </p>
          <br />
          <h3>
            Reward:{' '}
            <textarea
              name='reward'
              required
              value={quest.reward}
              onChange={(e) =>
                setQuest((prevQuest) => {
                  return { ...prevQuest, reward: e.target.value };
                })
              }
            ></textarea>
          </h3>
        </div>
      )}
      <div className='button-update' onClick={handleFormRender}>
        {!formActive ? 'Update this quest' : 'Save changes'}
      </div>
    </div>
  );
};

export default QuestDetails;
