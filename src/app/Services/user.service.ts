import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _Name:string="Kamran";
  private _Email:string="kamran@gmail.com";

  get userName():string{
    return this._Name
  }
  get userEmail():string{
    return this._Email
  }
  set userName(val:string){
    this._Name=val
  }
  set userEmail(val:string){
    this._Email=val
  }
  constructor() { }
}
