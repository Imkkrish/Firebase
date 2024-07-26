//printing blinking words


function printSentenceWithBlinking(sentences) {
  const output = document.getElementById("word");
  let sentenceIndex = 0;
  let index = 0;
  let printInterval;
  function printWithBlinkingUnderscore() {
    const currentSentence = sentences[sentenceIndex];
    printInterval = setInterval(() => {
      if (index <= currentSentence.length) {
        if (index < currentSentence.length) {
          output.innerHTML = currentSentence.substring(0, index) + '<span class="blink">_</span>';
        } else {
          output.innerHTML = currentSentence.substring(0, index); // Ensure the full sentence is displayed before backspacing
        }
        index++;
      } else {
        clearInterval(printInterval);
        setTimeout(() => {
          removeBackward(currentSentence);
        }, 500); // Delay before backspacing starts
      }
    }, 200); // Adjust interval for faster printing
  }
  function removeBackward(sentence) {
    printInterval = setInterval(() => {
      if (index >= 0) {
        output.innerHTML = sentence.substring(0, index) + '<span class="blink">_</span>';
        index--;
      } else {
        clearInterval(printInterval);
        // Move to the next sentence
        sentenceIndex++;
        if (sentenceIndex >= sentences.length) {
          sentenceIndex = 0; // Reset to the first sentence
        }
        setTimeout(() => {
          index = 0;
          printWithBlinkingUnderscore(); // Print the next sentence
        }, 1000); // Delay before printing the next sentence
      }
    }, 100); // Adjust interval for faster backspacing
  }

  printWithBlinkingUnderscore(); // Start the initial printing
}

const sentences = [
  "CU_Jharkhand",
  "Let's go out of the CodeSpace"
  
  // Add more sentences as needed
];
 
printSentenceWithBlinking(sentences); // Call the function with the array of sentences
//for responsive navbar
function toggleNav() {
  var nav = document.getElementById("myNav");
  var bars = document.querySelector('.container');
  
  // Toggle navigation visibility
  if (nav.style.display === "block") {
      nav.style.display = "none";
      bars.classList.remove("change");
  } else {
      nav.style.display = "block";
      bars.classList.add("change");
  }
}

// Reset navigation when a link is clicked
document.addEventListener('click', function(event) {
  var nav = document.getElementById("myNav");
  var bars = document.querySelector('.container');

  // Check if the clicked element is a link within the navigation
  if (event.target.tagName.toLowerCase() === 'a' && nav.contains(event.target)) {
      nav.style.display = "none";
      bars.classList.remove("change");
  }
});

//mouse hover on search box
document.addEventListener('DOMContentLoaded', () => {
const searchBox = document.querySelector('.searchBox');
const searchInput = document.querySelector('.searchInput');

searchBox.addEventListener('mouseover', () => {
    searchInput.focus();
});

searchBox.addEventListener('mouseout', () => {
    searchInput.blur();
});
});

function checkOrientation() {
const mainContent = document.getElementById("mainContent");
if (window.innerWidth < window.innerHeight) {
  alert("Please rotate your device to landscape mode for a better experience.");
  mainContent.style.display = "none";
} else {
  mainContent.style.display = "block";
}
}

// Check orientation on load
window.addEventListener("load", checkOrientation);
// Check orientation on resize
window.addEventListener("resize", checkOrientation);
// Add other JavaScript functions as needed

