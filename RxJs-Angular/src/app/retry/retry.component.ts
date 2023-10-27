import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {
  apidata:any
  isfetching:boolean=false;
  status="No data";
  statusTag=1; //status tag is one when status is "No data", 2 when status="data fetched",3 when status is unable to fetch

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.fetchdetails();
  }
fetchdetails(){
  this.isfetching=true;
this.http.get("https://api.publicapis.org/entries").
pipe(
// retry(2)
retryWhen(err=> err.pipe(
  delay(2000),
  scan((retryCount:any)=>{
  if(retryCount==5){
throw err;
  }else{
    retryCount++;
    this.status="Retry Attemp: "+retryCount;
  }
},0)))
).
subscribe((data)=>{
console.log("are");  
console.log("api data: ",data);
this.apidata=data;
this.isfetching=false;
this.status="Data fetched successfullyyyyyyyyyyy!";
this.statusTag=2;
},(err)=>{
  this.isfetching=true;
  this.status="Unable to fetch data :(";
  this.statusTag=3;
});
}
}
