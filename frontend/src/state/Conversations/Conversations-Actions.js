import { SET_CONVERSATIONS_REQUESTS, SET_CREATED_CONVERSATION_REQUEST, FETCH_CONVERSATION } from './Conversations-ActionTypes'
import * as ConversationApi from "./Conversations-Api";



const fetchConversationRequest = payload => {
    return {
      type: FETCH_CONVERSATION,
      payload
    };
};

const setConversationsRequest = payload => {
    return {
      type: SET_CONVERSATIONS_REQUESTS,
      payload
    };
};

const setCreatedConversation = payload => {
    return {
      type: SET_CREATED_CONVERSATION_REQUEST,
      payload
    };
};

export const fetchConversation = (id) => {
  return dispatch => {
    return ConversationApi.fetchConversation(id).then(conversation => {
      return dispatch(fetchConversationRequest(conversation));
    });
  };
};

export const getConversationsRequest = () => {
  return dispatch => {
    return ConversationApi.getConversationsRequest().then(conversations => {
      return dispatch(setConversationsRequest(conversations));
    });
  };
};

export const createConversation = (data) => {
  return dispatch => {
    return ConversationApi.createConversation(data).then(conversation => {
      return dispatch(setCreatedConversation(conversation));
    });
  };
};