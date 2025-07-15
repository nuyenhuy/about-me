import {Component} from '@angular/core';
import {LayoutService} from '../../service/layout.service';
import {NzPopoverDirective} from 'ng-zorro-antd/popover';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-header',
  imports: [
    NzPopoverDirective,
    NzButtonComponent,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {
  public startDate: Date = new Date(2025, 5, 26);
  constructor(public layoutService: LayoutService) {}

  public getDurationDay(): number {
    return Math.floor((new Date().getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));
  }
}
