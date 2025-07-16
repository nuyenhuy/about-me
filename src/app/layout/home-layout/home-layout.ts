import { Component } from '@angular/core';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent
} from 'ng-zorro-antd/layout';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LayoutService} from '../../service/layout.service';

@Component({
  selector: 'app-home-layout',
  imports: [
    Footer,
    Header,
    NzButtonComponent,
    NzContentComponent,
    NzFooterComponent,
    NzHeaderComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss'
})
export class HomeLayout {
  constructor(public layoutService: LayoutService) {}
}
