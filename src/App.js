import './App.css';
import './components/styles/global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import QuestDetails from './components/QuestDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/home' component={Home} />
          <Route path='/quest/:id' component={QuestDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
