import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BSGlobals } from '../core/services/bsglobals';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './root-components/home/home.component';
import { AboutComponent } from './root-components/about/about.component';
import { AppsComponent } from './root-components/apps/apps.component';
import { GroupsComponent } from './root-components/groups/groups.component';
import { ErrorComponent } from './root-components/error/error.component';

@NgModule({
  declarations: [TopbarComponent,
                 SidebarComponent,
                 FooterComponent,
                 HomeComponent,
                 AboutComponent,
                 AppsComponent,
                 GroupsComponent,
                 ErrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
   TopbarComponent,
   SidebarComponent,
   FooterComponent
  ],
  providers: [

  ]
})
export class PresentationModule { }
