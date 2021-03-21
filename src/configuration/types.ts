export enum Hosts {
  MELI = 'meli',
}

export interface HttpClientConfiguration {
  readonly baseUrl: string;
  readonly timeout: number;
}

type HttpHosts = { [key in Hosts]: HttpClientConfiguration };

export interface AppConfiguration {
  readonly hosts: HttpHosts;
}
