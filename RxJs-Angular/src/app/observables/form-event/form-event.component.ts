import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityServiceService } from 'src/app/utility-service.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})

export class FormEventComponent implements AfterViewInit{
  constructor(private utitlityService:UtilityServiceService) {
    
  }
  
  @ViewChild('addBtn')addBtn:ElementRef | undefined; 
  ngAfterViewInit(): void {
//     const mybutton = document.getElementById('myButton'); // Get a reference to a DOM element
// const clickObservable = fromEvent(mybutton,'click');// Create an observable for click events on the button

// // Subscribe to the observable to react to click events
// clickObservable.subscribe(event => {
//   console.log('Button clicked!', event);
// });

    if(this.addBtn){
      let count=0;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>
      {
        var cnt = "video"+ count++;
        console.log()
        this.utitlityService.print("ul-id",cnt);
      });
    }
  }
 

}
