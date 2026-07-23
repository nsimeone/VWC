function reverseHello() {
    let original = "Hello";
    let reversed ="";

    for (let i = original.length - 1; i >=0; i--) {
        reversed += original[i]; 
    }
    document.getElementById("Hello").textContent = reversed; 
}

function checkPalindrome() {
    let original = document.getElementById("userInput").value.toLowerCase();
    let reversed = "";

    for (let i = original.length - 1; i >=0; i--) {
        reversed += original[i];
    }

    let outputElement = document.getElementById("Palindrome");

    if (original === "") {
        outputElement.textContent = "Please type a word first."; 
    } else if (original === reversed) {
        outputElement.textContent = "This is a palindrome";
    } else {
        outputElement.textContent = "This is not a palindrome";}
}

function countVowels() {
    let original="Hello"
    let count = 0 
    let vowels = "aeiouAEIOU";

    for (let i = 0; i <original.length; i++) {
        if (vowels.includes(original[i])) {
            count++; 
        }
    }
    document.getElementById("countVowels").textContent = "Vowel count: " + count;     
}

function capitalizeWords() {
    let original="hello world"
    let result = original.toUpperCase(); 

    document.getElementById("capitalizeWords").textContent = result; 
}

function removeDuplicates() {
    let original ="hello"
    let result=""; 

    for (let i = 0; i<original.length; i++) {
        let char = original[i];

        if (!result.includes(char)) {
            result += char; 
        }
    }
    document.getElementById("removeDuplicates").textContent = result; 
}
    
function findLargest() {
    const numbers = [1, 5, 3]
    let max = numbers[0]; 
    for (let i = 1; i <numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    document.getElementById("findLargest").textContent = max; 
    
}
    