import Mediasoup from '../mediasoup';

const closeProducer = async ({ data, callback }) => {
  await Mediasoup.transports.consumer[data.uuid].connect({ dtlsParameters: data.dtlsParameters });
  callback();
};

export default closeProducer;
