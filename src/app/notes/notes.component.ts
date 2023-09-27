import {Component, Input, OnInit, Output} from '@angular/core';
import {NoteService} from "../note.service";


@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent {
    @Input() note: any;
    shouldEdit: boolean = false;

    constructor(private localStorage: NoteService) {
    }

    save(event: Event) {
        this.stopPropagation(event);

        if (!this.note.key) {
            console.error('Note ID is undefined. Cannot save.');
            return;
        } else {
            localStorage.setItem(this.note.key.toString(), JSON.stringify(this.note));
        }

        this.shouldEdit = false;
    }

    delete() {
        if (this.note.key === 'undefined') {
            console.error('Note ID is undefined. Cannot delete.');
            return;
        }

        localStorage.removeItem(JSON.stringify(this.note.key));
        window.location.reload();
    }

    toggleEdit() {
        this.shouldEdit = !this.shouldEdit;
    }

    stopPropagation(event: Event) {
        event.stopPropagation();
    }


}
