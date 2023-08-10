import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-link',
  templateUrl: './child-link.component.html',
  styleUrls: ['./child-link.component.scss']
})
export class ChildLinkComponent {
  @Input() child!: any;
}
