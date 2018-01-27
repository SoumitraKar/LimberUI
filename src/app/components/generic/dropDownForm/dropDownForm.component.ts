import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown-form',
  templateUrl: './dropDownForm.component.html',
  styleUrls: [ './dropDownForm.component.css' ]
})
export class dropDownFormComponent {
  @Input() heading: string;
  @Input() show: boolean;
  showHide() {
    this.show = !this.show;
  }
}
