import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-zoom-range-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>zoomRangePage works!</p>`,
  styleUrls: ['./zoomRangePage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomRangePageComponent { }
