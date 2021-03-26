import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleWare])
