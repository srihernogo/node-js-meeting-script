import Utils from '../utils';
import Mediasoup from '../mediasoup';

const closeProducer = async ({ data, callback }) => {
  Utils.io.emit('producer-close', data);
  const removeProducer = (id) => {
    const index = Mediasoup.activeProducers.findIndex((e) => e.id === id);
    if (index !== -1) {
      Mediasoup.activeProducers.splice(index, 1);
    }
  };
  removeProducer(data.id);
  callback();
};

export default closeProducer;
