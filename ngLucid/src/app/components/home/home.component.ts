import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dream } from 'src/app/models/dream';
import { AuthService } from 'src/app/services/auth.service';
import { DreamService } from 'src/app/services/dream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dreams: Dream[] = [];
  public isCollapsed = false;

  constructor(
    private dreamService: DreamService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  loggedIn(): boolean {
    return this.auth.checkLogin();
  }
  loadDreams(){
    this.dreamService.index().subscribe({
      next: (dreams) => {
        console.log(dreams);
        this.dreams = dreams;


      },
      error: (error) => {
        console.error('HomeComponent.loadDreams: error getting dreams list')

      }
    })
  }
  ngOnInit(): void {
    // this.loadDreams();
  }

}
