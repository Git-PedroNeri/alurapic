import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserNotTakenValidatorService {
  constructor(private signupSerivice: SignUpService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) => {
            return this.signupSerivice.checkUserNameTaken(userName);
          })
        )
        .pipe(map((isTaken) => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
