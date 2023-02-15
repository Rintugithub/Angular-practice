import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let promise = new Promise((res,rej)=>{
       setTimeout(() => {
      // res("promise working");
      rej("failed");
      }, 1000);

    });
    const val=async()=>{
      try{
        let data = await promise;
        console.log(data);
      }catch(error){
        console.log(error);


      }


    }
    val();
    // promise.then(result=>console.log(result)).catch(error=>console.log(error));
    const observable= new Observable(res=>{
      setTimeout(() => {
        res.next("observable working");
        res.next("observable working1");
        res.next("observable working2");
        res.next("observable working3");


      }, 1000);
    });
    observable.subscribe(res=> console.log(res));
    // rxjs subject
    const subject = new Subject();
    // sub1
    subject.subscribe(d=>console.log(d));
    // sub2
    subject.subscribe(d=>console.log(d));
    subject.next(Math.random());
    const subject1 = new Subject();

    const data = ajax("https://jsonplaceholder.typicode.com/users");
    subject1.subscribe(data=>console.log(data));
    subject1.subscribe(data=>console.log(data));
    const result = data.subscribe(subject1);
    // rxjs behaviour subject
    const bsubject = new BehaviorSubject<number>(12);
     bsubject.subscribe(datas=>console.log(`behaviour subject value1 ${datas}`));
     bsubject.next(200);
     bsubject.subscribe(datas=>console.log(`behaviour subject value1 ${datas}`));



  }


}
