import { Component } from '@angular/core';
import {DeferrableViewChildComponent} from "./deferrable-view-child/deferrable-view-child.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [
    DeferrableViewChildComponent
  ],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {
}
