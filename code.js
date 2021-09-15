// Your code here
const vowelChecker = (letter) => {
    if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') {
        console.log(letter)
        return true
    } else {
        return false
    }
}

const convertToPigLatin = (str) => {
    if(typeof str !== 'string') {
        return false
    } else {
        let wordArr = str.split(' ')

        successArr = []
        for(let word of wordArr) {
            let letters = word.split('')
            let pigLatinArr = []
            let firstVowelIndex = letters.findIndex(letter => vowelChecker(letter))
            for(let i = firstVowelIndex; i < letters.length; i++) {
                pigLatinArr.push(letters[i])
            }
            pigLatinArr.push('-')
            for(let i = 0; i < firstVowelIndex; i++) {
                pigLatinArr.push(letters[i])
            }
            pigLatinArr.push('ay')
            successArr.push(pigLatinArr.join(''))
        }
        return successArr.join(' ')
    }
}