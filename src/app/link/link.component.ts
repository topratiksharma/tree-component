import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() tree!: any;

  public isEnabled = false;

  public toggleChild() {
    this.isEnabled = !this.isEnabled;
  }
}
