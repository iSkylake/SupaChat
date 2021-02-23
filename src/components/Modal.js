import styles from './Modal.module.css';

function Modal(props) {
  const { children, onClose } = props;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.btn} onClick={onClose}>
          X
        </button>
        { children }
      </div>
    </div>
  )
}

export default Modal;
