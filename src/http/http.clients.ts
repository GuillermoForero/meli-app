import { getMelitHttpConfig } from 'configuration';
import MeliClient from 'http/meli.client';

interface HttpClients {
  meliHttp: MeliClient;
}

export default {
  meliHttp: new MeliClient(getMelitHttpConfig()),
} as HttpClients;
