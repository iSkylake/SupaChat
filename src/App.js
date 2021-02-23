import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './app/Header';
import SupaChatsList from './features/supachats/SupaChatsList';
import SingleSupaChatPage from './features/supachats/SingleSupaChatPage';

function App() {
  return (
    <Router>
      <div className="App">
        <main className='app-main'>
          <Header/>
          <Switch>
            <Route path='/' exact>
              <SupaChatsList/>
            </Route>
            <Route path='/supachats/:supachatId'>
              <SingleSupaChatPage/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
