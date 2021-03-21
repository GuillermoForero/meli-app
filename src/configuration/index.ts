import { AppConfiguration } from 'configuration/types';
import { merge } from 'lodash';

const base: AppConfiguration = {
  hosts: {
    meli: {
      baseUrl: 'http://54.164.66.17:4000/',
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
