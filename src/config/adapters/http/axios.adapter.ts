import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { HttpAdapter } from './http.adapter';
import axios from 'axios';

interface Options extends AxiosRequestConfig { }

export class AxiosAdapter implements HttpAdapter {

  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create(options);
  }

  async get<T>(url: string, options?: Options,): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error('Error in get request' + error);
    }
  }
}
