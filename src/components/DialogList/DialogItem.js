import React from 'react';
import styles from './DialogList.module.css';

const DialogItem = (props) => {
  const { logo, dialogName, changeIsActive } = props;
  return (
    <article className={styles.dialWrap} onClick={changeIsActive}>
      <img src={logo} alt='dialogLogo' className={styles.logo} />
      <p>{dialogName}</p>
    </article>
  );
};

export default DialogItem;
