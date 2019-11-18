import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCardModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatMenuModule, MatTableModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LanguageDetectorComponent } from './language-detector/language-detector.component';
import {MatIconModule} from '@angular/material/icon';

const appRoutes: Routes = [{
  path: '',                     //default component to display
  component: LanguageDetectorComponent
},

{
  path: 'language-detector',
  component: LanguageDetectorComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LanguageDetectorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
