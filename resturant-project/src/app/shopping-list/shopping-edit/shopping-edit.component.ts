import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingForm: FormGroup;
  subscriptions: Subscription;
  editMode = false;
  editItemIndex: number;
  editIngredient: Ingredients;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [
        Validators.required,
        this.forbiddenAmount.bind(this),
      ]),
    });

    this.subscriptions = this.shoppingListService.startedEditing.subscribe(
      (val: number) => {
        this.editMode = true;
        this.editItemIndex = val;
        this.editIngredient = this.shoppingListService.getIngredient(val);
        this.shoppingForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount,
        });
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      const newIngredient = new Ingredients(
        this.shoppingForm.get('name').value,
        this.shoppingForm.get('amount').value
      );
      console.log(this.editIngredient.amount);
      this.shoppingListService.updateIngredient(
        this.editItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(
        new Ingredients(
          this.shoppingForm.get('name').value,
          this.shoppingForm.get('amount').value
        )
      );
    }
    this.shoppingForm.reset();
    this.editMode = false;
  }

  forbiddenAmount(control: FormControl): { [s: string]: boolean } {
    if (control.value < 1) {
      return {
        negative: true,
      };
    }
    return null;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onClearForm() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClearForm();
  }
}
