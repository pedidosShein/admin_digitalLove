import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-markers-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>markers-page works!</p>`,
  styleUrls: ['./markers-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersPageComponent { }
