import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { GameComponent } from './game/game.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TimelineNewComponent } from './timeline-new/timeline-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineListComponent,
    GameComponent,
    EditComponent,
    TimelineNewComponent
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
      {path: 'edit/:id', component: EditComponent},
      {path: 'timeline-new', component: TimelineNewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
