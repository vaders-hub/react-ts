export type ReactComp = {
  component: () => React.ReactElement;
};

export type IdxSign = {
  [key: string | number]: unknown;
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  message?: string;
  payload?: any;
}
