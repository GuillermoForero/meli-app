import { AppConfiguration } from 'configuration/types';
import { merge } from 'lodash';
/*
This is a way to create different clients for the application, in our case it is only meli's one,
which is a localhost, this way also serves to perhaps have the server address in aws, although I would recommend the use of environments for that.
*/
const base: AppConfiguration = {
  hosts: {
    meli: {
      baseUrl: 'http://localhost:4000/',
      timeout: 10000,
    },
  },
};

let configuration = base;

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const mergeConfig = (set: DeepPartial<AppConfiguration>): void => {
  configuration = merge(configuration, set);
};

export const getMelitHttpConfig = () => configuration.hosts.meli;

export default configuration;
