import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MenuItem } from '../models';

@Injectable({providedIn: 'root'})
export class NavigationService {
   globalNavigation = new BehaviorSubject<MenuItem[]>(null);
   sideNavigation = new BehaviorSubject<MenuItem[]>(null);
   updateGlobal(menuItems: MenuItem[]) {
      this.globalNavigation.next(menuItems);
   }
   updateSide(menuItems: MenuItem[]) {
      this.sideNavigation.next(menuItems);
   }
}
