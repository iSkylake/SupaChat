import React, { useState } from 'react';
import './App.css';

import Header from './app/Header';
import SupaChatsList from './features/supachats/SupaChatsList';
import Modal from './components/Modal';
import AddSupaChatForm from './features/supachats/AddSupaChatForm';

function App() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <main className='app-main'>
        <Header onOpen={handleOpen}/>
        <SupaChatsList/>
        {
          isOpen && (
            <Modal onClose={handleClose}>
              <AddSupaChatForm onClose={handleClose}/>
            </Modal>
          )
        }
      </main>
    </div>
  );
}

export default App;
