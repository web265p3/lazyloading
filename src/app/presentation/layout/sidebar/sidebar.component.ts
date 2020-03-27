import { Component, OnInit } from '@angular/core';
import { BSGlobals } from 'src/app/core/services/bsglobals';
import { MenuItem } from 'src/app/core/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   menuItems: MenuItem[] = [];
   constructor(public readonly bsGlobals: BSGlobals) {
      bsGlobals.navigation.sideNavigation.subscribe(menuItems => {
         this.menuItems = menuItems;
      });
   }

  ngOnInit(): void {
  }

}
