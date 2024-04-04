import React, { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { FaHeartCircleCheck } from 'react-icons/fa6';

import styles from './Chat.module.css';

const ChatItem = (props) => {
  const { id, user, username, body, deleteMessage } = props;
  const [isLiked, setIsLiked] = useState(false);

  const handleDelete = () => {
    deleteMessage(id);
    console.log(id);
  };

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  const btnClass = isLiked ? styles.red : null;

  return (
    <article className={styles.msg}>
      <img
        src={
          user.imgSrc
            ? user.imgSrc
            : `https://robohash.org/${Math.floor(Math.random() * 101)}?set=set4`
        }
        alt={username}
        className={styles.useravatar}
      />
      <div className={styles.wrapper}>
        <p className={styles.bold}>{username}</p>
        <p>
          {body} {styles.text}
        </p>
      </div>
      <div className={styles.btnWrap}>
        <button onClick={handleLiked} className={styles.liked}>
          <FaHeart className={btnClass} />
        </button>
        <button onClick={handleDelete} className={styles.delButton}>
          <FaRegTrashCan />
        </button>
      </div>
    </article>
  );
};

export default ChatItem;
