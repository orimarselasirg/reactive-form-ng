import { Injectable, SimpleChanges } from '@angular/core';
import { AbstractControl, EmailValidator, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value

    const httpCallObservable = new Observable<ValidationErrors | null> ((suscriber) => {
      console.log({email});
      if(email === 'ramirogrisales@gmail.com') {
        suscriber.next({emailTaken: true});
        suscriber.complete();
      }
      suscriber.next(null)
      suscriber.complete();
    }).pipe(
      delay(2000)
    )

    return httpCallObservable

    // return of({
    //   emailTaken: true
    // }).pipe(
    //   delay(2000)
    // )
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value
  //   console.log({email});

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )
  // }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }


}


// return this.http.get<any[]>(`http://localhost:3000/${email}`)
//.pipe(
// delay(2000),
//  map((response) => {
//    return (response.length > 0)
//    ? null
//    : { emailTaken: true}
//    }
//  }
//)
