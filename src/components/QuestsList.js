import React, { useEffect, useState } from 'react';
import QuestCard from './QuestCard';
import axios from 'axios';
import './styles/QuestsList.scss';

const QuestsList = () => {
  const [quests, setQuests] = useState([]);
  const [chevaliers, setChevaliers] = useState([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get('https://kaamelot-server.herokuapp.com/quests', {
        cancelToken: source.token,
      })
      .then((res) => res.data)
      .then((data) => {
        setQuests(data);
      })
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          // handle error
          console.error('error while requestiong the api' + thrown.message);
        }
      });
  }, []);

  const handleFilter = (target) => {
    if (chevaliers.includes(target.id)) {
      let newChevaliers = chevaliers.filter((item) => item !== target.id);
      setChevaliers(newChevaliers);
    } else {
      setChevaliers((prevState) => [...prevState, target.id]);
    }

    if (target.className !== 'filterBtn-on') {
      target.className = 'filterBtn-on';
    } else {
      target.className = 'filterBtn-off';
    }
  };

  return (
    <div className='quests-list'>
      <h1>Ongoing Quests</h1>
      <div className='filterContainer'>
        <p>Filter on : </p>
        <button
          id='Lancelot'
          className='filterBtn-on'
          onClick={(e) => handleFilter(e.target)}
        >
          Lancelot
        </button>
        <button
          id='Gauvain'
          className='filterBtn-on'
          onClick={(e) => handleFilter(e.target)}
        >
          Gauvain
        </button>
        <button
          id='Yvain'
          className='filterBtn-on'
          onClick={(e) => handleFilter(e.target)}
        >
          Yvain
        </button>
        <button
          id='Leodagan'
          className='filterBtn-on'
          onClick={(e) => handleFilter(e.target)}
        >
          Leodagan
        </button>
        <button
          id='Karadok'
          className='filterBtn-on'
          onClick={(e) => handleFilter(e.target)}
        >
          Karadok
        </button>
        <button
          id='Perceval'
          className='filterBtn-on'
          onClick={(e) => handleFilter(e.target)}
        >
          Perceval
        </button>
      </div>
      {quests.length > 0 ? (
        quests
          .filter((item) => {
            if (chevaliers.length > 0) {
              console.log(chevaliers.indexOf(item.assignment.label));
              if (chevaliers.indexOf(item.assignment.label) >= 0) {
                return true;
              } else {
                return false;
              }
            } else {
              return true;
            }
          })
          .filter((item) => item.name !== '')
          .sort((a, b) => {
            return b.value - a.value;
          })
          .map((quest) => <QuestCard key={quest.id} questData={quest} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuestsList;
