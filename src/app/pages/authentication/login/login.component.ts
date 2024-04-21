import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RouterLink,
    DialogModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
})
export class LoginComponent {
  public isSendRegister = false;
  public visible: boolean = false;
  public frLogin = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [false],
  });

  constructor(
    private _fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  public registerUser(): void {
    if (this.frLogin.invalid) return this.frLogin.markAllAsTouched();
    this.isSendRegister = true;

    const newRegisteredUser = {
      user: this.frLogin.value.email,
      password: this.frLogin.value.password,
      remember: this.frLogin.value.remember,
    };
    this.messageService.add({
      severity: 'success',
      summary: 'Credenciales correctas',
      detail: `USUARIO:  ${newRegisteredUser.user} CONTRASEÑA: ${newRegisteredUser.password} RECORDAR : ${newRegisteredUser.remember}`,
    });

    this.isSendRegister = false;
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2000);
  }

  showDialog(): void {
    this.visible = true;
  }
}
