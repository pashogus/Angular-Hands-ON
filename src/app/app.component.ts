import { Component,Input } from '@angular/core';
import { shoppingListService } from './shared/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[shoppingListService]
})
export class AppComponent {
  title = 'palaninathan-app-learn';

  selectedValueString :String;

  clickedselected(selectedString: String)
  {
this.selectedValueString = selectedString;
console.log("selected value",this.selectedValueString);
  }


}
