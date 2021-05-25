import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { RegexCommon } from "../../../core/service/regex.service";

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(
    private fb: FormBuilder,
    private regex: RegexCommon
  ) { }

  public create(){
    return this.fb.group({
      username: ['', [Validators.required, Validators.pattern(this.regex.alphabetical)]],
      pass: ['', [Validators.required]],
    })
  }
}
