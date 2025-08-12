import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.html',
  styleUrls: ['./team-content.css']
})
export class TeamContentComponent {
  @Output() hideContent = new EventEmitter<void>();

  onHideButtonClick(): void {
    this.hideContent.emit();
  }
}
