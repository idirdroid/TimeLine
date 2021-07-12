import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {TimeLine} from "../time-line";

@Component({
  selector: 'app-timeline-new',
  templateUrl: './timeline-new.component.html',
  styleUrls: ['./timeline-new.component.css']
})
export class TimelineNewComponent implements OnInit {

  //timeLine : TimeLine | undefined;

  constructor(private serviceTimeLine : GameService,
              private http: HttpClientModule,
              private formBuilder: FormBuilder) { }

  timeLineForm = this.formBuilder.group({
    name: '',
    category: '',
    creationDate: ''
  })

  ngOnInit(): void {
  }

  newTimeLine(){
    let timeLine : any = {};

    timeLine.name = this.timeLineForm.get('name')?.value;
    timeLine.category = this.timeLineForm.get('category')?.value;
    timeLine.creationDate = this.timeLineForm.get('creationDate')?.value;
    console.log(timeLine)

  }

}
