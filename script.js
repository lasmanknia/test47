
//type writer

var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", "); 
var maxTextIndex = textArr.length; 

var sPerChar = 0.15; 
var sBetweenWord = 1.5;
var textIndex = 0; 

typing(textIndex, textArr[textIndex]); 

function typing(textIndex, text) {
    var charIndex = 0; 
    var maxCharIndex = text.length - 1; 
    
    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, sPerChar * 1000); 
}

function deleting(textIndex, text) {
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, sPerChar * 1000); 
}

//progressbar

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 300;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


//Darkmode

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;

    // Check if dark mode is enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }
}

// Function to handle the dark mode toggle button
function setupDarkModeToggle() {
    const body = document.body;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update the dark mode state in local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
}

// Call the functions when the page loads
window.addEventListener('load', toggleDarkMode);
window.addEventListener('load', setupDarkModeToggle);






//color picker


function changeColor(newColor) {
    document.documentElement.style.setProperty('--color', newColor);
    localStorage.setItem('mainColor', newColor);
}

// Check if there is a saved color in local storage and apply it
const savedColor = localStorage.getItem('mainColor');
if (savedColor) {
    changeColor(savedColor);
}