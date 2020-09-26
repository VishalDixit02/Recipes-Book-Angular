import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAdd() {
    const newName = this.nameInputRef.nativeElement.value;
    const newAmount = this.amountInputRef.nativeElement.value;
    const newItem = new Ingredient(newName, newAmount);
    this.slService.addIngredient(newItem);
  }

}
