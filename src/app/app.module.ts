import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';
import { BSGlobals } from './core/services/bsglobals';
import { NavigationService } from './core/services/navigation.service';
import { AgGridModule } from 'ag-grid-angular';
import { ShowManualGroupListUseCase } from './apps/manual-groups/core/use-cases/show-manual-groups.use-case';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    CoreModule,
    PresentationModule
  ],
  providers: [BSGlobals,
              NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
