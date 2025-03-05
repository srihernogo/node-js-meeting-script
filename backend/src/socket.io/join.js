import xss from 'xss';
import Mediasoup from '../mediasoup';
import Utils from '../utils';

const join = async ({ data, callback }) => {
  Mediasoup.peers[data.uuid] = {
    name: xss(data.name),
    email: xss(data.email),
  };
  Utils.io.emit('peers', {
    peers: Mediasoup.peers,
  });
  callback({
    peers: Mediasoup.peers,
    producers: Mediasoup.activeProducers,
  });
};

export default join;
