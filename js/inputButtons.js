for (let i = 0; i < plusButList.length; i++) {
    plusButList[i].addEventListener('click', () => {
            inputList[i].value = (+inputList[i].value + 1).toString();
        }
    )
}

for (let i = 0; i < minusButList.length; i++) {
    minusButList[i].addEventListener('click', () => {
            if (!(+inputList[i].value === 1)) {
                inputList[i].value = (+inputList[i].value - 1).toString();
            }
        }
    )
}