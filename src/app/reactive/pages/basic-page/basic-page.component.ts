import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorServices } from '../../../shared/services/validator.service';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  // public myform: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(1)]],
    inStorage:[0, [Validators.required, Validators.min(1)]]
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorServices
  ){}

  ngOnInit(): void {
    this.myForm.reset({price: 0, inStorage: 0})
  }

  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(this.myForm, field)
  }

  getFieldError(field: string): string | null {
    return this.validatorService.getFieldError(this.myForm, field)
  }



  onSave(): void {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.value);

    this.myForm.reset({price: 0, inStorage: 0})
  }
}
