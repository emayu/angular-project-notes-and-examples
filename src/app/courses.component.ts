import { CoursesService } from './courses.service';
import{ Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
        <input [(ngModel)]="text" />
        {{ text | titleCase }}
        `
})

export class CoursesComponent{
    text = '';

}