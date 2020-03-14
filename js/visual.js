document.addEventListener("DOMContentLoaded", () =>{
    const buttonsList = document.querySelectorAll('.item_but');
    console.log(buttonsList);
    for (let i = 0; i < buttonsList.length; i++){
        buttonsList[i].addEventListener('click', () =>{
            buttonsList[i].style.color = 'green';
            buttonsList[i].innerHTML = 'Added <i class="fas fa-check fa-1x"></i>';
            buttonsList[i].style.border = 'none';
        });
    }


});