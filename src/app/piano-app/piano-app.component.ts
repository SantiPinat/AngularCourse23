import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano-app',
  templateUrl: './piano-app.component.html',
  styleUrls: ['./piano-app.component.scss']
})
export class PianoAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  audio(number:number):void{


    const audio = new Audio();
    audio.src = '../assets/sound/note'+number+'.wav';
    audio.load();
    audio.play()
/*       .then(() => {
      // Audio is playing.
    })
    .catch(error => {
      console.log(error);
    }); */
  }
}
