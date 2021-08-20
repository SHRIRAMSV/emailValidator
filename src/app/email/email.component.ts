import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  email: string = "";
  isPaid : boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  saveRegister(registerForm : NgForm): void {    
    if("admin@gmail.com" === registerForm.value.email ){      
      console.log("paid");
      this._router.navigate(['paid']);
    }
    else{
      console.log("free");
      this._router.navigate(['free']);
    }
  
       
  }
}
