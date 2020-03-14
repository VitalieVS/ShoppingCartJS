document.addEventListener("DOMContentLoaded", () =>{
    const buttonsList = document.querySelectorAll('.item_but');
    const addedList = document.querySelectorAll('.added');
    const startTimer = (el) =>{
        setTimeout(()=>{
            buttonsList[el].style.display = 'block';
            addedList[el].style.display = 'none';
        }, 2000);
    };

    for (let i = 0; i < buttonsList.length; i++){
        buttonsList[i].addEventListener('click', () =>{
            buttonsList[i].style.display = 'none';
            addedList[i].style.display = 'block';
            startTimer(i);
        });
    }
});