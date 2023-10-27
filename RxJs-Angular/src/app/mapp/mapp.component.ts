import { UtilityServiceService } from 'src/app/utility-service.service';
import { Component } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-mapp',
  templateUrl: './mapp.component.html',
  styleUrls: ['./mapp.component.scss']
})
export class MappComponent {

  constructor(private _utilityService:UtilityServiceService){}
  msg:string=""
  msg2:string=""
  msg3:string=""
  sub1!:Subscription;
  sub2!:Subscription;
  sub3!:Subscription;
ngOnInit(){
  //Example:1-======================================================================

  const obs1 = interval(1000);

  this.sub1=obs1.pipe(map(data=>"Video "+data)).subscribe(res=>{
    console.log(res);
    this.msg=res;
  });
  setTimeout(()=>{
    this.sub1.unsubscribe();
  },11000);
  //Example-2 ======================================================================
  const obs2 = interval(1000);

  this.sub2=obs2.pipe(map(data=>data+10)).subscribe(res=>{
    console.log(res);
    this.msg2 = res.toString();
  });
  setTimeout(()=>{
    this.sub2.unsubscribe();
  },11000);


  //Example-3 ======================================================================
const members = [
  {id:1,name:"Anup",age:32},
  {id:2,name:"Barn",age:32},
  {id:3,name:"Akanksha",age:32},
  {id:4,name:"Craz",age:32},
  {id:5,name:"Giyan",age:32}

]

const obs3 = from(members);
this.sub3 =  obs3.pipe(map(data=>data.name) ).subscribe(data=>{
  console.log(data);
  this._utilityService.print("ul-id",data);
})
}
}
