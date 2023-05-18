// Select the element you want to animate
const element = document.querySelector('.animate-me');

// Set the initial state of the element
element.style.opacity = 0;
element.style.transform = 'translateY(50px)';

// Define the animation function
function animate() {
  // Get the scroll position of the window
  const scrollPosition = window.scrollY;

  // Calculate the animation values based on the scroll position
  const opacity = Math.min(scrollPosition / 100, 1);
  const translateY = Math.max(0, 50 - scrollPosition / 5);

  // Apply the animation values to the element
  element.style.opacity = opacity;
  element.style.transform = `translateY(${translateY}px)`;

  // Call the animation function again on the next animation frame
  requestAnimationFrame(animate);
}

// Call the animation function to start the animation
animate();
