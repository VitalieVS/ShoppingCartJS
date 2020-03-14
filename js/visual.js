document.addEventListener("DOMContentLoaded", () =>{
    const buttonsList = document.querySelectorAll('.item_but');
    console.log(buttonsList);
    for (let i = 0; i < buttonsList.length; i++){
        buttonsList[i].addEventListener('click', () =>{
            buttonsList[i].style.backgroundColor = 'white';
            buttonsList[i].style.color = 'black';
            buttonsList[i].style.border = '1px solid red';
        });
    }


});