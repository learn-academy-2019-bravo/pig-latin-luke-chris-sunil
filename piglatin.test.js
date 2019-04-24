

//Goal of program: take user inout as string and outputs the string in pig latin
//pig latin rules:
// - For words beginning with a vowel, add "way" to the end.
// - For words beginning with one or more consonants, move all of the first
//      consecutive consonants to the end, and add "ay".
// - If the first consonants include "qu", move the "u" along with the "q".
//      Don't forget about words like "squeal" where "qu" doesn't come first!
// - For words beginning with "y", treat "y" as a consonant.


var testString = 'squeal this is a test of pig latin qiaudfg'
var vowels = ['a', 'e', 'i', 'o', 'u']
let splitSentence = testString.split(' ')
var way = ['w', 'a', 'y']
//
// describe("splitter", () => {
//     test ("returns array of strings within array of words", () => {
//         expect(splitter("[['test'], ['string']]")).toBe("[['t', 'e', 's', 't'], ['s', 't', 'r', 'i', 'n', 'g']]")
//         })
// })

//splitWords is an array of the string with each word as its own index
let splitWords = splitSentence.map(value => {
        return value.split()
})


// thi function splits each letter into its own index within the array
function splitter(arr){
    let superWords = []
    for(let k = 0; k < arr.length; k++){
        let newArr = arr[k]
        let final = ([newArr[0].split('')])
        superWords.push(final[0])
    } return superWords

}

var finalArray = splitter(splitWords)
//turn an array of words into pig latin
function piglatin(arr1) {
    let pigArray = []
    //isolate word and performs logic on it and pushes to new array
    for (let i = 0; i < arr1.length; i++) {
        let word = arr1[i]

        //checks if word starts with vowel and adds 'way' to the end
        if (vowels.includes(word[0])){
            let pigVowel = word.concat(way)
            pigArray.push(pigVowel);
        }
        else {
            for(let i = 0; i<word.length; i++) {
                //checks for 'qu' rule
                if(word[i] ==='q' && word[i+1]==='u'){
                    let indexU = word.indexOf(word[i+1])+1
                    let a = word.splice(indexU,word.length)
                    let b = word.splice(0,indexU)
                    let c = a.concat(b)
                    let pigQU = c.concat(way)
                    pigArray.push(pigQU)

                } else {
                    

                    // if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
                    //     // var d = word.indexOf(word[i])
                    //     console.log(word[i]);
                    // }
                        // for(let j=0; j<word.length; j++) {
                        //     if (vowels[j].includes(word) = false) {
                        //         let z = []
                        //         let x = z.push(word.shift(word[j]))
                        //
                        //         console.log(z);
                        //     }
                        }
                }

            }
        }return pigArray
    }
}

console.log(piglatin(finalArray));


    //if (word.includes(['q','u']) ){
