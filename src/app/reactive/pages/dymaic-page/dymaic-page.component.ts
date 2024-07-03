import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorServices } from '../../../shared/services/validator.service';

@Component({
  selector: 'app-dymaic-page',
  templateUrl: './dymaic-page.component.html',
  styleUrl: './dymaic-page.component.css'
})
export class DymaicPageComponent {

  public productForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    favoriteGames: this.fb.array([
      ['Final Fantasy', Validators.required],
      ['Super Mario', Validators.required],
    ])

  })

  public newFavorite: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)])

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorServices
  ){}

  get favoriteGameControls() {
    return this.productForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField(this.productForm, field)
  }

  isValidFieldinArray(formArray: FormArray, i: number): boolean | null {
    return this.validatorService.isValidFieldinArray(formArray, i)
  }

  getFieldError(field: string): string | null {
    return this.validatorService.getFieldError(this.productForm, field)
  }



  onSubmit(): void {
    if(this.productForm.invalid) {
      this.productForm.markAllAsTouched()
      return
    }
    console.log(this.productForm.value);
    (this.productForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
    this.productForm.reset()
  }

  deleteElement(index: number): void {
    this.favoriteGameControls.removeAt(index)
  }

  addElementFavorite(): void {
    if(this.newFavorite.invalid) return

    const newGame = this.newFavorite.value;

    // this.favoriteGameControls.push(new FormControl(newGame))
    this.favoriteGameControls.push(this.fb.control(newGame, Validators.required))
    this.newFavorite.reset()
  }

}
