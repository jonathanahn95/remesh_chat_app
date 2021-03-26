import { CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_SUCCESS, GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS, GET_SINGLE_MESSAGE_SUCCESS } from './Messages-ActionTypes'
import * as MessagesApi from "./Messages-Api";



const setCreateMessage = payload => {
    return {
      type: CREATE_MESSAGE_SUCCESS,
      payload
    };
};

const setCreateMessageFailure = payload => {
    return {
      type: CREATE_MESSAGE_FAILURE,
      payload
    };
};

const getMessages = payload => {
  return {
    type: GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS,
    payload
  };
};
const getMessage = payload => {
  return {
    type: GET_SINGLE_MESSAGE_SUCCESS,
    payload
  };
};

export const getAllMessagesForConversation = (id) => {
    return dispatch => {
      return MessagesApi.getAllMessagesForConversation(id).then(messages => {
        return dispatch(getMessages(messages));
      });
    };
  };
  

export const getSingleMessage = (id) => {
    return dispatch => {
      return MessagesApi.getSingleMessage(id).then(message => {
        return dispatch(getMessage(message));
      });
    };
  };
  
  export const createMessage = (data) => async (dispatch) => {
    let obj = data
    try {
      const response = await fetch('/api/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
   
      const res = await response
      const jsonRes = await response.json()
      if (res.status === 200) {
  
        dispatch(setCreateMessage(jsonRes))
      } else {
        dispatch(setCreateMessageFailure("A comment can not be a space and must be of length 1"))
      }
    } catch (e) {

      dispatch(setCreateMessageFailure("A comment can not be a space and must be of length 1"))
    }
  };