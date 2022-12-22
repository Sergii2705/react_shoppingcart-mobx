import { observable } from 'mobx';
import { PRODUCTS_MAP, ShoppingCartItem, TypeBasket } from '../modules/shopping-cart/modules/'

const store = observable({
  basket: {} as TypeBasket,

  addItem({ productId, quantity }: ShoppingCartItem):void {
    // if (productId in this.basket) {
    //   this.basket[productId] += quantity;
    // } else {
    //   this.basket[productId] = quantity;
    // }
    this.basket[productId] = productId in this.basket
      ? this.basket[productId] + quantity
      : quantity;
  },
    
  deleteItem(productId: string) {
    delete this.basket[productId];
  },

  increaseItem(productId: string) {
    this.basket[productId]++; 
  }, 

  decreaseItem(productId: string) {
    if (this.basket[productId] > 1) {
      this.basket[productId]--;
    } else {
      delete this.basket[productId];
    }
  },

  clearAll() {
    this.basket = {} as TypeBasket;
  },

  get total() {
    // return this.basket.reduce((acc: number, item: ShoppingCartItem) => acc + item.quantity * PRODUCTS_MAP[item.productId].price, 0);
    return Object.keys(this.basket).reduce((acc: number, key: string) => acc + this.basket[key] * PRODUCTS_MAP[key].price, 0)
  }, 
});

export default store;