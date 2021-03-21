import { AppConfiguration } from 'configuration/types';
import { merge } from 'lodash';

const base: AppConfiguration = {
  hosts: {
    meli: {
      baseUrl: 'http://localhost:4000/',
      timeout: 5000,
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
