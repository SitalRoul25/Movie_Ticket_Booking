import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    type:new FormControl('user',[Validators.required])
  });
  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

regUser() {
  console.log("form==>", this.regForm.value);

  if(this.regForm.valid) {
    this.UserService.register(this.regForm.value).subscribe(res =>{
      // this.regForm.reset();
      console.log("hi",res);
      this.router.navigate(["/login"]);
    });
  }
}


get username() {
  return this.regForm.get('username');
}

get email() {
  return this.regForm.get('email');
}

get password() {
  return this.regForm.get('pass');
}
get phone() {
  return this.regForm.get('phone');
}

}
