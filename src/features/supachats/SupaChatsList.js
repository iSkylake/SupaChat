import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './SupaChatsList.module.css';

import Modal from '../../components/Modal';
import AddSupaChatForm from './AddSupaChatForm';

function getBgColor(amount) {
  return amount < 5 ? 'blue'
    : amount >= 5 && amount < 10 ? 'cyan'
    : amount >= 10 && amount < 20 ? 'yellow'
    : amount >= 20 && amount < 50 ? 'orange'
    : amount >= 50 && amount < 100 ? 'pink'
    : 'red'
}

function getFontColor(amount) {
  if(amount < 20) return 'light';
  return 'dark'
}

function SupaChatList(props) {
  const supaChats = useSelector(state => state.supaChats);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderSupaChats = supaChats.map(supaChat => (
    <article
      className={styles[getFontColor(supaChat.amount)]}
      key={supaChat.id}
    >
      <header
        className={`${styles.header} ${styles[`header-${getBgColor(supaChat.amount)}`]}`}
      >
        <h3 className={`${styles.username} ${styles[`username-${getFontColor(supaChat.amount)}`]}`}>
          {supaChat.username}
        </h3>
        <p className={styles.amount}>{`$${supaChat.amount.toFixed(2)}`}</p>
        <Link to={`/supachats/${supaChat.id}`}>
          <button className={`${styles.btn} ${styles['btn-view']}`}>View</button>
        </Link>
      </header>
      <p
        className={`${styles.message} ${styles[`message-${getBgColor(supaChat.amount)}`]}`}
      >
        {supaChat.message}
      </p>
    </article>
  ))

  const renderSuperChatFormModal = (
    isOpen && (
      <Modal onClose={handleClose}>
        <AddSupaChatForm onClose={handleClose}/>
      </Modal>
    )
  )

  return (
    <div>
      <div className={styles['btn-group']}>
        <button onClick={handleOpen} className={styles.btn}>Add SupaChat</button>
      </div>
      <div className={styles.list}>
        { renderSupaChats }
        { renderSuperChatFormModal }
      </div>
    </div>
  )
}

export default SupaChatList;
