document.addEventListener("DOMContentLoaded", () => {
    let cart = new Cart();
    let items = cart.getCartItems();
    let priceArr = [];

    for (let i = 0; i < items.length; i++) {
        priceArr.push(items[i].price);
    }
    cart.totalPrice(priceArr);
    for (let i = 0; i < items.length; i++) {
       cart.createList(i);
    }
    cart.removeFromCart();
});