import { NgModule } from '@angular/core';
import { RequesterService } from "./service/requester.service";
import { HttpService } from "./service/http.service";
import { RegexCommon } from "./service/regex.service";

@NgModule( {
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    RequesterService,
    HttpService,
    RegexCommon
  ],
} )
export class CoreModule {
}
