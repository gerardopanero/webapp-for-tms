import { Component, OnInit, Input } from '@angular/core';
import { FDeS } from 'src/app/pages/home/models/fDeS';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaqFSService } from 'src/app/services/maq-fs.service';


@Component({
  selector: 'app-fdes',
  templateUrl: './fdes.component.html',
  styleUrls: ['./fdes.component.css']
})

export class FdesComponent implements OnInit {

  maq = '';
slotFDeS: FDeS[] = [];
 /*  slotFS: any = []; */
maquina: string = '';
maquinaValida: boolean = false;
  indice: string = '';
  subindice: string = '';
  indiceTwo: string = '';
  slot: string = '';
listadoDeMAquinas: string[] = ['13504', '13505', '13512', '13516', '13521', '13524', '13525', '13526',
                               '13527', '13533', '13534', '13535', '13536', '13543', '13557', '13558',
                               '13560', '13561', '13565', '13567', '13578', '13582', '13600', '13604',
                               '13614', '13615', '13617', '13619', '13620', '13623', '13628', '13630',
                               '13644', '13650', '13669', '13681', '13692', '13700', '13725', '13727',
                               '13741', '13742', '13744', '13752', '13758', '13764', '13771', '13772',
                               '13805', '13806', '13807', '13814', '13815', '13825', '13840', '13860',
                               '13861', '13877', '13883', '13885', '13889', '13891', '13901', '13930',
                               '13943', '13947', '13948', '13959', '13960', '13961', '13968', '13969',
                               '13970', '13974', '13979', '14000', '14108', '14142', '14152', '14199',
                               '14200', '14244', '14274', '14343', '14354', '14407', '14416', '14418',
                               '14449', '14453', '14464', '14469', '14472', '14482', '14522', '14578',
                               '14586', '14587', '14590', '14592', '14593', '14608', '14714', '14719',
                               '14720', '14722', '16424', '16457', '16473', '16489', '16496', '16506',
                               '16508', '16524', '16539', '16545', '16558', '16561', '16565', '16572',
                               '16588', '16590', '16612', '23265', '23266', '23269', '23271', '23272',
                               '23277', '23278', '23283', '23285', '23286', '23300', '23303', '23314',
                               '23316', '23323', '23324', '23329', '23345', '23350', '23353', '23356',
                               '23365', '23367', '23375', '23376', '23387', '23389', '23390', '23396',  
                               '23398', '23400', '23406', '23412', '23425', '23432', '23433', '23449',  
                               '23450', '23452', '23459', '23463', '23465', '23473', '23476', '23477',  
                               '23478', '23479', '23482', '23483', '23486', '23490', '23498', '23499',  
                               '23507', '23515', '23516', '23524', '23601', '23605', '23675', '23676',  
                               '23716', '23719', '23722', '23730', '23759', '23761', '23765', '23779',  
                               '23780', '23789', '23792', '23802', '23803', '23815', '23826', '23827',  
                               '34507', '34512', '34524', '34528', '34540', '34545', '34557', '34563',  
                               '34564', '34578', '34589', '34676', '34677', '34680', '34682', '34688',  
                               '34710', '34712', '34713', '34725', '34738', '34760', '34775', '34776',  
                               '34780', '34946', '34947', '34948', '34949', '34950', '34951', '35252',  
                               '35254', '35255', '35273', '35274', '35275', '35295', '35314', '35402',  
                               '35403', '35404', '35405', '35408', '35409', '35410', '35411', '35412',  
                               '35510', '35511', '35512', '35513', '35514', '35535', '35536', '35537',  
                               '35538', '35539', '58401', '58402', '58403', '58404', '58405', '58406',  
                               '58407', '58408', '58409', '58410', '58411', '58412', '65542', '65543',  
                               '65550', '65553', '65560', '65562', '65574', '65584', '65597', '65606',  
                               '65607', '65616', '65617', '65635', '65636', '69801', '69802', '69803',  
                               '69804', '69805', '69806', '69807', '69808', '70601', '70602', '70603',  
                               '70604', '70605', '70606', '70607', '70608', '72401', '72501', '72601',  
                               '72701', '72801', '72901', '77016', '77032', '77048', '77063', '77064',  
                               '77081', '77082', '77096', '77097', '77113', '77114', '77130', '77131',  
                               '77148', '77149', '77150', '77184', '77208', '77234', '77235', '77253',  
                               '77259', '77284', '77286', '78241', '78400', '78531', '78541'] 

