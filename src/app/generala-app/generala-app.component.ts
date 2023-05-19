import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generala-app',
  templateUrl: './generala-app.component.html',
  styleUrls: ['./generala-app.component.scss'],
})
export class GeneralaAppComponent implements OnInit {
  constructor() {}
  dices: any = [
    { id: 1, imgSrc: '../assets/img/dice1.jpg', selected: false },
    { id: 2, imgSrc: '../assets/img/dice2.jpg', selected: false },
    { id: 3, imgSrc: '../assets/img/dice3.jpg', selected: false },
    { id: 4, imgSrc: '../assets/img/dice4.jpg', selected: false },
    { id: 5, imgSrc: '../assets/img/dice5.jpg', selected: false },
  ];

  number1 = 0;
  number2 = 0;
  number3 = 0;
  number4 = 0;
  number5 = 0;

  playMsg = '';

  number0: any = 0;

  selectedDice() {}

  rollDices(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;
    this.number3 = Math.round(Math.random() * 5) + 1;
    this.number4 = Math.round(Math.random() * 5) + 1;
    this.number5 = Math.round(Math.random() * 5) + 1;

    /*     this.dices.imgSrc = '../assets/img/dice' + this.number1 + '.jpg' */

    console.log(
      this.number1 +
        ' ' +
        this.number2 +
        ' ' +
        this.number3 +
        ' ' +
        this.number4 +
        ' ' +
        this.number5 +
        ' 5 Dados tiraos'
    );

    /*    audio.src = '../assets/sound/note'+number1+'.wav';
       .then(() => {
      // Audio is playing.
    })
    .catch(error => {
      console.log(error);
    }); */
  }
  ngOnInit(): void {}
}
