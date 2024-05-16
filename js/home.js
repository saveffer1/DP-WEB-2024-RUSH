document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 1000); // Delay before scrolling
  });
  
  // Function to create raindrops
  function createRain() {
    const rainContainer = document.querySelector('.rain');
    const numberOfDrops = 100; // Adjust the number of raindrops
  
    for (let i = 0; i < numberOfDrops; i++) {
      const drop = document.createElement('div');
      drop.className = 'raindrop';
      drop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      drop.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random speed
      drop.style.setProperty('--translateX', `${Math.random() * 10 - 5}vw`); // Random horizontal drift
      rainContainer.appendChild(drop);
    }
  }
  
  createRain();
  