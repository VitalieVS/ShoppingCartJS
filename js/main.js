class Cart {
    constructor() {
        this.cart = [];
        this.data = {};
    }

    addToCart(item) {
        this.data = {};
        this.data.itemName = item[0];
        this.data.price = item[1];
        this.data.quantity = item[2];
        this.cart.push(this.data);
        this.addLocalStorage(this.cart);
    }

    addLocalStorage(cart) {
        window.localStorage.setItem('item', JSON.stringify(cart));
    }

    removeFromCart() {

    }
}