import { Component } from '@angular/core';
import { UtilityServiceService } from '../utility-service.service';
import { interval, map, take, concat, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {
  constructor(private _utilityServiceService: UtilityServiceService) { }

  ngOnInit() {
    const intervalTech = interval(1000).pipe(map(x => "Tech video " + (x + 1)), take(5));
    const intervalComedy = interval(3000).pipe(map(x => "Comedy video " + (x + 1)), take(2));
    const intervalNews = interval(2000).pipe(map(x => "News video " + (x + 1)), take(4));

    const finalObs = merge(intervalTech, intervalComedy, intervalNews);

    finalObs.subscribe(res => {
      console.log(res)
      this._utilityServiceService.print('ul-container', res);
    });
  }
}
