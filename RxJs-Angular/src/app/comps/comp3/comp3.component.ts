import { Component } from '@angular/core';
import { UtilityServiceService } from 'src/app/utility-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
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
