import { UtilityServiceService } from 'src/app/utility-service.service';
import { Component } from '@angular/core';
import { from, of } from 'rxjs';


@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent{
  objdata:any={};
  constructor(private _utilityServiceService:UtilityServiceService){

  }

ngOnInit()
{

  //ex1: Of
  const oneDlist:any=of('Amez', 'Rhea', 'Sam');
 oneDlist.subscribe((x: any)=>this._utilityServiceService.print("ul-id",x));

 //ex2: Of
 const obj:any=of({a:'Amez', b:'Rhea', c:'Sam'});
 obj.subscribe((x: any)=>this.objdata=x);

//ex:3 From 
const arr =['Amez', 'Rhea', 'Sam' ];
const obsArray = from(arr).subscribe(x=>this._utilityServiceService.print("ul-id-arr",x));

 //ex:4 From
 var demoPromise = new Promise((resolve)=>{
  setTimeout(()=>resolve("3 seconds passed"),3000)
 })
//  demoPromise.then((data)=>console.log(data));
const promiseObs = from(demoPromise);
promiseObs.subscribe((x:any)=>{
  let content = "From Promise"+x;
  console.log(content)
  this._utilityServiceService.print("ul-id-promise",content);
});
//ex:5 From 
const str ="kareena";
const obsStr = from(str).subscribe(x=>this._utilityServiceService.print("ul-id-str",x));


}
 

    
     
   
}
