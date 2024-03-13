import type { AxiosRequestConfig } from 'axios';


export abstract class HttpAdapter {

  abstract get<T>(url: string, options?: AxiosRequestConfig): Promise<T>;
}
