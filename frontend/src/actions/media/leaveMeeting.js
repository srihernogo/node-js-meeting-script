import Utils from '../../utils';
import store from '../../store';
import releaseLocalVideo from './releaseLocalVideo';
import releaseLocalScreen from './releaseLocalScreen';
import releaseLocalAudio from './releaseLocalAudio';

const leaveMeeting = () => async (dispatch) => {
  Utils.logger.info('leaving meeting');
  const { uuid, local } = store.getState().media;
  if (local.screen) {
    dispatch(releaseLocalScreen());
  }
  if (local.audio) {
    dispatch(releaseLocalAudio());
  }
  if (local.video) {
    dispatch(releaseLocalVideo());
  }
  const peers = await Utils.socket.request('leave', { uuid });
  dispatch({ type: 'peers', peers });
  dispatch({ type: 'leave' });
  Utils.logger.info('meeting ended');
};

export default leaveMeeting;
