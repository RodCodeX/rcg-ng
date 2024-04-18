import { Component } from '@angular/core';
import { FormBuilder, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CheckboxModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public isSendRegister = false;


  public frLogin = this._fb.group({
    'user': ['', Validators.required],
    'password': ['', [Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}

  public registerUser(): void {
    if(this.frLogin.invalid) return this.frLogin.markAllAsTouched();
    this.isSendRegister = true;

    const newRegisteredUser = {
      user: this.frLogin.value.user,
      password: this.frLogin.value.password,
    };

    setTimeout(() => {
      console.log(newRegisteredUser)
      alert(`USUARIO:  ${newRegisteredUser.user}     CONTRASEÑA: ${newRegisteredUser.password}`);
      this.isSendRegister = false
    }, 2000);
  }
}
