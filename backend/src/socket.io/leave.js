import Mediasoup from '../mediasoup';
import Utils from '../utils';

const leave = async ({ data, callback }) => {
  delete Mediasoup.peers[data.uuid];

  let index = null;
  do {
    index = Mediasoup.activeProducers.findIndex((e) => e.uuid === data.uuid);
    if (index !== -1) {
      Mediasoup.activeProducers.splice(index, 1);
      index = null;
    }
  } while (index === null);

  Utils.io.emit('peers', {
    peers: Mediasoup.peers,
  });

  callback({
    peers: Mediasoup.peers,
  });
};

export default leave;
