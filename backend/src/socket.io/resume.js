import Mediasoup from '../mediasoup';

const resume = async ({ data, callback }) => {
  await Mediasoup.consumers[data.consumerId].resume();
  callback();
};

export default resume;
