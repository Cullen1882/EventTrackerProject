import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private auth: AuthService
  ) { }

  loggedIn(): boolean {
    return this.auth.checkLogin();
  }

  ngOnInit(): void {

  }

}
