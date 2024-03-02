export interface IResponseHandler {
  message: string;
  data: any;
  success?: boolean;
  error?: any;
  status?: number;
}
