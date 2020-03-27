import { Component, OnInit } from '@angular/core';
import { BSGlobals } from 'src/app/core/services/bsglobals';
import { MenuItem } from 'src/app/core/models';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
   menuItems: MenuItem[] = [];
   headline: string;
   subheadline: string;
   constructor(public readonly bsGlobals: BSGlobals) {

   }
   ngOnInit(): void {
      this.observeHeadlines();
      this.observeNavigation();
   }
   observeNavigation() {
      this.bsGlobals.navigation.globalNavigation.subscribe(menuItems => {
         this.menuItems = menuItems;
       });
   }
   observeHeadlines() {
      this.bsGlobals.headline.subscribe(headline => {
         this.headline = headline;
      });
      this.bsGlobals.subheadline.subscribe(subheadline => {
         this.subheadline = subheadline;
      });
   }

}
