import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})

export class RegistrationFormComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit () {
      this.submitted = false;

      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        school: ['', Validators.required],
      })
  }

  // convenience getter to form fields
  get formValues () {
    return this.registerForm.controls;
  }

  onSubmit () {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('sucess ulul')
  }

}
