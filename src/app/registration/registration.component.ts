import { Component, EventEmitter, OnInit, Output, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  selectedFile: File | null = null;
  imageUrl: string | null = null;
  userData: any = {};

  constructor(private router: Router, private fb: FormBuilder,public userService: UserService)  { }

 registrationForm:FormGroup = new FormGroup({
     photoInput:new FormControl('', [Validators.required]),
      firstName:new FormControl ('', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]),
      lastName:new FormControl ('', [Validators.required,  Validators.pattern(/^[a-zA-Z]+$/)]),
      email:new FormControl ('', [Validators.required, Validators.email]),
      contactNumber:new FormControl ('', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{4}-\d{4}$/)]),
      ageRange:new FormControl (20, [Validators.required, Validators.min(20), Validators.max(60)]),
      state:new FormControl ('', Validators.required),
      country:new FormControl ('', Validators.required),
      address:new FormControl ('', Validators.required),
      tags:new FormControl (''),
      subscribe:new FormControl (false,Validators.required)
    });

  registerUser(){
    //console.log(this.registrationForm);
    this.router.navigate(['/profile']);
    this.userService.setUserData(this.registrationForm);
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedFile = file;
      if (file.size > 1024 * 1024) {
        alert('File size should not exceed 1MB.');
        this.selectedFile = null;
        return;
      } 
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  
  selectedAge: number = 20;

  onAgeChange(event: any) {
    this.selectedAge = event.target.value;

  }
 
  
}



