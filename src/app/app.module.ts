import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarContainerComponent } from './containers/car-container.component';
import { CarAppComponent } from './components/car-exchanger/car-exchanger.component';
import { PlateChangerAppComponent } from './components/plate-changer/plate-changer.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatCommonModule } from '@angular/material/MatCommonModule';


@NgModule({
  declarations: [
    AppComponent,
    CarContainerComponent,
    CarAppComponent,
    PlateChangerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
