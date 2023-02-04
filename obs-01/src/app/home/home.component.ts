import {Component, OnInit, OnDestroy} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {map,filter} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstOBS: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstOBS = interval(1000).subscribe(counter => {
    //   console.log(counter)})
    const customIntervalObservable = new Observable((observer) => {
      let counter = 0;
      setInterval(() => {
          observer.next(counter);
          counter++;
          // if (counter == 10) {
          //   observer.complete()
          // }
          // or use unsubscribe

          if (counter == 7) {
            observer.error(new Error("Your Time is UP"));
          }
        },
        1000)
    })


    this.firstOBS =  customIntervalObservable.pipe(filter((data:number) => {return data%2 != 0}),map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe((data) => {
      console.log(data)
    }, error => alert(error), () => console.log('completed !'))
  }

  ngOnDestroy() {
    // this.firstOBS.unsubscribe(); //dont need on complete
  }
}
