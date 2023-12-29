import { Buttons } from '@UI';

import cn from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({ onHide, visible, status }) => {
  return (
    <div className={cn(styles.modal, { [styles.isActive]: visible })}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <button className={styles.modalClose} onClick={onHide}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 22.5L15 15M15 15L7.5 7.5M15 15L22.5 7.5M15 15L7.5 22.5"
                stroke="#8A8A8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={styles.modalTitle}>{status === 'success' ? 'Дякуємо!' : 'Помилка'}</div>
          <div className={styles.modalText}>
            {status === 'success'
              ? 'Ваша заявка прийнята. Найближчим часом ми з вами зв’яжемось'
              : 'Сталась помилка. Будь ласка, спробуйте пізніше'}
          </div>
          <Buttons onClick={onHide} className={styles.modalBtn}>
            Закрити
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export { Modal };
