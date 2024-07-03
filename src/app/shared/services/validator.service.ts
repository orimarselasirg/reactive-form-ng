import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorServices {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public cantBeStrider (control: FormControl): ValidationErrors | null {

    const value: string = control.value.trim().toLowerCase()

    if (value === 'strider') {
      return {
        noStrider: true,
      }
    }
    return null
  }

  isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors
    && form.controls[field].touched
  }

  getFieldError(form: FormGroup, field: string): string | null {
    if(!form.controls[field]) return null
    const errors = form.controls[field].errors || {}
    for (const key of Object.keys(errors)) {
        switch (key) {
          case 'required':
            return 'Este es un campo requerido'

          case 'minlength':
            return `Minimo ${errors['minlength'].requiredLength} caracteres`

          case 'requiredTrue':
            return 'Debe aceptar los terminos para continuar'

          }
        }
        return ''
  }

  isValidFieldinArray(formArray: FormArray, i: number): boolean | null {
    return formArray.controls[i].errors
        && formArray.controls[i].touched
  }

  isSamePassword(field1: string, field2: string) {

    return (form: AbstractControl): ValidationErrors | null => {
      const field1Value = form.get(field1)?.value
      const field2Value = form.get(field2)?.value
      return field1Value === field2Value ? null : {isSamePassword: false}

    }
  }

}
