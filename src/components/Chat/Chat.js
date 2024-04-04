import React, { useReducer } from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem';

const Chat = (props) => {
  const {
    dashBoardState: { messages, error, isLoading },
    deleteMessage,
  } = props;

  const messageCardsArray = messages.map((currentMessage) => {
    const {
      body,
      id,
      user,
      user: { username },
    } = currentMessage;

    return (
      <ChatItem
        key={id}
        id={id}
        user={user}
        username={username}
        body={body}
        deleteMessage={deleteMessage}
      />
    );
  });

  return (
    <div className={styles.container}>
      {isLoading && <h1>Dialog loading...</h1>}
      {error && <h1>Error ..... oops</h1>}
      {messageCardsArray}
    </div>
  );
};

export default Chat;
