export interface ResponseData<T = unknown> {
  message: string;
  content?: T;
}
