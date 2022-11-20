import { Time } from "@angular/common";

export class Dream {

  id: number;
  name: string;
  description: string;
  lucid: boolean;
  date: string;
  time: string;

  constructor(
  id: number = 0,
  name: string = '',
  description: string = '',
  lucid: boolean = false,
  date: string = '',
  time: string = ''
  )
  {
  this.id = id;
  this.name = name;
  this.description = description;
  this.lucid = lucid;
  this.date = date;
  this.time = time;


  }
}
