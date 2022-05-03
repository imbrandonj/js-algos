// demonstrates string manipulation and stripping of punctuation & spaces

const palindromes = function (word) {

    word = word.toLowerCase();
    word = word.replace(/ /g, "");
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let reverseWord = [];
    
    for (let char in word) {
        reverseWord.unshift(word[char]);
    }
    reverseWord = reverseWord.join('');
    
    if (reverseWord === word) {
        return true;
    }

    return false;
};


// Do not edit below this line
module.exports = palindromes;
