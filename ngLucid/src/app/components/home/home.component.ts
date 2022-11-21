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

  constructor( ) { }

  ngOnInit(): void {}

}
