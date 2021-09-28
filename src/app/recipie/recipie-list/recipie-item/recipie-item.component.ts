import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() recipeslist :Recipe;

  constructor(private recipieservice: RecipieService) { }

  ngOnInit(): void {
    console.log(this.recipeslist)
  }

  recipieselected()
  {
this.recipieservice.selectedRecipie.emit(this.recipeslist);
  }

}
