
// Project: Profile Cards
// Description: Typing animation for the heading text using recursion and setTimeout
// Student note: The typing() function calls itself recursively until all characters
// of the heading string are displayed one by one with a 150ms delay between each character.

const heading = 'Please Meet Our Team';
let i = 0; // index to track current character position

// Typing animation function - adds one character at a time to the heading element
const typing = () => {
    if(i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i); // append current char
        i++;

        setTimeout(typing, 150); // wait 150ms before adding next character
    }
}

typing(); // start the animation














