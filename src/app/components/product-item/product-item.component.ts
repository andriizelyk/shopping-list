import { Component, input, output } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  product = input.required<ShoppingItem>();
  productToggled = output<ShoppingItem>();
  productCountChanged = output<ShoppingItem>();

  toggle() {
    this.productToggled.emit(this.product());
  }

  countUpdated(count: number) {
    const prod = {...this.product(), count : count} as ShoppingItem;
    this.productCountChanged.emit(prod);
  }

  increase() {
    this.countUpdated(this.product().count + 1);
  }

  decrease() {
    this.countUpdated(this.product().count - 1 === 0 ? 1 : this.product().count - 1);
  }
}
