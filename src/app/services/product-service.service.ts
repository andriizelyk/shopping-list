import { Injectable, signal } from '@angular/core';
import { ShoppingItem } from '../models/shopping-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<ShoppingItem[]>([
    { name: "Ham", checked: false, category: "Meat", emojy: "🥩", count: 0 },
    { name: "Steak meat", checked: false, category: "Meat", emojy: "🥩", count: 0 },
    { name: "Oatmeal", checked: false, category: "Grains", emojy: "🌾", count: 0 },
    { name: "Buckwheat", checked: false, category: "Grains", emojy: "🌾", count: 0 },
    { name: "Bread", checked: false, category: "Bakery", emojy: "🍞", count: 0 },
    { name: "Coconut candies", checked: false, category: "Sweets", emojy: "🍬", count: 0 },
    { name: "M&M's Healthy", checked: false, category: "Sweets", emojy: "🍫", count: 0 },
    { name: "Milk", checked: false, category: "Dairy", emojy: "🥛", count: 0 },
    { name: "Butter", checked: false, category: "Dairy", emojy: "🧈", count: 0 },
    { name: "Salted butter", checked: false, category: "Dairy", emojy: "🧈", count: 0 },
    { name: "Yogurt", checked: false, category: "Dairy", emojy: "🥄", count: 0 },
    { name: "Swiss cheese", checked: false, category: "Dairy", emojy: "🧀", count: 0 },
    { name: "Parmesan", checked: false, category: "Dairy", emojy: "🧀", count: 0 },
    { name: "Eggs", checked: false, category: "Dairy", emojy: "🥚", count: 0 },
    { name: "Fish for salting", checked: false, category: "Seafood", emojy: "🐟", count: 0 },
    { name: "Shrimps", checked: false, category: "Seafood", emojy: "🦐", count: 0 },
    { name: "Salmon", checked: false, category: "Seafood", emojy: "🐟", count: 0 },
    { name: "Tilapia", checked: false, category: "Seafood", emojy: "🐟", count: 0 },
    { name: "Strawberries", checked: false, category: "Fruits & Berries", emojy: "🍓", count: 0 },
    { name: "Raspberries", checked: false, category: "Fruits & Berries", emojy: "🍇", count: 0 },
    { name: "Cherries", checked: false, category: "Fruits & Berries", emojy: "🍒", count: 0 },
    { name: "Oranges", checked: false, category: "Fruits & Berries", emojy: "🍊", count: 0 },
    { name: "Potatoes", checked: false, category: "Vegetables", emojy: "🥔", count: 0 },
    { name: "Carrot", checked: false, category: "Vegetables", emojy: "🥕", count: 0 },
    { name: "Bananas", checked: false, category: "Fruits & Berries", emojy: "🍌", count: 0 },
    { name: "Cucumbers", checked: false, category: "Vegetables", emojy: "🥒", count: 0 },
    { name: "Tomatoes", checked: false, category: "Vegetables", emojy: "🍅", count: 0 },
    { name: "Bell pepper", checked: false, category: "Vegetables", emojy: "🫑", count: 0 },
    { name: "Nuts", checked: false, category: "Snacks", emojy: "🥜", count: 0 },
    { name: "Walnuts", checked: false, category: "Snacks", emojy: "🌰", count: 0 }
]);

  constructor() { }
}
