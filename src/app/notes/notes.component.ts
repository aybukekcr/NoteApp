import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input() note: any;
  shouldEdit: boolean = false;

  constructor() {
  }

  save(event: Event):void {
    this.stopPropagation(event);
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
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


    this.shouldEdit = false;
  }

  delete():void {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
  }

  toggleEdit():void {
    this.shouldEdit = !this.shouldEdit;
  }

  stopPropagation(event: Event):void {
    event.stopPropagation();
  }


}
