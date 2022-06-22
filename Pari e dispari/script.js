const btnGenerator = document.getElementById('btn-generator');
const btnWinner = document.getElementById('btn-winner');
const computerRandomOutput = document.getElementById('computer-random-number');
let userNumber;
let computerNumber = 0;
let winner;
let sumNumbers = 0;

btnGenerator.addEventListener('click',function(){
    computerNumber = randomGen(1,5);
    alert('HAI GENERATO UN NUMERO RANDOMICO,CLICCA SUL TASTO PER VERIFICARE CHI HA VINTO E SCOPRIRAI QUAL\'ERA IL NUMERO RANDOMICO')
    computerRandomOutput.classList.add('invisible');
    computerRandomOutput.innerHTML = computerNumber;
    console.log(computerNumber)
})

btnWinner.addEventListener('click',function(){
    if(computerNumber == 0){
        alert('Cliccare il tasto per generare un numero randomico')
    }else{
        userNumber = parseInt(document.getElementById('user-number').value);
        if(isNaN(userNumber) || (userNumber < 1 || userNumber > 5))
        {
         alert('Valore del numero inserito non corretto,inserire un numero da 1 a 5')   
        }
        else{
            const selectValue = document.getElementById('select-even-odd').value;
            computerRandomOutput.classList.remove('invisible');
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
