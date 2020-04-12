import { APP_BASE_HREF } from '@angular/common';
import { GscService } from './services/gsc.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarStockComponent } from './components/car-stock/car-stock.component';
import { CarSalesComponent } from './components/car-sales/car-sales.component';
import { PlateChangerComponent } from './components/plate-changer/plate-changer.component';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './components/main/main.component';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { reducers } from './store/reducers/index'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarStockComponent,
    CarSalesComponent,
    PlateChangerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
    MatButtonToggleModule,
    DragDropModule,
    MatStepperModule,
    CdkStepperModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    // StoreModule.forRoot(reducers),
    // StoreDevtoolsModule.instrument()
  ],
  providers: [GscService,
  { provide: APP_BASE_HREF, useValue: "/"}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
