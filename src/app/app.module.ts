import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { DirectivesDirective } from './directive/directives.directive';
import { HighlightDirective } from './highlight.directive';
import { PipesPipe } from './pipe/pipes.pipe';
import { DataserviceService } from './service/dataservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ChildComponent,
    DirectivesDirective,
    HighlightDirective,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
