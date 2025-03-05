import { combineReducers } from 'redux';
import drawer from './drawer';
import media from './media';
import snack from './snack';
import socket from './socket';
import user from './user';

const Reducer = combineReducers({
  drawer, media, snack, socket, user,
});

export default Reducer;
