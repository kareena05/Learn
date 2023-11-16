import { UtilityServiceService } from 'src/app/utility-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
constructor(private  _utilityService :UtilityServiceService){

}
username!:string;

ngOnInit(){
  //we are emiting the data for the  exclusive property of service here
  this._utilityService.exclusive.next(true);
  this._utilityService.username.subscribe(res=>this.username = res);

}
//when you leave the component page you will set it to false so the header will not have exclusive btn on another pages
ngOnDestroy(){
  //we are emiting the data for the  exclusive property of service here
  this._utilityService.exclusive.next(false);
}
 
}