  get maqFS(){
    return this.maqFSService.maqFS;
  }

  get maqES(){
    return this.maqFSService.maqES;
  }

  get slotFS(){
    return this.maqFSService.sloFS;
  }

  constructor(private maqFSService: MaqFSService){}

  ngOnInit(): void {
  }

  agregarMaqFS(maq: any){
    this.maquinaValida = false;

    console.log(maq)

    for (let i = 0; i < this.listadoDeMAquinas.length ; i++) {
      if (this.listadoDeMAquinas[i] === this.maq){
        this.indice = this.maq.slice(0, 1);
        this.subindice = this.maq.slice(1,5);
        this.indiceTwo = this.maq.slice(0,2);

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
          this.slot = ('SI' + this.maq);
        }
        else if (this.indiceTwo === '65'){
          this.slot = ('W' + this.subindice);
        }
        else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
            this.slot = ('IB' + this.maq);
        }
        else if (this.indiceTwo === '77'){
            this.slot = ('AI' + this.subindice);
        }
      
        /* this.slotFDeS.push(tareas);  */
        this.maqFSService.agregarMaqFS(maq);
        this.slotFS.push(this.slot); 
        this.maq = '';
        this.maquinaValida = true;

        console.log(this.slotFS)
      }
    }
    if(this.maquinaValida == false){
      this.maq = '';
      alert('maquina Invalida')
    }
    console.log(this.maqFS);
  }

  eliminarMaquina(i: number){
    this.maqFS.splice(i, 1);
    this.slotFS.splice(i, 1);
    this.maqES.push(i, 1); 

    console.log(this.maqES)
  }

  agregarMaquina(){}

}

/* ----------------------------------------------------------------------------------------- 
  agregarMaquina(){

    this.maquinaValida = false;

    const tareas: FDeS = {
      maquina: this.maquina,
      estadoFS: true,
    }
    
    for (let i = 0; i < this.listadoDeMAquinas.length ; i++) {
      if (this.listadoDeMAquinas[i] === this.maquina){
        console.log(this.maquina);
        this.indice = this.maquina.slice(0, 1);
        this.subindice = this.maquina.slice(1,5);
        this.indiceTwo = this.maquina.slice(0,2);

        if (this.indice === '1'){
          this.slot = ('I' + this.subindice);
          console.log(this.slot);
        }
        else if (this.indice === '2'){
          this.slot = ('A' + this.subindice);
        }
        else if (this.indice === '3'){
          this.slot = ('B' + this.subindice);
        }
        else if (this.indice === '5'){
          this.slot = ('SI' + this.maquina);
        }
        else if (this.indiceTwo === '65'){
          this.slot = ('W' + this.subindice);
        }
        else if (this.indiceTwo === '69' || this.indiceTwo === '70' || this.indiceTwo === '72' || this.indiceTwo === '78'){
            this.slot = ('IB' + this.maquina);
        }
        else if (this.indiceTwo === '77'){
            this.slot = ('AI' + this.subindice);
        }
        
        this.slotFDeS.push(tareas); 
        this.slotFS.push(this.slot); 
        this.maquina = '';
        this.maquinaValida = true;
      }   
    }
    if(this.maquinaValida == false){
      this.maquina = '';
      alert('maquina Invalida')
    }
    console.log(this.slotFS);
  }
 ------------------------------------------------------------------------------------------------
  eliminarMaquina(i: number){
    this.maqFS.splice(i, 1);
  }

  ReadExcel(){}
}




/* import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fdes',
  templateUrl: './fdes.component.html' ,
  styleUrls: ['./fdes.component.css']
})

export class FdesComponent {


  ReadExcel(){}
} */
