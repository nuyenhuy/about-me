import { Component } from '@angular/core';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-blog',
  imports: [
    NzTypographyComponent,
    NzColDirective,
    NzRowDirective
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
  standalone: true
})
export class Blog {

}
