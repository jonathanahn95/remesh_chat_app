import { combineReducers } from 'redux';
import ConversationsReducer from '../Conversations/Conversations-Reducer';
import MessagesReducer from '../Messages/Messages-Reducer';
import ThoughtsReducer from '../Thoughts/Thoughts-Reducer';
import SearchReducer from '../Search/Search-Reducer';

export default combineReducers({
    conversationsReducer: ConversationsReducer,
    messagesReducer: MessagesReducer,
    thoughtsReducer: ThoughtsReducer,
    searchReducer: SearchReducer,
})