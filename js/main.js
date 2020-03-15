class Cart {
    constructor() {
        this.cart = [];
        this.data = {};
    }

    addToCart(item) {
        this.data.itemName = item[0];
        this.data.price = item[1];
        this.data.quantity = item[2];
        this.cart.push(this.data);
        this.addLocalStorage();
        let x = localStorage.getItem('item');
        console.log('retrievedObject: ', JSON.parse(x));
    }

    addLocalStorage(){
        window.localStorage.setItem('item', JSON.stringify(this.cart));
    }

    removeFromCart() {

    }
}