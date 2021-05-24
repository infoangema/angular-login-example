import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { LoginService } from "./login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegexCommon } from "../../core/service/regex.service";
import { LoginFormService } from "./login-form.service";

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {
  public user: User;
  public miForm: FormGroup;


  constructor(
    private loginService: LoginService,
    private loginFormService: LoginFormService
  ) { }

  ngOnInit(): void {
    this.miForm = this.loginFormService.create();
    this.loginService.get("/users/1").subscribe( (res: any) => {
      this.user = res;
    } );
  }

  public enviar(): void {
    if(this.miForm.valid){
      const datos = this.miForm.value;
      console.log(datos);
    } else {

      console.log("form invalid");
    }

  }
}
