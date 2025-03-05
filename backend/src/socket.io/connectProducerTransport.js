import Mediasoup from '../mediasoup';
import Utils from '../utils';

const connectProducerTransport = async ({ data, callback }) => {
  await Mediasoup.transports.producer[data.uuid].connect({ dtlsParameters: data.dtlsParameters });
  Utils.logger.info(`consumer transport connected: ${data.uuid}`);
  callback();
};

export default connectProducerTransport;
