import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { ERPGroupsRoutingModule } from './erp-groups-routing.module';

@NgModule({
  declarations: [ListGroupsComponent],
  imports: [
    CommonModule,
    ERPGroupsRoutingModule
  ]
})
export class ERPGroupsModule { }
