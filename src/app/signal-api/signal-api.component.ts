import {Component} from '@angular/core';
import {SignalApiChildComponent} from "./signal-api-child/signal-api-child.component";

@Component({
  selector: 'app-signal-api',
  standalone: true,
  imports: [
    SignalApiChildComponent
  ],
  templateUrl: './signal-api.component.html',
  styleUrl: './signal-api.component.scss'
})
export class SignalApiComponent {
  decoratorName: string = 'Input Decorator';
  signalName: string = 'Input Signal';

  updateDecoratorName(updatedName: string) {
    this.decoratorName = updatedName;
  }

  updateSignalName(changedName: string) {
    this.signalName = changedName;
  }
}
