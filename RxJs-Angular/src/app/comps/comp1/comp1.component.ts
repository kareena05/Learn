import { Component } from '@angular/core';
import { UtilityServiceService } from 'src/app/utility-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  constructor(private  _utilityService :UtilityServiceService){

  }
  username!:string;


  changeName(userName:any){
    this._utilityService.username.next(userName.value);  
  }
  ngOnInit(){
    //we are emiting the data for the  exclusive property of service here
    this._utilityService.username.subscribe(res=>this.username = res);
  
  }
}
