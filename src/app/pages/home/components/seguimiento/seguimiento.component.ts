import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { Excel } from '../../models/excel';
import readXlsxFile from 'read-excel-file'
import { MaqFSService } from 'src/app/services/maq-fs.service';
import { empty } from 'rxjs';


@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html'
    
  ,
  styles: [
  ]
})

export class SeguimientoComponent {

    indice: string = '';
    subindice: string = '';
    indiceTwo: string = '';
    slot: string = '';
    array: any = [];
    win00: any = [];

    winCero: any = [];
    billCero: any = [];
    titoCero: any = [];

    /* rankMenos4: any = [];
    rankMenos3: any = [];
    rankMenos2: any = [];
    rankMenos1: any = [];
    rankMas4: any = [];
    rankMas3: any = [];
    rankMas2: any = [];
    rankMas1: any = []; */


  
    get win0(){
        return this.maqFSService.win0;
      }

    get bill0(){
        return this.maqFSService.bill0;
    }

    get tito0(){
      return this.maqFSService.tito0;
    }

    get rankMin4(){
      return this.maqFSService.rankMin4;
    }

  get rankMin3(){
      return this.maqFSService.rankMin3;
  }

  get rankMin2(){
    return this.maqFSService.rankMin2;
  }

  get rankMin1(){
    return this.maqFSService.rankMin1;
  }

get rankMax1(){
    return this.maqFSService.rankMax1;
}

get rankMax2(){
  return this.maqFSService.rankMax2;
}

get rankMax3(){
  return this.maqFSService.rankMax3;
}

get rankMax4(){
  return this.maqFSService.rankMax4;
}




    constructor(private maqFSService: MaqFSService){
  
    }
  
    ReadExcel(event: any){
  
      let file = event.target.files[0];  //ya tenemos el archivo (es un objeto)
      let fileReader = new FileReader();  //FileReader es una funcion de la libreria 
      fileReader.readAsBinaryString(file); //Comienza la lectura del contenido del objeto, una vez terminada, el atributo result contiene los datos binarios en bruto del archivo como una cadena.
      fileReader.onload = (e) =>{
        var workBook = XLSX.read(fileReader.result,{type: 'binary'});
        var sheetNames = workBook.SheetNames;
        let excelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]); //sheetName es la pagina del excel
        let fila2 = JSON.stringify(excelData);  //Esto lo hacemos para detectar el nombre de la primer columna que es que tiene el numero de maquinas
        let  col0 = fila2.slice(3, 22); 
        
        console.log(excelData[391]["__EMPTY_1"])
        let jugadasPromedio = Math.round(excelData[391]["__EMPTY_1"]/335);

        console.log(jugadasPromedio);



        for (let i = 0; i < excelData.length ; i++) {
            if (excelData[i]["__EMPTY_5"] == 0 && excelData[i]["__EMPTY_9"] == 0){

                let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.win0.push(this.slot);
              }
            } 
        //console.log(this.win0);


        
            
            

        for (let i = 0; i < excelData.length ; i++) {
            if (excelData[i]["__EMPTY_5"] == 0 && !(excelData[i]["__EMPTY_5"] == 0 && excelData[i]["__EMPTY_9"] == 0)){
                this.billCero.push(excelData[i][col0]); 
            
                let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.bill0.push(this.slot);

            
            } 
        }

        for (let i = 0; i < excelData.length ; i++) {
            if (excelData[i]["__EMPTY_9"] == 0 && !(excelData[i]["__EMPTY_9"] == 0 && excelData[i]["__EMPTY_5"] == 0)){
                this.titoCero.push(excelData[i][col0]); 

                let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.tito0.push(this.slot);
            } 
        }
// Control de temperatura de sala
      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio == 0){
//          this.rankMenos4.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.rankMin4.push(this.slot);
        }  
      }

      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio > 0 && excelData[i]["__EMPTY_1"] / jugadasPromedio <= 0.1 ){
//          this.rankMenos3.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.rankMin3.push(this.slot);
        }  
      }

      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio > 0.1 && excelData[i]["__EMPTY_1"] / jugadasPromedio <= 0.2 ){
        //  this.rankMenos2.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

          this.indice = maq.slice(0, 1);
          this.subindice = maq.slice(1,5);
          this.indiceTwo = maq.slice(0,2);
  
          if (this.indice === '1'){
            this.slot = ('I' + this.subindice);
          }
          else if (this.indice === '2'){
            this.slot = ('A' + this.subindice);
          }
          else if (this.indice === '3'){
            this.slot = ('B' + this.subindice);
          }
          else if (this.indice === '5'){
            this.slot = ('SI' + maq);
          }
          else if (this.indiceTwo === '65'){
            this.slot = ('W' + this.subindice);
          }
          else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
              this.slot = ('IB' + maq);
          }
          else if (this.indiceTwo === '77'){
              this.slot = ('AI' + this.subindice);
          }
          this.rankMin2.push(this.slot);
        }  
      }
      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio > 0.2 && excelData[i]["__EMPTY_1"] / jugadasPromedio <= 0.35 ){
         // this.rankMenos1.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.rankMin1.push(this.slot);
        }  
      }
      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio > 1.5 && excelData[i]["__EMPTY_1"] / jugadasPromedio <= 2 ){
        //  this.rankMas1.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.rankMax1.push(this.slot);
        }  
      }
      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio > 2 && excelData[i]["__EMPTY_1"] / jugadasPromedio <= 2.75 ){
      //    this.rankMas2.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.rankMax2.push(this.slot);
        }  
      }
      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio > 2.75 && excelData[i]["__EMPTY_1"] / jugadasPromedio <= 4 ){
//          this.rankMas3.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.rankMax3.push(this.slot);
        }  
      }
      for (let i = 0; i < excelData.length ; i++) {
        if (excelData[i]["__EMPTY_1"] / jugadasPromedio > 4 && excelData[i]["__EMPTY_1"] / jugadasPromedio <= 334){
        //  this.rankMas4.push(excelData[i][col0]);

          let maq = excelData[i][col0].toString();

                this.indice = maq.slice(0, 1);
                this.subindice = maq.slice(1,5);
                this.indiceTwo = maq.slice(0,2);
        
                if (this.indice === '1'){
                  this.slot = ('I' + this.subindice);
                }
                else if (this.indice === '2'){
                  this.slot = ('A' + this.subindice);
                }
                else if (this.indice === '3'){
                  this.slot = ('B' + this.subindice);
                }
                else if (this.indice === '5'){
                  this.slot = ('SI' + maq);
                }
                else if (this.indiceTwo === '65'){
                  this.slot = ('W' + this.subindice);
                }
                else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
                    this.slot = ('IB' + maq);
                }
                else if (this.indiceTwo === '77'){
                    this.slot = ('AI' + this.subindice);
                }
                this.rankMax4.push(this.slot);
        }  
      }
      



    }
    }

    
               
}



    
  
  
     
  
  
  
  
  


