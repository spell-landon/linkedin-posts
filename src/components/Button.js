import React from 'react';
import styles from './Button.module.css';

function Button({ openModal }) {
  return (
    <button className={styles.btn} onClick={openModal}>
      Click Me
    </button>
  );
}

export default Button;
