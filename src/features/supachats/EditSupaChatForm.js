import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateSupaChat } from './supaChatsSlice';
import styles from './EditSupaChatForm.module.css';

function EditSupaChatForm() {
  const { supaChatId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const supaChat = useSelector(state =>
    state.supaChats.find(supaChat => supaChat.id === parseInt(supaChatId))
  )
  const [amount, setAmount] = useState(supaChat.amount);
  const [message, setMessage] = useState(supaChat.message);

  const canSubmit = Boolean(amount) && Boolean(message);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSupaChat({
      id: parseInt(supaChatId),
      amount: parseInt(amount),
      message
    }));
    history.push(`/supaChats/${supaChatId}`);
  }

  return (
    <div className={styles.formCtn}>
      <h1 className={styles.title}>Supachat by {supaChat.username}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          type='number'
          autoComplete='off'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          type='text'
          autoComplete='off'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className={styles.btn} disabled={!canSubmit}>Edit</button>
      </form>
    </div>
  )
}

export default EditSupaChatForm;
