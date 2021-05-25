import { Component, OnInit } from '@angular/core';
import { User } from "../models/User";
import { LoginService } from "../services/login.service";
import { FormGroup } from "@angular/forms";
import { LoginFormService } from "../services/login-form.service";
import { Router } from "@angular/router";

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
    private loginFormService: LoginFormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.miForm = this.loginFormService.create();
    this.loginService.get("/users/1").subscribe( (res: any) => {
      this.user = res;
    } );
  }

  public enviar(): void {
    if(this.miForm.invalid){
      const datos = this.miForm.value;
      console.log(datos);
      return;
    } else {
      this.router.navigate(['home']);
    }

  }
}
