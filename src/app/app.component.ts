import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularapp';
  nombreCurso = 'Angular Piolita';
  txtPH = 'Nuevo Placeholder';
  deshab=true;
  imgSrc='https://www.chiapasparalelo.com/wp-content/uploads/2016/09/IMG_9506-300x225.jpg';
  display='d-none';
  num = 0

  getSuma(n1:number, n2:number){
    return n1 + n2;
  }

  sumarUno(){
    return this.num + 1;
  }

  restarUno(){
    return this.num - 1;
  }

  constructor(){
    setInterval(()=>this.nombreCurso = 'El que espera tiene recompensa', 5000);
    setInterval(()=>this.deshab = false, 10000);
    setInterval(()=>this.txtPH = 'Placeholder habilitado', 11000)
    setInterval(()=>this.display = 'd-inline', 5000)
  }
}
