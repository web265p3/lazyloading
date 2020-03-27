import { Component } from '@angular/core';
import { BSGlobals } from './core/services/bsglobals';
import { globalNavigation } from './presentation/global-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'BasicSource';
   constructor(bsGlobals: BSGlobals) {
      bsGlobals.navigation.updateGlobal(globalNavigation);
   }
}
