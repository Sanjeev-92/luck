import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model'
import { User } from '../../models/game.model'
import {common} from '../../models/game.model'

@Component({
  selector: 'app-luck-based-game',
  templateUrl: './luck-based-game.component.html',
  styleUrls: ['./luck-based-game.component.scss']
})
export class LuckBasedGameComponent implements OnInit {
  gameModel = new Game(this.getRandonNumbers(12), this.getRandonNumbers(12).length); // declaring Number array
  payer_1 = new User('Player 1', 1, 0, false,[]);
  payer_2 = new User('Player 2', 2, 0, false,[]);
  shared = new common('');
  constructor() { }

  ngOnInit() {
   
  }
  restartGame(){ // Restart game method
    this.gameModel = new Game(this.getRandonNumbers(12), this.getRandonNumbers(12).length);
    this.payer_1 = new User('Player 1', 1, 0, false,[]);
    this.payer_2 = new User('Player 2', 2, 0, false,[]);
  }
  getRandonNumbers(limit: number) { //  generating random number based on limit
    return Array.from({ length: limit }, () => Math.floor(Math.random() * limit));
  }
  getScores(index:number,islast:boolean){ // number click handler
    if(index==0 || islast){ // condition will be satisfied if user click on 1 or last element of the Array
      if(this.payer_2.isDisabled == false && this.payer_1.isDisabled == false){  
        this.getFirstPlayer(islast);
    }else{
     this.addScores(islast);
    }
    }else{
        alert("you can only Select First or Last value")
    } 
  }
  getFirstPlayer(islast:boolean){ // get First player and their score , it'll called only one time
    let score=0;
      if(islast){
        score = this.gameModel.data.pop(); // Deleting last element 
        this.payer_1.score += score;
        this.player_oneChance();
      }else{
        score = this.gameModel.data.shift(); //  deleting last element 
        this.payer_1.score += score;
        this.player_oneChance();
      }
      this.payer_1.scores.push(score);
  }
  addScores(islast:boolean){
    let score=0;
    if(!this.payer_1.isDisabled){ // If player 1 chance is active
      if(islast){
        score = this.gameModel.data.pop();
        this.payer_1.score += score
        this.player_oneChance();
        this.payer_1.scores.push(score);
      }else{
        score = this.gameModel.data.shift();
        this.payer_1.score += score
        this.player_oneChance();
        this.payer_1.scores.push(score);
      }
    }else if(!this.payer_2.isDisabled){ // If player 2 chance is active
      if(islast){
        score = this.gameModel.data.pop(); 
        this.payer_2.score += score
        this.player_twoChance();
        this.payer_2.scores.push(score);
      }else{
        score = this.gameModel.data.shift();
        this.payer_2.score += score
        this.player_twoChance();
        this.payer_2.scores.push(score);
      }
    }
    if(this.gameModel.data.length ==0){ // check who is winner
        this.takeDesion();
    }
  }
  takeDesion(){ // Dision maker block
    if(this.payer_1.score>this.payer_2.score){ // First player win
      this.shared.winnerMessage = `${this.payer_1.name} has win this round & score is  ${this.payer_1.score}`;
    }else if(this.payer_1.score == this.payer_2.score){ //  MATCH DRAWN
      this.shared.winnerMessage = `Match drawn. ${this.payer_1.name} score is ${this.payer_1.score},  and ${this.payer_2.name} score is ${this.payer_2.score}`;
    }else{ // Player two win
      this.shared.winnerMessage = `${this.payer_2.name} has win this round & score is  ${this.payer_2.score}`;
    }
    this.gameOver();
  }
  gameOver(){ // Game end 
    this.payer_1.isDisabled = true;
    this.payer_2.isDisabled = true;
  }
  player_oneChance(){ // enable disable player by chance
    this.payer_1.isDisabled = true;
    this.payer_2.isDisabled = false;
  }
  player_twoChance(){ // enable disable player by chance
    this.payer_2.isDisabled = true;
    this.payer_1.isDisabled = false;
  }
}
