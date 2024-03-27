import { Component, OnInit } from '@angular/core';
import ChessCase from './chess-case';
import CHESSBOARDCASES from './chess-case-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  chessBoard: ChessCase[] = CHESSBOARDCASES;
  chessBoardCaseSelected: ChessCase | undefined;


  title = 'ChessApp';

  ngOnInit(): void {
  
    console.log("ciao Angelo");
  }

  selectChessBoardCase(chessBoard: string){

    const chessboardCase: ChessCase | undefined =
     this.chessBoard.find(chessboardCase => chessboardCase.id )
    if(chessboardCase){
      console.log(`vous avez cliqué sur la case ${chessboardCase.x}${chessboardCase.y}`)
      this.chessBoardCaseSelected = chessboardCase;
    }else{
      console.log(`vous avez domandato un cheaseboard case che non esiste`)
      this.chessBoardCaseSelected = chessboardCase;

    }

  }



}
