import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import type { IShowcase1v3 } from '@core/interface/combs/IShowcase';

@Component({
  selector: 'app-showcase-1v3',
  templateUrl: './showcase1v3.component.html',
  styleUrls: ['./showcase1v3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Showcase1v3Component implements OnInit {
  @Input() content: IShowcase1v3;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
