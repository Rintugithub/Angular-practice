import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    // .catchError((error))=>{
    //   return Observable.throw(error);
    }
    getuser(id:number){
      return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
    }
  }

