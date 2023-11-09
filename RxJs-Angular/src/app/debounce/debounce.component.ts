import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent {
  @ViewChild('searchInput') searchMyInput!: ElementRef;
  @ViewChild('searchInput2') searchMyInput2!: ElementRef;

  
  reqdata=null;
  reqdata2=null;

  ngAfterViewInit(){
    var searchTerm = fromEvent<any>(this.searchMyInput.nativeElement,'keyup').
    pipe(
      map(event=>event?.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe((res)=>{
      console.log(res);
      this.reqdata=res;

      setTimeout(() => {
        this.reqdata=null;
      }, 1000);
    });

//ex:2 Distinct Until Changed
    var searchTerm2 = fromEvent<any>(this.searchMyInput2.nativeElement,'keyup').
    pipe(
      map(event=>event?.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    searchTerm2.subscribe((res)=>{
      console.log(res);
      this.reqdata2=res;

      setTimeout(() => {
        this.reqdata2=null;
      }, 1000);
    });
    
  }
  
}
