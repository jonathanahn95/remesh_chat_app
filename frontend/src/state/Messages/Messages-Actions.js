import { CREATE_MESSAGE, FETCH_MESSAGES, FETCH_MESSAGE } from './Messages-ActionTypes'
import * as MessagesApi from "./Messages-Api";



const setCreateMessage = payload => {
    return {
      type: CREATE_MESSAGE,
      payload
    };
};

const getMessages = payload => {
  return {
    type: FETCH_MESSAGES,
    payload
  };
};
const getMessage = payload => {
  return {
    type: FETCH_MESSAGE,
    payload
  };
};


export const createMessage = (data) => {
    return dispatch => {
      return MessagesApi.createMessage(data).then(message => {
        return dispatch(setCreateMessage(message));
      });
    };
  };
  

export const fetchMessages = (id) => {
    return dispatch => {
      return MessagesApi.fetchMessages(id).then(messages => {
        return dispatch(getMessages(messages));
      });
    };
  };
  

export const fetchMessage = (id) => {
    return dispatch => {
      return MessagesApi.fetchMessage(id).then(message => {
        return dispatch(getMessage(message));
      });
    };
  };
  