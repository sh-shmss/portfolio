import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCardModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatMenuModule, MatIconModule, MatTableModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
    MatInputModule, MatButtonModule, MatMenuModule, MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    // EventformComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
