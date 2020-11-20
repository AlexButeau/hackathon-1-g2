import React, { useEffect, useState } from 'react';
import QuestCard from './QuestCard';
import axios from 'axios';
import './styles/QuestsList.scss';

const QuestsList = () => {
  const [quests, setQuests] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [chevalier, setChevalier] = useState('Lancelot');

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

  const handleFilter = (e) => {
    if (e.target.className !== 'filterBtn-on') {
      e.target.className = 'filterBtn-on';
    } else {
      e.target.className = 'filterBtn-off';
    }
    console.log(e.target.className);
    setChevalier(e.target.innerText);
    setIsFiltered(!isFiltered);
  };

  return (
    <div className='quests-list'>
      <div className='filterContainer'>
        <p>Filter on : </p>
        <button className='filterBtn-on' onClick={handleFilter}>
          Lancelot
        </button>
        <button className='filterBtn-on' onClick={handleFilter}>
          Govin
        </button>
        <button className='filterBtn-on' onClick={handleFilter}>
          Bohort
        </button>
        <button className='filterBtn-on' onClick={handleFilter}>
          Karadok
        </button>
        <button className='filterBtn-on' onClick={handleFilter}>
          Perceval
        </button>
      </div>
      <h1>Ongoing Quests</h1>
      {quests.length > 0 ? (
        quests
          .filter((item) => {
            return !isFiltered || item.assignment.label === chevalier;
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
