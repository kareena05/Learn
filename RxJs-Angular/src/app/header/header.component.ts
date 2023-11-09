import { Component } from '@angular/core';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
exclusive:boolean=false;
constructor(private  _utilityService :UtilityServiceService){

}
ngOnInit(){
  //we are subscribing the  exclusive property of service here
  this._utilityService.exclusive.subscribe(res=>{
    this.exclusive = res;
  })
 }
 
}
