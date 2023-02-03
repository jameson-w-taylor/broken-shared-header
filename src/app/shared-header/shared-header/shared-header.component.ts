import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html'
})
export class SharedHeaderComponent {
  // If consumer does not provide defaultHref, ion-back-button will NEVER appear, even when expected
  @Input() showMenuButton: boolean = false;
  @Input() defaultHref?: string;
  @Input() title?: string;
  @Input() toolbarColor?: string;

  constructor() { }

}
