import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationService } from './navigation.service';

@Injectable({providedIn: 'root'})
export class BSGlobals {
   headline = new BehaviorSubject<string>('BasicSource');
   subheadline = new BehaviorSubject<string>('');
   constructor(public navigation: NavigationService) {
      this.navigation = new NavigationService();
   }
   updateHeadline(title) {
      this.headline.next(title);
   }
   updateSubheadline(title) {
      this.subheadline.next(title);
   }
}
