import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }
  print(id:string,content:string){
    var li = document.createElement('li');
    li.innerText   = content; 
    document.getElementById(id)?.appendChild(li);
  }
}
