import { GET_ALL_CONVERSATIONS_SUCCESS, CREATE_CONVERSATION_SUCCESS, GET_SINGLE_CONVERSATION_SUCCESS, CREATE_CONVERSATION_FAILURE } from './Conversations-ActionTypes'
import * as ConversationApi from "./Conversations-Api";



export const setSingleConversation = payload => {
    return {
      type: GET_SINGLE_CONVERSATION_SUCCESS,
      payload
    };
};

const setAllConversations = payload => {
    return {
      type: GET_ALL_CONVERSATIONS_SUCCESS,
      payload
    };
};

const setCreatedConversation = payload => {
    return {
      type: CREATE_CONVERSATION_SUCCESS,
      payload
    };
};

const setCreatedConversationFailure = payload => {
    return {
      type: CREATE_CONVERSATION_FAILURE,
      payload
    };
};

export const getSingleConversation = (id) => {
  return dispatch => {
    return ConversationApi.getSingleConversation(id).then(conversation => {
      return dispatch(setSingleConversation(conversation));
    });
  };
};

export const getAllConversations = () => {
  return dispatch => {
    return ConversationApi.getAllConversations().then(conversations => {
      return dispatch(setAllConversations(conversations));
    });
  };
};


export const createConversation = (data) => async (dispatch) => {
  let obj = data
  try {
    const response = await fetch('/api/v1/conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    });
    const res = await response
    const jsonRes = await response.json()
    if (res.status === 200) {

      dispatch(setCreatedConversation(jsonRes))
    } else {
      dispatch(setCreatedConversationFailure(res.error))
    }
  } catch (e) {
    dispatch(setCreatedConversationFailure(e.message))
  }
};