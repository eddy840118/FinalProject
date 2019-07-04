import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  private apiUrl: any = '';

  constructor(private http: Http) {
    this.apiUrl = environment.apiUrl;
  }

  get(path: string) {
    console.log('from http service get function.....endpoint: ', this.apiUrl + path);
    return this.http.get(this.apiUrl + path)
      .toPromise()
      .then((resp: any) => {
        return resp.json();
      });
  }

  post(path: string, payload: object) {

    return this.http.post(this.apiUrl + path, payload).toPromise()
      .then((resp: any) => {
        console.log('resp from post....', resp);
        return resp.json();
      });

  }

  update(path: string, payload: any) {
    return this.http.put(this.apiUrl + path, payload)
      .toPromise()
      .then((resp: any) => {
        console.log('from http service update resp: ', resp);
        return resp.json();
      });
  }

  remove(path: string, id: string) {
    return this.http.delete(this.apiUrl + path + '/id/' + id)
      .toPromise()
      .then((resp: any) => {
        console.log('resp from remove...', resp);
        return resp.json();
      });
  }
}