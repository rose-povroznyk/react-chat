import React from 'react';
import styles from './DialogList.module.css';
import DialogItem from './DialogItem';

const DialogList = (props) => {
  const { changeIsActive } = props;
  return (
    <div className={styles.container}>
      <DialogItem
        logo='https://yt3.googleusercontent.com/PDxnez2b17LM4YaLfc_Z7H-JW9xz6kNLtDmqJTMV2TCfULxu48spBXwcnRKaZF80rbSvq1zgJg=s176-c-k-c0x00ffffff-no-rj'
        dialogName='ONL-JS-PFE2023-2'
        changeIsActive={changeIsActive}
      />
    </div>
  );
};

export default DialogList;
