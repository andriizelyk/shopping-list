import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { ShoppingItem } from '../../models/shopping-item';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products = signal<ShoppingItem[]>([]);

  ngOnInit() {
    this.products.set(this.productService.products());
  }

  getCategories() : string[] {
    return this.products().reduce((categories, product) => {
      if (!categories.includes(product.category)) categories.push(product.category);
      return categories;
  }, [] as string[]);
  }

  getProducts(category : string) : ShoppingItem[] {
    return this.products().filter(p => p.category === category);
  }

  toggleProduct(product: ShoppingItem){
    this.products.update((list)=> {
      return list.map(p => {
        if (p.name === product.name)
          return {
                    ...p, 
                    checked : !p.checked, 
                    count : p.checked ? 0 : 1 //if unchecked then count = 0, else count = 1
                  };

        return p;
      });
    });
  }

  countProductUpdate(product: ShoppingItem) {
    this.products.update((list)=> {
      return list.map(p => {
        if (p.name === product.name)
          return {
                    ...p, 
                    count: product.count
                  };

        return p;
      });
    });
  }

  async getList() {
    const final = this.products().filter(p => p.checked);
    const categories = final.reduce((categories, product) => {
      if (!categories.includes(product.category)) categories.push(product.category);
        return categories;
    }, [] as string[]);

    let result = '';

    categories.forEach(category => {
      result = `${result} \n --- ${category} --- \n`;

      final.filter(p => p.category === category).forEach(product => {
        result = `${result}\n${product.emojy}${product.name} - ${product.count}`
      });
    });

    await navigator.clipboard.writeText(result);
  }

  constructor(public productService : ProductService) {}

}
