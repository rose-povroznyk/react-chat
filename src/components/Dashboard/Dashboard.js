import React, { useEffect, useReducer, useState } from 'react';
import DialogList from '../DialogList/DialogList';
import Chat from '../Chat/Chat';
import MessageArea from '../MessageArea/MessageArea';
import styles from './Dashboard.module.css';
import UserContext from '../../contexts/UserContext';
import { getMessages } from '../../api';
import CONSTANTS from '../../constants';
import messageReducer from '../../reducers/messageReducer';

const { ACTIONS } = CONSTANTS;

const initialState = {
  messages: [],
  isLoading: true,
  error: false,
};

const Dashboard = () => {
  const [user, setUser] = useState({
    id: 1,
    username: 'Main Admin 15',
    imageSrc: 'https://robohash.org/user?set=set4',
  });

  const [isActive, setIsActive] = useState(false);

  const [state, dispatch] = useReducer(messageReducer, initialState);
  useEffect(() => {
    getMessages()
      .then((messages) => {
        dispatch({ type: ACTIONS.MESSAGES_LOAD_SUCCESS, payload: messages });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.MESSAGES_LOAD_ERROR, payload: error });
      });
  }, []);

  const createMessage = (text) => {
    const newMessage = {
      body: text,
      id: state.messages.length + 1,
      user,
    };

    dispatch({
      type: ACTIONS.ADD_NEW_MESSAGE,
      payload: newMessage,
    });
  };

  const deleteMessage = (id) => {
    const { messages } = state;
    const updateMessage = messages.filter((message) => message.id !== id);
    dispatch({
      type: ACTIONS.DELETE_MESSAGE,
      payload: updateMessage,
    });
  };

  const showChat = () => {
    setIsActive(!isActive);
  };

  return (
    <UserContext.Provider value={user}>
      <main className={styles.container}>
        <DialogList changeIsActive={showChat} />
        {isActive ? (
          <section className={styles.wrapper}>
            <Chat dashBoardState={state} deleteMessage={deleteMessage} />
            <MessageArea sendMessage={createMessage} />
          </section>
        ) : null}
      </main>
    </UserContext.Provider>
  );
};

export default Dashboard;
