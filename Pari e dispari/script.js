const userNumber = parseInt(document.getElementById('user-number').value);
const selectValue = document.getElementById('select-even-odd').value;
const btnGenerator = document.getElementById('btn-generator');
const btnWinner = document.getElementById('btn-winner');
let computerNumber;
function randomGen(min,max){
    let randomValue = Math.floor(Math.random() * (max - min + 1) + min) 
    return randomValue;
}

btnGenerator.addEventListener('click',function(){
    computerNumber = randomGen(1,5);
    console.log(computerNumber)
})
