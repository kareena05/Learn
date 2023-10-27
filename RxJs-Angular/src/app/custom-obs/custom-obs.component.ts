import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, observeOn } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.scss']
})
export class CustomObsComponent implements OnDestroy{
  constructor(private _utilityService:UtilityServiceService){}
  techstatus="Ongoing";
  techstatus2="Ongoing";
  namestatus="Ongoing"
  name:string=""
  names = new Array("Alexz","Jezzz","Kernzz","Dizz","Lozz");

 subsc!:Subscription;
 unsubscrib(){
  alert("called");
  this.subsc.unsubscribe();
  alert("called 2");
 }
 ngOnInit(){

  //Ex:1 
  //create custom obserbale
  const customObs = Observable.create((observer:any)=>{
    //emit the data
    observer.next("Angular"); //is the method to emit the data
    setTimeout(() => {
      observer.next("Node");
    }, 1000);
    setTimeout(() => {
      observer.next("C#");
    }, 2000);
    setTimeout(() => {
      observer.next(".NET");
      // this.techstatus = "error";
      //observer.error(new Error("Error has occured"));//is the method to throw error and terminate observable
     //error to throw kr di lekin settimeout to nahi rukega apna kaam krega hi
     //and hence not a right place to set status
     
    }, 3000);
    setTimeout(() => {
      observer.next("BlockChain");
      // this.techstatus="complete" not a right place to set the status
      observer.complete() //is the method to complete the observable
    }, 4000);
  });

  //subscribe to the custom obs
  customObs.subscribe((res: any)=>{
    console.log(res);
    this._utilityService.print("ul-id",res);

  },
  (err:any)=>{
    //this.techstatus="error";
    console.log(err);
  },
  (completed:any)=>{
    console.log(completed);
    this.techstatus="complete";
  }
  );
  //---------------------------------------------------------------------------------
const arr  = new Array("Angular","C#","Python","C++");
//Ex:2
 const CustomObs2 = Observable.create((observer:any)=>{
 let count=0;      
  setInterval(()=>{
    
         observer.next(arr[count]);
         if(count==3){
          observer.error();
         }
          if (count >= 5) {
            // clearInterval(); // Stop the interval
            observer.complete(); // Complete the observable
          }
          count++;

        },1000);
       
        if(count>=5){
          observer.complete();
        }
      });
 //
 this.subsc = CustomObs2.subscribe((data:any)=>{
  console.log("ohhhh " +data);
  this._utilityService.print("ul-id-error",data);
 },(err:any)=>{
this.techstatus2 = 'error';
 });
  

//------------------------------------------------------------------------------------
 //EX: 3

 const custObs3 = Observable.create((observer:any)=>{
  let count =0;
  setInterval(()=>{
  observer.next(this.names[count]);
  count++;
if(count==this.names.length){
  observer.complete();
}
  },1000);

  count++;
 });


 


 custObs3.subscribe((data:any)=>{
  this.namestatus="Ongoing"
  this.name = data;
 },(err:any)=>{
  this.namestatus='error'
 },(completed:any)=>{
  this.namestatus='complete'
 });

 }
 ngOnDestroy(){
  alert("destroyed");
    this.subsc.unsubscribe();
 }
}


