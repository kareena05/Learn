import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
exclusive =  new Subject<boolean>();
  constructor() { }
  print(id:string,content:string){
    var li = document.createElement('li');
    li.innerText   = content; 
    document.getElementById(id)?.appendChild(li);
  }
}
