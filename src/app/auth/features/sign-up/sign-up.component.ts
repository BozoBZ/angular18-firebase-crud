import { Component, inject } from '@angular/core';
import { hasEmailError, isRequired } from '../../utils/validators';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``,
})
export default class SignUpComponent {
  private _formBuilder = inject(NonNullableFormBuilder);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError() {
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  submit() {
    // console.log(this.form.getRawValue());
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    if (!email || !password) return;

    console.log({ email, password });
  }
}
