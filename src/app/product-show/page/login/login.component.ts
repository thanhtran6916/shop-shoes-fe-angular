import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onsubmit() {
    this.authService.login(this.user).subscribe(({data}) => {
      localStorage.setItem("Token", data.token);
      this.router.navigate(['']);
    }, error => {
      console.log(error)
    })
  }
}
