import {Component, Input, OnInit, } from '@angular/core';
import {Note} from "./note";
import {NoteService} from "./note.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'EnglishCentral Notes';
  @Input() noteInfo: Note[] = [];

  constructor(private noteService: NoteService) {
  }

  public ngOnInit():void {
    this.noteInfo = this.getNotes();
  }

  getNotes(): Note[] {
    let notes: Note[] = [];
    this.noteService.getNotes().subscribe((data:Note[])=>{
      this.noteInfo=data;
    });
    return notes;
  }

  addNoteExample():void {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }


}
