import CONSTANTS from '../constants';

const { ACTIONS } = CONSTANTS;

function messageReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.MESSAGES_LOAD_SUCCESS: {
      const { comments } = payload;
      return {
        ...state,
        messages: comments,
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.MESSAGES_LOAD_ERROR: {
      const { error } = payload;
      return {
        ...state,
        error: error,
        isLoading: false,
      };
    }

    case ACTIONS.ADD_NEW_MESSAGE: {
      const newMessage = payload;
      const newMessagesArr = [...state.messages, newMessage];
      return {
        ...state,
        messages: newMessagesArr,
      };
    }
    case ACTIONS.DELETE_MESSAGE: {
      const updateMessage = payload;
      return {
        ...state,
        messages: updateMessage,
      };
    }
    default:
      return state;
  }
}

export default messageReducer;
