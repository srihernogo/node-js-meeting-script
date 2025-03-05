import Utils from '../utils';
import Mediasoup from '../mediasoup';

const consume = async ({ data, callback }) => {
  if (!Mediasoup.transports.consumer[data.uuid]) {
    return callback({});
  }

  const { consumer, response } = await Mediasoup.createConsumer({
    router: Mediasoup.getRouter(),
    producer: Mediasoup.producers[data.producerId],
    rtpCapabilities: data.rtpCapabilities,
    transport: Mediasoup.transports.consumer[data.uuid],
  });

  if (consumer) {
    consumer.on('transportclose', async () => {
      try {
        await Mediasoup.consumers[consumer.id].close();
      } catch (e) {
        Utils.logger.error(e);
      }
    });
    consumer.on('producerclose', async () => {
      try {
        await Mediasoup.consumers[consumer.id].close();
      } catch (e) {
        Utils.logger.error(e);
      }
    });

    Mediasoup.consumers[consumer.id] = consumer;
  }

  return callback(response || {});
};

export default consume;
