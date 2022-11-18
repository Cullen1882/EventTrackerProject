import { Component, OnInit } from '@angular/core';
import { Dream } from 'src/app/models/dream';
import { DreamService } from 'src/app/services/dream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dreams: Dream[] = [];

  constructor(
    private dreamService: DreamService
  ) { }

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
    this.loadDreams();
  }

}
