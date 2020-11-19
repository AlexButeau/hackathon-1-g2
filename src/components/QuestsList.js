import React, { useEffect, useState } from 'react';
import QuestCard from './QuestCard';
import axios from 'axios';
import './styles/QuestsList.scss';

const QuestsList = () => {
  const [quests, setQuests] = useState([]);

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

  return (
    <div className='quests-list'>
      <h1>Ongoing Quests</h1>
      {quests.length > 0 ? (
        quests
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
