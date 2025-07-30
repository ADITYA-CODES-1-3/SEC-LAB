function reverseWords(sentence) {
  return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}

const sentence = "Hello World from Aditya";
const array = [1, 2, 2, 3, 4, 4, 5];
const string = "Aditya is learning JavaScript";

console.log(reverseWords(sentence));
console.log(removeDuplicates(array));
console.log(countVowels(string));
