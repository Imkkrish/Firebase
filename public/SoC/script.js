
// linear

// Get the rocket image element
// const rocketImg = document.getElementById('rocket-img');

// // Add an event listener to the window's scroll event
// window.addEventListener('scroll', () => {
//   // Get the current scroll position
//   const scrollPosition = window.scrollY;

//   // Move the rocket up as the user scrolls
//   rocketImg.style.bottom = `${100 - (scrollPosition / 10)}%`;

//   // Add a transition effect to make the movement smooth
//   rocketImg.style.transition = 'bottom 0.5s ease-in-out';
// });


// curve path 
const rocketImg = document.getElementById('rocket-img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const curve = `cubic-bezier(0.15, 0.36, 0.45, 0.94)`; // adjust the curve to your liking
  const rocketTop = `${100 - (scrollPosition / 10)}%`;
  const rocketLeft = `${(scrollPosition / 10) * 1}%`; // adjust the multiplier to control the curve

  rocketImg.style.top = rocketTop;
  rocketImg.style.left = rocketLeft;
 
  rocketImg.style.transition = `top 0.5s ${curve}, left 0.2s ${curve}`;
});

