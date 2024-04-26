const Hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.getElementById('CancelDiv');
const toggleBtn = document.getElementById('listtoggle');
const displaylist= document.getElementById('listdisplay');


const sideMenu = () => {
    Hamburger.addEventListener('click', () => {
        sideBar.classList.toggle('active');
    });
}

const closeMenu = () => {
    closeBtn.addEventListener('click', () => {
        sideBar.classList.remove('active'); // Remove the 'active' class from the sidebar
    });
}

const toggle = () => {
  toggleBtn.addEventListener('click', () => {
    displaylist.classList.toggle('active');
  });
}

const colorizeText = () => {
    const designerElement = document.getElementById('designer');
    const words = designerElement.textContent.split(' ');
    designerElement.innerHTML = ''; // Clear the original text
    words.forEach((word, i) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        console.log(span)
        span.style.color = '#c9f31d';
        span.classList.add('colored-span'); // Add a custom class
        designerElement.appendChild(span);
    });
};
 // Call colorizeText initially

 const removeColor = () => {
    const coloredSpans = document.querySelectorAll('.colored-span');
    coloredSpans.forEach((span) => {
        const characters = span.textContent.split('');
        characters.forEach((char, index) => {
            setTimeout(() => {
                span.textContent = span.textContent.replace(char, ''); // Remove the character
            }, index * 50); // Adjust the delay as needed
        });
    });
};




// Call removeColor every 2 seconds to remove the color
setInterval(colorizeText(),2000);
setInterval(removeColor, 3000);



// colorizeText();

// Call colorizeText() every 2 seconds



document.addEventListener('DOMContentLoaded', () => {
    sideMenu();
    closeMenu();
    toggle();
});

// Step 1: Detect Scroll Event
window.addEventListener('scroll', function() {
  // Step 2: Check Scroll Position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Step 3: Toggle CSS Classes
  var navBar = document.querySelector('.navBar');

  // Define a threshold scroll position to trigger the color change
  var threshold = 100;

  if (scrollPosition > threshold) {
      // Add a CSS class to change the background color
      navBar.classList.add('scrolled');
  } else {
      // Remove the CSS class if the scroll position is less than the threshold
      navBar.classList.remove('scrolled');
  }
});




