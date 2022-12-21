import { Component, OnInit } from '@angular/core';
import {ShoesService} from "../../../service/shoes.service";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private shoesService: ShoesService,
              private auth: AuthService) { }

  ngOnInit(): void {
  }

  findAllShoes() {
    this.auth.getAll().subscribe((res) => {
      console.log(res)
    }, error => console.log(error))
  }
}
