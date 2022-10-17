import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { RatingComponent } from './Components/rating/rating.component';
import { EventBindingComponent } from './BindingConcepts/event-binding/event-binding.component';
import { StyleBindingComponent } from './BindingConcepts/style-binding/style-binding.component';
import { PropertybindingComponent } from './BindingConcepts/propertybinding/propertybinding.component';
import { FormsModule } from '@angular/forms';
import { TowwayBindingComponent } from './BindingConcepts/towway-binding/towway-binding.component';
import { PipconceptsComponent } from './Pipes/pipconcepts/pipconcepts.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    RatingComponent,
    EventBindingComponent,
    StyleBindingComponent,
    PropertybindingComponent,
    TowwayBindingComponent,
    PipconceptsComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
