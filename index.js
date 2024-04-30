const Hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.getElementById('CancelDiv');
const toggleBtn = document.getElementById('listtoggle');
const displaylist= document.getElementById('listdisplay');
const toggleButtons= document.querySelectorAll('.toggle-button');
const firstRender= document.getElementById('first-render');

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




document.addEventListener("DOMContentLoaded", function() {
    var designerText = document.getElementById('designer').innerText;
    var designerDiv = document.getElementById('designer');
    designerDiv.innerText = '';
    for (var i = 0; i < designerText.length; i++) {
        var span = document.createElement('span');
        span.innerText = designerText[i];
        span.classList.add('letter');
        designerDiv.appendChild(span);
    }
    var letters = document.querySelectorAll('.letter');
    letters.forEach(function(letter, index) {
        letter.style.animation = 'changeColor 5s infinite alternate ' + (index * 0.1) + 's';
    });
});
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

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector('.image-container');
    const totalWidth = imageContainer.scrollWidth; // Total width of all images
    const containerWidth = imageContainer.clientWidth; // Width of the container
    const scrollSpeed = 100; // Adjust scrolling speed as needed
    const animationDuration = totalWidth / containerWidth* scrollSpeed; // Calculate animation duration based on total width and scrolling speed
    document.documentElement.style.setProperty('--animation-duration', animationDuration + 's');
});


let activeButton = null;

// Function to deactivate the currently active button
function deactivateActiveButton() {
    if (activeButton) {
        const activeTargetId = activeButton.getAttribute('data-target');
        const activeTargetContent = document.getElementById(activeTargetId);
        activeTargetContent.classList.remove('active');
    }
}

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
         
        toggleButtons.forEach(btn => {
            btn.classList.remove('firstClicked')
            btn.classList.remove('clicked');
        });

        // Add the 'clicked' class to the clicked button
        button.classList.add('clicked');

        if (firstRender) {
            firstRender.classList.add('hidden');
        }
        deactivateActiveButton();

        // Toggle the 'active' class to show/hide content
        targetContent.classList.add('active');

        // Set the newly clicked button as the active button
        activeButton = button;
    });
});

