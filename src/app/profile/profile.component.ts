
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

 userData: any={};
  editingProfile: boolean | undefined;
  
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
   // alert(JSON.stringify(this.userData.value))
    };
    

  // editPhoto(): void {
  //   const fileInput = document.getElementById('photoInput');
  //   fileInput?.click();
   
  // }

  editProfile(): void {
    
    this.editingProfile = true;
  }

  saveEditedProfile(): void {
    
    this.userService.setUserData(this.userData);
    this.editingProfile = false;

  }

  cancelEdit(): void {
    
    this.editingProfile = false;
  }
}