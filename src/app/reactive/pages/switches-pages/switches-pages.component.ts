import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorServices } from '../../../shared/services/validator.service';

@Component({
  selector: 'app-switches-pages',
  templateUrl: './switches-pages.component.html',
  styleUrl: './switches-pages.component.css'
})
export class SwitchesPagesComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termAndCondition: [false, Validators.requiredTrue]
  })

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorServices
  ){}

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }


  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(this.myForm, field)
  }

  isValidFieldinArray(formArray: FormArray, i: number): boolean | null {
    return this.validatorService.isValidFieldinArray(formArray, i)
  }

  getFieldError(field: string): string | null {
    return this.validatorService.getFieldError(this.myForm, field)
  }


  onSave(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    console.log(this.myForm.controls);
  }
}
