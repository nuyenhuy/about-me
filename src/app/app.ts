import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from 'ng-zorro-antd/layout';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from 'ng-zorro-antd/menu';
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from 'ng-zorro-antd/breadcrumb';
import {NgOptimizedImage} from '@angular/common';
import {NzSliderComponent} from 'ng-zorro-antd/slider';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {Header} from './layout/header/header';
import {LayoutService} from './service/layout.service';
import {Footer} from './layout/footer/footer';
import {Album} from './features/album/album';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutComponent, NzSiderComponent, NzIconDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDirective, NzHeaderComponent, NzContentComponent, NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzFooterComponent, NgOptimizedImage, NzSliderComponent, NzButtonComponent, Header, Footer, RouterLink],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  constructor() {
  }
}
