import { Component } from '@angular/core';
import {NzFooterComponent} from "ng-zorro-antd/layout";

@Component({
  selector: 'app-footer',
  imports: [
    NzFooterComponent
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true
})
export class Footer {

}
