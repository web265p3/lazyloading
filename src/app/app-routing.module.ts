import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './presentation/root-components/home/home.component';
import { AboutComponent } from './presentation/root-components/about/about.component';
import { GroupsComponent } from './presentation/root-components/groups/groups.component';
import { AppsComponent } from './presentation/root-components/apps/apps.component';
import { ErrorComponent } from './presentation/root-components/error/error.component';

const routes: Routes = [ {
   path: 'home',
   pathMatch: 'full',
   redirectTo: 'home/start'
}, {
   path: 'home/start',
   component: HomeComponent
}, {
   path: 'home/about',
   component: AboutComponent
}, {
   path: 'groups',
   pathMatch: 'full',
   redirectTo: 'groups/start'
}, {
   path: 'groups/start',
   component: GroupsComponent
}, {
   path: 'apps',
   pathMatch: 'full',
   component: AppsComponent
}, {
   path: 'groups/manual-groups',
   pathMatch: 'prefix',
   loadChildren: () => import('./apps/manual-groups/manual-groups.module').then(m => m.ManualGroupsModule)
}/*, {
   path: '',
   pathMatch: 'full',
   redirectTo: 'home/start'
}*/, {
    path: '**',
    component: ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
