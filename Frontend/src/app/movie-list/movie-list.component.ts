import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required]),
    phonenumber : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    nooftickets:new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    movie : new FormControl('',[Validators.required]),
    ticket: new FormControl('',[Validators.required]),

  })

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.warn(this.movieForm.value);
  }
  get name(){
    return this.movieForm.get('name');
  }
  get age(){
    return this.movieForm.get('age');
  }
  get phonenumber(){
    return this.movieForm.get('phonenumber');
  }
  get email(){
    return this.movieForm.get('email');
  }
  get nooftickets(){
    return this.movieForm.get('nooftickets');
  }
  get gender(){
    return this.movieForm.get('gender');
  }
  get ticket(){
    return this.movieForm.get('ticket');
  }
  get movie(){
    return this.movieForm.get('movie');
  }

}
