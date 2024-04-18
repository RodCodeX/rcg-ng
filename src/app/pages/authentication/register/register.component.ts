import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CheckboxModule, RouterLink],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  public isSendRegister = false;

  public frRegister = this._fb.group({
    'fullName': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', Validators.required],
    'acceptTerms': [false, Validators.requiredTrue]
  });

  constructor(private _fb: FormBuilder) {}

  public registerUser(): void {
    if(this.frRegister.invalid) return this.frRegister.markAllAsTouched();

    this.isSendRegister = true;

    const newRegisteredUser = {
      fullName: this.frRegister.value.fullName,
      email: this.frRegister.value.email,
      password: this.frRegister.value.password
    };

    setTimeout(() => {
      alert(`USUARIO => ${newRegisteredUser.fullName} EMAIL=>  ${newRegisteredUser.email}  CONTRASEÑA =>  ${newRegisteredUser.password}`);
      this.isSendRegister = false
    }, 2000);
  }
}
