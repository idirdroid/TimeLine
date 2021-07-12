import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { GameComponent } from './game/game.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TimelineListComponent,
    GameComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: TimelineListComponent},
      {path: 'timeline', component: TimelineListComponent},
      {path: 'timeline/:id', component: TimelineListComponent},
      {path: 'game/:id', component: GameComponent},
      {path: 'edit/:id', component: EditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
