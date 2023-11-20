import { UtilityServiceService } from 'src/app/utility-service.service';
import { Component } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {
constructor(private _utilityServiceService : UtilityServiceService){}

ngOnInit(){
const intervalTech = interval(1000).pipe(map(x=>"Tech video "+ (x+1)),take(5));
const intervalComedy = interval(1000).pipe(map(x=>"Comedy video "+ (x+1)),take(2));
const intervalNews = interval(1000).pipe(map(x=>"News video "+ (x+1)),take(4));

const finalObs = concat(intervalTech,intervalComedy,intervalNews);

finalObs.subscribe(res=>{
  console.log(res)
  this._utilityServiceService.print('ul-container',res);
});

}


}
