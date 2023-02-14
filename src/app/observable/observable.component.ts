import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    // promise.then(result=>console.log(result));
    const observable= new Observable(res=>{
      setTimeout(() => {
        res.next("observable working");
        res.next("observable working1");
        res.next("observable working2");
        res.next("observable working3");


      }, 1000);
    });
    observable.subscribe(res=> console.log(res));

  }


}
