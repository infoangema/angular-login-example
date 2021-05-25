import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RequesterService } from "../../../core/service/requester.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private requester: RequesterService) {}

  public get(url: string, obj?: Object) {
    return this.requester.get(url);
  }

}
