
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 userData: any={};
  editingProfile: boolean | undefined;
  updateUserData:any;
  
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
   // alert(JSON.stringify(this.userData.value))
    };
  
  editProfile(): void {
    this.editingProfile = !this.editingProfile;
  }

  saveProfile(): void {
    this.userService.updateUserData(this.userData);
    this.editingProfile = false;
  }

  cancelEdit(): void {
    this.editingProfile = false;
  }

  
}

