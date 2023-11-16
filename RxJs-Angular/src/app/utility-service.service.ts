import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
exclusive =  new Subject<boolean>();
username=  new BehaviorSubject<string>('Kareena');

  constructor() { }
  print(id:string,content:string){
    var li = document.createElement('li');
    li.innerText   = content; 
    document.getElementById(id)?.appendChild(li);
  }
}
