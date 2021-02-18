import styles from './Header.module.css';

function Header(props) {
	const { onOpen } = props;

	return (
		<header className={styles.header}>
			<h1 className={styles.appName}>SupaChat</h1>
			<button onClick={onOpen} className={styles.btn}>Add SupaChat</button>
		</header>
	)
}

export default Header;
