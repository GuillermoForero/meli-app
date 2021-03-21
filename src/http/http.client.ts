import axios, { AxiosInstance } from 'axios';
import { HttpClientConfiguration } from 'configuration/types';

export default abstract class HttpClient {
  private readonly instance: AxiosInstance;

  protected get: Function;

  protected post: Function;

  protected delete: Function;

  protected patch: Function;

  protected put: Function;

  constructor(clientConfig: HttpClientConfiguration) {
    this.instance = axios.create({
      baseURL: clientConfig.baseUrl,
      timeout: clientConfig.timeout,
      headers: {
        'Content-type': 'application/json',
      },
    });
    this.get = this.instance.get.bind(this.instance);
    this.post = this.instance.post.bind(this.instance);
    this.delete = this.instance.delete.bind(this.instance);
    this.patch = this.instance.patch.bind(this.instance);
    this.put = this.instance.put.bind(this.instance);
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}
