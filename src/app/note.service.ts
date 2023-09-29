import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs";
import {Note} from "./note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient) {
  }
  private notesUrl="https://jsonplaceholder.typicode.com/posts";

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }
}
