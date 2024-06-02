import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, signal} from '@angular/core';

@Component({
  selector: 'app-zone-less',
  standalone: true,
  imports: [],
  templateUrl: './zone-less.component.html',
  styleUrl: './zone-less.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneLessComponent {
  title = 'Zone-less Angular';
  signaTitle =  signal('Zone-less Angular');

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const updateTitleBtn = this.el.nativeElement.querySelector('#updateTitleBtn');

    if (updateTitleBtn) {
      this.renderer.listen(updateTitleBtn, 'click', () => this.updateTitle());
    }
  }

  updateTitle() {
    setTimeout(() => {
      this.title = 'Try Title Update without zone.js';
      console.log(this.title);
    }, 500);
  }

  manuallyUpdateTitle() {
    setTimeout(() => {
      this.title = 'Manually Title Update without zone.js';
      console.log(this.title);
      this.cdr.detectChanges();
    }, 500);
  }

  updateSignalTitle() {
    setTimeout(() => {
      this.signaTitle.set('Signal Title Update without zone.js');
      console.log(this.signaTitle());
    }, 500);
  }
}
