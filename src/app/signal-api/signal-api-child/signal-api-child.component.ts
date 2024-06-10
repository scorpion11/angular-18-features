import {Component, EventEmitter, input, Input, output, Output} from '@angular/core';

@Component({
  selector: 'app-signal-api-child',
  standalone: true,
  imports: [],
  templateUrl: './signal-api-child.component.html',
  styleUrl: './signal-api-child.component.scss'
})
export class SignalApiChildComponent {
  @Input() decoratorName: string = '';
  @Output() decoratorNameEvent = new EventEmitter<string>();

  signalName = input<string>();
  signalNameEvent = output<string>();

  updateSignalName() {
    this.signalNameEvent.emit('Hello Input Signal!');
  }

  updateDecoratorName(): void {
    this.decoratorNameEvent.emit('Hello Input Decorator!');
  }
}
