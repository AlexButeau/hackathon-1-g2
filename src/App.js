import './App.css';
import './components/styles/global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Agenda from './components/Agenda';
import LoginPage from './components/LoginPage';
import QuestDetails from './components/QuestDetails';
import Mail from './components/Mail';
import Navbar from './components/Navbar';
import QuestPage from './components/QuestPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/agenda' component={Agenda} />
          <Route exact path='/questlist' component={QuestPage} />
          <Route path='/quest/:id' component={QuestDetails} />
          <Route exact path='/mail' component={Mail} />
        </Switch>

        <Navbar />
      </Router>
    </div>
  );
}

export default App;
