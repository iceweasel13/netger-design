import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public buttonText = '';
  public iconContent = '';
  @Input()
  set text(name: string) {
    this.buttonText = name;
  }
  set icon(url: string) {
    this.iconContent = url;
  }
  get name(): string {
    return this.buttonText;
  }
  get url(): string {
    return this.iconContent;
  }

  @Input() color: string = '0068B4';
  @Input() type: string = 'button';
  @Input() detail: boolean = false;
  constructor() {}
}
