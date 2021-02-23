import React from 'react';
import './App.css';

import Header from './app/Header';
import SupaChatsList from './features/supachats/SupaChatsList';

function App() {
  return (
    <div className="App">
      <main className='app-main'>
        <Header/>
        <SupaChatsList/>
      </main>
    </div>
  );
}

export default App;
