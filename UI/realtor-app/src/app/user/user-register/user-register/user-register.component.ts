import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/user-service.service';
import { User } from '../../../models/User';
import * as alertify from 'alertifyjs';
import { AlertifyService } from '../../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  userSubmitted: boolean;
  user:User;


  constructor(private fb: FormBuilder, private userService: UserServiceService,
                      private alertify: AlertifyService ) { }

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

  userData(): User{
    return this.user={
      userName:this.UserName.value,
      email:this.Email.value,
      password: this.Password.value,
      mobile: this.Mobile.value
    }
  }

  passwordMatchingValidator(control:AbstractControl) {
    return control.get('password')?.value === 
    control.get('confirmPassword')?.value ? null : { mismatched: true };

  }


 



  onSubmit(){
    console.log(this.registrationForm.value);
   
    this.userSubmitted=true;
    if(this.registrationForm.valid)
    {
      // this.user=Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted=false;
      this.alertify.success('Congrats, you are successfully registered');
    }
     else
    {
      this.alertify.error('Kindly provide the required fields');
    }
  
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


//getter methods
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
  get Mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }


}
