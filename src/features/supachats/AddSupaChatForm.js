import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSupaChat } from './supaChatsSlice';
import styles from './AddSupaChatForm.module.css';

function AddSupaChatForm(props) {
  const { onClose } = props;
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSupaChat(username, parseInt(amount), message));
    onClose();
  }

  const canSubmit = Boolean(username) && Boolean(amount) && Boolean(message);

  return (
    <div className={styles.formCtn}>
      <h1 className={styles.title}>Add New SupaChat</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          autoComplete='off'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          id='amount'
          name='amount'
          autoComplete='off'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className={styles.btn} disabled={!canSubmit}>
          Submit SupaChat
        </button>
      </form>
    </div>
  )
}

export default AddSupaChatForm;
