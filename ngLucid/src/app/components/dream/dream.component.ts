import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dream } from 'src/app/models/dream';
import { User } from 'src/app/models/user';
import { DreamService } from 'src/app/services/dream.service';

@Component({
  selector: 'app-dream',
  templateUrl: './dream.component.html',
  styleUrls: ['./dream.component.css']
})
export class DreamComponent implements OnInit {

  public dreams: Dream[] = [];
  public selected: Dream | null = null;
  public editDream: Dream | null = null;
  public newDream: Dream = new Dream();
  constructor(
    private dreamService: DreamService,
    private route: ActivatedRoute,
    private router: Router,
    private date: DatePipe

    )
    { }
    ngOnInit(): void {
      let routeId = this.route.snapshot.paramMap.get('id');
    console.log(routeId);
    if(routeId && !this.selected){
      let todoId = Number.parseInt(routeId);
      if(isNaN(todoId)){
        this.router.navigateByUrl('invalidId');
      }else{
        this.dreamService.show(todoId).subscribe({
          next: (dream) => {
            this.selected = dream;
          },
          error: (fail) => {
            console.error('TodoListService.ngOnInit: todo not found')
            this.router.navigateByUrl('todoNotFound');

          }
        })
      }
    }

    this.reload();


  }

    reload(){
      this.dreamService.index().subscribe({
        next: (data) => {
          this.dreams = data
        },
        error: (err) => {
          console.log('DreamComponent.reload(): Error loading dreams' + err);

        }
      })
    }

    loadDreams(){
      this.dreamService.index().subscribe({
        next: (dreams) => {
        console.log(dreams);
        this.dreams = dreams;


      },
      error: (error) => {
        console.error('dreamComponent.loadDreams: error getting dreams list')

      }
    })
  }
  addDream() {
    this.dreamService.create(this.newDream).subscribe(
      {
        next: (data) => {
          this.newDream = new Dream();
          this.reload();
        },
        error: (err) => {
          console.error('dreamComponent.create(): error creating dream:');
          console.error(err);
        }
      }
    );
  }
  updateDream(updatedDream: Dream) {
    this.dreamService.update(updatedDream).subscribe(
     {
       next: (data) => {
         this.selected = data;
         this.editDream = null;
         this.reload();
       },
       error: (err) => {
         console.error('TodoListComponent.updateTodo(): error updating todo:');
         console.error(err);
       }
     }
   );

   }
  displayDream(dream: Dream){
    this.selected = dream;
  }
  deleteDream(id: number){
    this.dreamService.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (err: string) => {
        console.log('DreamComponent.deleteDream(): Error deleting dream: ' + err);

      }
    });
  }
}
