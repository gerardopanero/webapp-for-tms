import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaqFSService {

  private _maqFS = [];
  private _maqES = [];
  private _slotFS = [];
  private _win0 = [];
  private _bill0 = [];
  private _tito0 = [];
  private _rankMin4 = [];
  private _rankMin3 = [];
  private _rankMin2 = [];
  private _rankMin1 = [];
  private _rankMax4 = [];
  private _rankMax3 = [];
  private _rankMax2 = [];
  private _rankMax1 = [];


  get maqFS(){
    return this._maqFS;
  }

  get maqES(){
    return this._maqES;
  }

  get sloFS(){
    return this._slotFS;
  }

  get win0(){
    return this._win0;
  }

  get bill0(){
    return this._bill0;
  }

  get tito0(){
    return this._tito0;
  }

  get rankMin4(){
    return this._rankMin4;
  }

  get rankMin3(){
    return this._rankMin3;
  }

  get rankMin2(){
    return this._rankMin2;
  }

  get rankMin1(){
    return this._rankMin1;
  }

  get rankMax4(){
    return this._rankMax4;
  }

  get rankMax3(){
    return this._rankMax3;
  }

  get rankMax2(){
    return this._rankMax2;
  }

  get rankMax1(){
    return this._rankMax1;
  }

  constructor() { }

  agregarMaqFS(maq){
    this._maqFS.push(maq)
  }

  agregarMaqES(maqES){
    this._maqES.push(maqES)
  }

}
