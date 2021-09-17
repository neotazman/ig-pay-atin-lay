// Your code here


const convertToPigLatin = (str) => { //the function to convert pig latin (works for words starting with vowels, words starting with consonants, and sentences)
    const vowelChecker = (letter) => { //check if a letter is a vowel, returns a boolean
        if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') { //the logic for "y" is more complicated so i haven't implemented it yet
            console.log(letter)
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
            let letters = word.split('') //converts the word into letters
            let pigLatinArr = [] //a place to store the converted word
            let firstVowelIndex = letters.findIndex(letter => vowelChecker(letter)) //finds the first vowel and saves the index
            for(let i = firstVowelIndex; i < letters.length; i++) { //a loop that starts at the first vowel
                pigLatinArr.push(letters[i])
            }
            pigLatinArr.push('-') //puts a dash between the word and the ay
            for(let i = 0; i < firstVowelIndex; i++) { //puts the consonants after the dash
                pigLatinArr.push(letters[i])
            }
            if(letters[0] === pigLatinArr[0]) { //if the word starts with a vowel, adds yay instead of ay
                pigLatinArr.push('yay')
            } else {
                pigLatinArr.push('ay') // adds the ay to the end
            }
            successArr.push(pigLatinArr.join('')) //turns the converted word back into a word and adds it to the converted words array
        }
        return successArr.join(' ') //turns the array into a string and returns the converted string
    }
}

// export default convertToPigLatin

//unit tests
