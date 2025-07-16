import {Component, OnInit} from '@angular/core';
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
import {BreakpointObserver} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';
import {AsyncPipe} from '@angular/common';


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
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss',
  standalone: true
})
export class HomeLayout implements OnInit {
  public _isSmallScreen: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver, public layoutService: LayoutService) {
  }

  public ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this._isSmallScreen.next(result.matches);
    });
  }
}
