class Cart {
    constructor() {
        this.cart = [];
        this.data = {};
        this.price = [];
    }

    startTimer(i) {
        let time = 3;
        let interval = setInterval(() => {
            if (time < 1) {
                buttonsList[i].style.display = 'block';
                addedList[i].style.display = 'none';
                spanList[i].innerHTML = '';
                let price = priceList[i].innerHTML;
                let rez = price.match(/\d/g).join('');
                this.addToCart([itemName[i].innerHTML, rez, inputList[i].value, itemName[i].id]);
                clearInterval(interval);
            } else {
                spanList[i].innerHTML = time.toString(10);
                time--;
            }
        }, 1000)
    }

    addToCart(item) {
        this.data = {};
        this.data.itemName = item[0];
        this.data.price = item[1];
        this.data.quantity = item[2];
        this.data.id = item[3];
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
        quantityLi.innerHTML += ` <a class="remove" id="${index}"><i class="fas fa-times"></i></a>`;
        ul.appendChild(itemNameLi);
        ul.appendChild(priceLi);
        ul.appendChild(quantityLi);
    }

    totalPrice(arr) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
       // return .reduce(reducer);
    }


    setTotalPrice(price) {
        console.log(price);
    }

    removeFromCart() {
        const removePoint = document.querySelectorAll('.remove');
       console.log(removePoint.length);
        let arr = this.getCartItems();
        for (let i = 0; i < removePoint.length; i++) {
            removePoint[i].addEventListener('click', () => {
                const ul = document.getElementById('items');
                let toRemoveID = removePoint[i].id;
                delete arr[toRemoveID];
                toRemoveID++;
                if (Number(toRemoveID) === removePoint.length) {
                    delete arr[toRemoveID];
                    ul.removeChild(ul.childNodes[1]);
                    ul.removeChild(ul.childNodes[1]);
                    ul.removeChild(ul.childNodes[1]);
                } else{
                    ul.removeChild(ul.childNodes[toRemoveID]);
                    ul.removeChild(ul.childNodes[toRemoveID]);
                    ul.removeChild(ul.childNodes[toRemoveID]);
                }
            });
        }
    }

}

//<script src="js/main.js"></script>
//<script src="js/cart.js"></script>