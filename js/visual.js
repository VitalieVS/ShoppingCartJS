document.addEventListener("DOMContentLoaded", () => {
    const cart = new Cart();
    const buttonsList = document.querySelectorAll('.item_but');
    const addedList = document.querySelectorAll('.added');
    const spanList = document.querySelectorAll('.added .latency_box');
    const itemName = document.querySelectorAll('h2');
    const priceList = document.querySelectorAll('h3');
    const startTimer = (el) => {
        let time = 3;
        let interval = setInterval(() => {
            if (time < 1) {
                buttonsList[el].style.display = 'block';
                addedList[el].style.display = 'none';
                spanList[el].innerHTML = '';
                let price = priceList[el].innerHTML;
                let rez = price.match(/\d/g).join('');
                cart.addToCart([itemName[el].innerHTML, rez, inputList[el].value]);
                clearInterval(interval);
            } else {
                spanList[el].innerHTML = time;
                time--;
            }
        }, 1000)
    };

    for (let i = 0; i < buttonsList.length; i++) {
        buttonsList[i].addEventListener('click', () => {
            buttonsList[i].style.display = 'none';
            addedList[i].style.display = 'block';
            startTimer(i);
        });
    }
});