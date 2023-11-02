import {HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';

// type passed to httpClient.post() call. Adding this here helps intellisense
export type Options = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
};
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
};
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
};
