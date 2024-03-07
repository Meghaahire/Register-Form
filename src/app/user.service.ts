import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  saveUser(userData: any) {
    throw new Error('Method not implemented.');
  }
  
  
  constructor(private http: HttpClient) {}

  private userData: any={};

  setUserData(data: any): void {
    //alert('Data got')
    console.log(data.value)
    //alert(""+JSON.stringify(data.value))
    this.userData = data;
  }

  getUserData(): any {
    return this.userData;
  }

  

  
  
}
