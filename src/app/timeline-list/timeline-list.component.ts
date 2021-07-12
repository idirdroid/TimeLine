import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";


@Component({
  selector: 'app-timline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent implements OnInit {

timeLineList = this.gameService.getGames();



  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    console.log('TimeList: ' + this.timeLineList)
  }

}
