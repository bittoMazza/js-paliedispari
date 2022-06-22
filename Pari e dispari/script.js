let userNumber;
const selectValue = document.getElementById('select-even-odd').value;
const btnGenerator = document.getElementById('btn-generator');
const btnWinner = document.getElementById('btn-winner');
let computerNumber = 0;
let winner;
let sumNumbers = 0;

btnGenerator.addEventListener('click',function(){
    computerNumber = randomGen(1,5);
    console.log(computerNumber)
})

btnWinner.addEventListener('click',function(){
    if(computerNumber == 0){
        alert('Cliccare il tasto per generare un numero randomico')
    }else{
        userNumber = parseInt(document.getElementById('user-number').value);
        sumNumbers = userNumber + computerNumber;
        winner = checkSumEven(sumNumbers);
        if(winner == true && selectValue == 'even'){
            console.log('Vince l\' utente');
        }else if(winner == false && selectValue == 'odd')
        {
            console.log('Vince l\' utente');
        }
        else{
            console.log('Vince il computer')
        }
    }
})


function checkSumEven(sum){
    if(sum % 2 == 0){
        return true;
    }
    return false;
}   


function randomGen(min,max){
    let randomValue = Math.floor(Math.random() * (max - min + 1) + min) 
    return randomValue;
}
