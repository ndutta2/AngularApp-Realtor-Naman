import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  //   this.registrationForm = new FormGroup({
  //     userName: new FormControl(null, Validators.required),
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //       confirmPassword: new FormControl(null, [Validators.required]),
  //       mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])     
  // }, {validators:this.passwordMatchingValidator });
  this.createRegistrationForm();
    
  
  }

  passwordMatchingValidator(control:AbstractControl) {
    return control.get('password')?.value === 
    control.get('confirmPassword')?.value ? null : { mismatched: true };

  }
  get UserName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get Email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get Password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get ConfirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  onSubmit(){
    console.log(this.registrationForm);
  }
  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
       password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]],
        mobile: [null, [Validators.required, Validators.maxLength(10)]]  
    },{Validators: this.passwordMatchingValidator})
  }

}
