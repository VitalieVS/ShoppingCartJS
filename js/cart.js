document.addEventListener("DOMContentLoaded", () => {
    let cart = new Cart();
    let items = cart.getCartItems();

    for (let i = 0; i < items.length; i++) {
       cart.createList(i);
    }

});