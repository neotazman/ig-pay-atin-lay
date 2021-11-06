// Your code here
//const mainContainer = document.getElementById("mainContainer");
const inputBox = document.getElementById("inputBox");
const resultDisplay = document.getElementById("resultDisplay");

const convertToPigLatin = (str) => { //the function to convert pig latin (works for words starting with vowels, words starting with consonants, and sentences)

    const vowelChecker = (letter) => { //check if a letter is a vowel, returns a boolean
        if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') { //the logic for "y" is more complicated so i haven't implemented it yet
            return true
        } else {
            return false
        }
    }
    const punctuationChecker = (character) => { //checks if a character is a punctuation mark
        if(character === ',' || character === '.' || character === '?' || character === '!' || character === ';' || character === ':') {
            return true
        } else {
            return false
        }
    }
    if(typeof str !== 'string') { //checks if it's a string
        return false
    } else {
        let wordArr = str.split(' ') //splits the string into words

        successArr = [] //a place to store the converted words
        for(let word of wordArr) { //runs for each word individually
            if(!word) { //if the word is an empty string, it will convert it to an empty string
                continue
            }
            let letters = word.split('') //converts the word into letters
            let punctuationMark = '' //saves the punctuation mark if there is one
            if( punctuationChecker(letters[letters.length - 1]) ) { //the punctuationMark is only valid at the end of a word
                punctuationMark = letters[letters.length - 1]
            }
            let pigLatinArr = [] //a place to store the converted word
            let firstVowelIndex = letters.findIndex(letter => vowelChecker(letter)) //finds the first vowel and saves the index
            for(let i = firstVowelIndex; i < letters.length; i++) { //a loop that starts at the first vowel
                if(i === letters.length - 1 && punctuationMark) { //when it hits a punctuation mark it skips it
                    continue
                } else {
                    pigLatinArr.push(letters[i])
                }
                
            }
            pigLatinArr.push('-') //puts a dash between the word and the ay
            for(let i = 0; i < firstVowelIndex; i++) { //puts the consonants after the dash
                pigLatinArr.push(letters[i])
            }
            if(letters[0] === pigLatinArr[0]) { //if the word starts with a vowel, adds yay instead of ay
                pigLatinArr.push('yay')
                if(punctuationMark) { //puts the punctuationMark at the end of the word
                    pigLatinArr.push(punctuationMark)
                }
            } else {
                pigLatinArr.push('ay') // adds the ay to the end
                if(punctuationMark) {
                    pigLatinArr.push(punctuationMark)
                }
            }
            successArr.push(pigLatinArr.join('')) //turns the converted word back into a word and adds it to the converted words array
        }
        return successArr.join(' ') //turns the array into a string and returns the converted string
    }
}

const convert = (e) => {
    let convertedOutput = convertToPigLatin(e.target.value)

    resultDisplay.innerText = convertedOutput
}

inputBox.addEventListener('input', convert)

//unit tests
//1.
console.log(convertToPigLatin('almost'))
console.log(convertToPigLatin('enough'))
//2.
console.log(convertToPigLatin('consonant'))
console.log(convertToPigLatin('vowel'))
//3.
console.log(convertToPigLatin('blatent'))
console.log(convertToPigLatin('animal'))
//4.
console.log(convertToPigLatin('once there was a rabbit'))
console.log(convertToPigLatin('this is a sentence with words'))