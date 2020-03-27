import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [],
  imports: [
      CoreModule,
      PresentationModule
  ],
})
export class PortalModule { }
