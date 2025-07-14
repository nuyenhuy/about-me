import { Component } from '@angular/core';
import {LayoutService} from '../../service/layout.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public layoutService: LayoutService) {}
}
