import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListGroupsComponent } from './list-groups/list-groups.component';

@NgModule({
   imports: [RouterModule.forChild([
       {
           path: '',
           component : ListGroupsComponent
       }
   ])
   ],
   exports: [RouterModule],
   providers: []
})
export class ERPGroupsRoutingModule {


}
