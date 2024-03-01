interface IResponseHandler {
  message: string;
  data: any;
  success?: boolean;
  error?: any;
  status?: number;
}

export default class ResponseHandler {
  static handleSuccess(
    message: string,
    data: any | any[],
    status?: number
  ): IResponseHandler {
    return {
      success: true,
      message: message,
      data: data,
      status: status ? status : 200,
    } as IResponseHandler;
  }

  static handleFailed(
    message: string,
    error?: any,
    status?: number
  ): IResponseHandler {
    return {
      success: false,
      message: message,
      error: error ? error : null,
      status: status ? status : 500,
    } as IResponseHandler;
  }
}
