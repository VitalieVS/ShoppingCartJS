document.addEventListener("DOMContentLoaded", () => {
    const cart = new Cart();
    let items = cart.getCartItems();

    for (let i = 0; i < items.length; i++) {
       cart.createList(i);
    }
    cart.removeFromCart();
});