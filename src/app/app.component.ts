import {Component, Input, OnInit, Output} from '@angular/core';
import {Note} from "./note";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'EnglishCentral Notes';
    @Input() noteInfo: Note[] = [];

    public ngOnInit() {
        this.getNotes();
    }

    getNotes() {
        let notes;
        this.noteInfo = [];

        Object.keys(localStorage).forEach((key) => {
            const noteString = localStorage.getItem(key);
            console.log(noteString);
            if (noteString !== null) {
                const note: Note = JSON.parse(noteString);
                this.noteInfo.push(note);
                this.noteInfo.sort((note1, note2) => {
                    return note2.key - note1.key;
                });
            }
        });
        console.log(this.noteInfo);
    }

    addNoteExample() {
        const key = Date.now();
        const newNote = {
            title: "",
            bodyText: "",
            key: key
        };

        localStorage.setItem(key.toString(), JSON.stringify(newNote));
        this.noteInfo.unshift(newNote);
    }


}
