document.addEventListener("DOMContentLoaded", newChild => {
    let items = localStorage.getItem('item');
    const ul = document.getElementById('items');
    items = JSON.parse(items);
    console.log(items);

    for (let i = 0; i < items.length; i++) {
        let itemNameLi = document.createElement('li');
        let priceLi = document.createElement('li');
        let quantityLi = document.createElement('li');
        itemNameLi.appendChild(document.createTextNode(items[i].itemName));
        priceLi.appendChild(document.createTextNode(items[i].price));
        quantityLi.appendChild(document.createTextNode(items[i].quantity));

        ul.appendChild(itemNameLi);
        ul.appendChild(priceLi);
        ul.appendChild(quantityLi);
    }
});