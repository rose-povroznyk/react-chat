import React, { useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';

import styles from './MessageArea.module.css';

const MessageArea = (props) => {
  const [inputMessage, setInputMessage] = useState('');
  const changeHandler = ({ target: { value } }) => {
    setInputMessage(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.sendMessage(inputMessage);
    setInputMessage('');
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <textarea
          value={inputMessage}
          onChange={changeHandler}
          className={styles.comment}
        />
        <button type='submit' className={styles.sendButton}>
          <FaRegPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default MessageArea;
