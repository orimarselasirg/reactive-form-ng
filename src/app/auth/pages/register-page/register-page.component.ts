import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidator from '../../../shared/validators/validators';
import { ValidatorServices } from '../../../shared/services/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidatorService] ],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]]
  },{
    validators: [this.validatorService.isSamePassword('password', 'password2')]
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorServices,
    private emailValidatorService: EmailValidatorService
  ){}

  isValidField(field: string): boolean | null{
    return this.validatorService.isValidField(this.myForm, field)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
