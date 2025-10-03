// === 1️ Reverse words in a sentence ===
function reverseWordsInSentence(sentence) {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

// Test
const sentence = "Hello world from JavaScript";
console.log("🔁 Reversed Words:", reverseWordsInSentence(sentence));


// === 2️ Remove duplicates from an array ===
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test
const numbers = [1, 2, 3, 2, 4, 3, 5, 1];
console.log("🗑️ Without Duplicates:", removeDuplicates(numbers));


// === 3️ Count vowels in a string ===
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Test
const inputString = "JavaScript is awesome!";
console.log(" Vowel Count:", countVowels(inputString));
