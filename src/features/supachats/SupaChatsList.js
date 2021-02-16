import { useSelector } from 'react-redux';
import styles from './SupaChatsList.module.css';

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

function SupaChatList() {
	const supaChats = useSelector(state => state.supaChats);

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
			</header>
			<p
				className={`${styles.message} ${styles[`message-${getBgColor(supaChat.amount)}`]}`}
			>
				{supaChat.message}
			</p>
		</article>
	))

	return (
		<div className={styles.list}>
			{ renderSupaChats }
		</div>
	)
}

export default SupaChatList;
