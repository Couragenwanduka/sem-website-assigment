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




