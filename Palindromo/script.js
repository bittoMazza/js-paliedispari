const userWord = prompt('Inserire una parola')
// Potremmo creare una variabile a cui assegnare il valore "result"
// restituito dalla funzione 
if(checkIfPalindrome(userWord) == true){
    console.log('La parola è palindroma')
}else{
    console.log('La parola non è palindroma')
}




function checkIfPalindrome(word){
    let result = true;
    console.log(word)
    let i= 0;
    while( (i < word.length) || (result != false)){
        if(word[i] !== word[word.length - 1 - i ])
        {
            result = false;
        }
        i++;
        
    }
    return result;
}