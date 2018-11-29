import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})

export class RegistrationFormComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted: boolean;
  public success: boolean;
  public disabled: boolean;
  public hasError: boolean;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit () {
    this.initialize();
  }

  // convenience getter to form fields
  get formValues () {
    return this.registerForm.controls;
  }

  initialize () {
    this.submitted = false;
    this.success = false;
    this.hasError = false;

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      school: ['', Validators.required],
    })
  }

  onSubmit () {
    this.submitted = true;

    if (!this.registerForm.invalid) {
      this.userService.addUser(this.registerForm.value)
        .subscribe(
          res => {
            this.success = true;
            this.hasError = false;
            console.log(res)
          },
          error => {
            this.hasError = true;
            console.error(error)
          }
        )

      console.log(this.registerForm.value)
    }

  }

}
