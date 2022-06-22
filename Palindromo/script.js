const userWord = prompt('Inserire una parola')
let finalResult;
finalResult = checkIfPalindrome(userWord);
if(finalResult == true){
    console.log('La parola è palindroma')
}else{
    console.log('La parola non è palindroma')
}




function checkIfPalindrome(word){
    console.log(word)
    let i= 0;
    // IL CONTROLLO ARRIVA FINO A META PAROLA PERCHE LE PAROLE PALINDROME HANNO UNA META 
    // UGUALE ALL'ALTRA MA CON LE LETTERE INVERSE
    while( i < (word.length / 2)){
        // PARAGONIAMO LA LETTERA ALLA POSIZIONE I CON QUELLA A FINE PAROLA - I
        // IN MODO DA AVVICINARCI  A META PAROLA DA ENTRAMBE LE PARTI
        if(word[i] == word[word.length - 1 -i])
        {
            result = true;
            i++
        }
        else{
            result = false
            return result;
        }
    }
    return result;
}