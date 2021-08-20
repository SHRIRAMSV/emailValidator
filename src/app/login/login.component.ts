import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: any = null;
  password: string = "";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  loginFunction(loginForm : NgForm) : void {
    console.log(loginForm.value);
    if("1" === loginForm.value.userId || "user1@123"=== loginForm.value.password){      
      this.router.navigate(['email']);
    }    
    else {
      console.log ("User ID and Password does not match")
    }
  }
}
