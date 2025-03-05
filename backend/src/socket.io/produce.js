import xss from 'xss';
import Utils from '../utils';
import Mediasoup from '../mediasoup';

const produce = async ({ data, callback }) => {
  const { kind, rtpParameters, appData } = data;
  const producer = await Mediasoup.transports.producer[data.uuid].produce({ kind, rtpParameters });

  const removeProducer = () => {
    const index = Mediasoup.activeProducers.findIndex((e) => e.id === producer.id);
    if (index !== -1) {
      Mediasoup.activeProducers.splice(index, 1);
    }
  };

  producer.on('transportclose', async () => {
    removeProducer();
    try {
      await Mediasoup.producers[producer.id].close();
    } catch (e) {
      Utils.logger.error(e);
    }
  });
  producer.observer.on('close', async () => {
    removeProducer();
    try {
      await Mediasoup.producers[producer.id].close();
    } catch (e) {
      Utils.logger.error(e);
    }
  });

  Mediasoup.producers[producer.id] = producer;

  const activeProducer = {
    id: producer.id,
    uuid: data.uuid,
    name: xss(data.name),
    email: xss(data.email),
    kind: xss(appData.kind),
  };

  Utils.io.emit('producer', activeProducer);
  Mediasoup.activeProducers.push(activeProducer);

  Utils.logger.info(`producing ${kind}: ${data.uuid}`);

  callback({ id: producer.id });
};

export default produce;
