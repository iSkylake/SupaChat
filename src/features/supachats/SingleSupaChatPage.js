import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styles from './SingleSupaChatPage.module.css';

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

function SingleSupaChat() {
  const { supaChatId } = useParams();
  const supaChat = useSelector(state =>
    state.supaChats.find(supaChat => supaChat.id === parseInt(supaChatId))
  );

  return (
    <div className={styles.container}>
      <article
        className={styles[getFontColor(supaChat.amount)]}
      >
        <header
          className={`${styles.header} ${styles[`header-${getBgColor(supaChat.amount)}`]}`}
        >
          <h3 className={`${styles.username} ${styles[`username-${getFontColor(supaChat.amount)}`]}`}>
            {supaChat.username}
          </h3>
          <p className={styles.amount}>{`$${supaChat.amount.toFixed(2)}`}</p>
          <Link to={`/editSupaChat/${supaChatId}`}>
            <button className={`${styles.btn} ${styles['btn-view']}`}>Edit</button>
          </Link>
        </header>
        <p
          className={`${styles.message} ${styles[`message-${getBgColor(supaChat.amount)}`]}`}
        >
          {supaChat.message}
        </p>
      </article>
    </div>
  )
}

export default SingleSupaChat;
