import { UserService } from './../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  });

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  userLogin() {
    if(this.loginForm.valid) {
      this.UserService.login(this.loginForm.value).subscribe(res=>{
        console.log("hiiii");
        console.log(res);
        localStorage.setItem('access_token',res.access_token)
        this.loginForm.reset();
        this.router.navigate(['/movies']);
      },
      (error) => {
        console.log(error.message);
      }
      );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
