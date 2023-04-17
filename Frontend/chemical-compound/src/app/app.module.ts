import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChemicalCardComponent } from './components/chemical-card/chemical-card.component';
import { ChemicalCompoundDetailsComponent } from './components/chemical-compound-details/chemical-compound-details.component';
import { ChemicalComponent } from './components/chemical/chemical.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './module/materail.module';
import { HeaderComponent } from './components/header/header.component';
import { CustomdatePipe } from './pipe/customdate.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ChemicalCardComponent,
    ChemicalCompoundDetailsComponent,
    ChemicalComponent,
    HeaderComponent,
    CustomdatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
