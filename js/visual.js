document.addEventListener("DOMContentLoaded", () => {
    window.localStorage.clear();
    const cart = new Cart();
    for (let i = 0; i < buttonsList.length; i++) {
        buttonsList[i].addEventListener('click', () => {
            buttonsList[i].style.display = 'none';
            addedList[i].style.display = 'block';
            cart.startTimer(i);
        });
    }
});