import { Component } from '@angular/core';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-me',
  imports: [
    NzTypographyComponent,
    NzRowDirective,
    NzColDirective
  ],
  templateUrl: './me.html',
  styleUrl: './me.scss',
  standalone: true
})
export class Me {

}
