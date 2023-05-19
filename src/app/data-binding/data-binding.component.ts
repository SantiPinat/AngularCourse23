import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  nombreCurso = 'Angular Piolita';
  txtPH = 'Nuevo Placeholder';
  deshab=true;
  imgSrc='https://www.chiapasparalelo.com/wp-content/uploads/2016/09/IMG_9506-300x225.jpg';
  display='d-none';
  num = 0;
  txt = 'Aca se va a modificar con event binding';
  texto = '';

  cambiarTexto() :void{
    this.txt = "Evento (click) modifico el texto"
  }



  getSuma(n1:number, n2:number){
    return n1 + n2;
  }

  sumarUno(){
    console.log(this.num + ": Este es el num")
    return this.num + 1;
  }

  restarUno(): void{
    this.num - 1;
    console.log(this.num + ": Este es el num")
  }

  constructor(){
    setInterval(()=>this.nombreCurso = 'El que espera tiene recompensa', 5000);
    setInterval(()=>this.deshab = false, 10000);
    setInterval(()=>this.txtPH = 'Placeholder habilitado', 11000);
    setInterval(()=>this.display = 'd-inline', 5000);
  }

  ngOnInit(): void {
  }

}
