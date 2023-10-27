import { Subscription, from, interval, of, take, toArray } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent {
users=[
  {name:"Amez",age:19},
  {name:"Sam",age:21},
  {name:"Rhea",age:25},


]
  ngOnInit(){
    let sub:Subscription;
    const intervals = interval(1000);
    // sub = intervals.subscribe((x:any)=>{
    //   console.log(x)
    //   if(x==7){
    //     sub.unsubscribe();
    //   }
    // });

    //Ex: 1 toArray and take
    sub = intervals.pipe(take(6),toArray()).subscribe((x:any)=>{
      console.log(x)
    });

   
    const usersObs = from(this.users).subscribe(res=>console.log(res));


     // Ex:2 toArray() using from with pipe to array
    const usersObs2 = from(this.users).pipe(toArray()).subscribe(res=>console.log(res));
console.log("hey");
//Ex: 3 to Array() using of
    const usersObs3 = of(['Ayaz','Rhea','John']).pipe(toArray()).subscribe(res=>console.log(res));
  }
}
