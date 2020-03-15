class Cart {
    constructor() {
        this.cart = [];
        this.data = {};
        this.price = [];
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

    getCartItems() {
        let items = localStorage.getItem('item');
        items = JSON.parse(items);
        return items;
    }

    createList(index) {
        const ul = document.getElementById('items');
        let itemNameLi = document.createElement('li');
        let priceLi = document.createElement('li');
        let quantityLi = document.createElement('li');
        this.price.push(this.getCartItems()[index].price * this.getCartItems()[index].quantity);
        itemNameLi.appendChild(document.createTextNode(this.getCartItems()[index].itemName));
        priceLi.appendChild(document.createTextNode(this.price[index]));
        quantityLi.appendChild(document.createTextNode(this.getCartItems()[index].quantity));
        quantityLi.innerHTML += ' <a class="remove"><i class="fas fa-times"></i></a>';
        ul.appendChild(itemNameLi);
        ul.appendChild(priceLi);
        ul.appendChild(quantityLi);
    }

    totalPrice() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.price.reduce(reducer);
    }

}