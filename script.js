function toggleMenu() {
    // Get the navbar element by its ID
    const navbar = document.getElementById('navbar');
  
    // Check the current transform style of the navbar
    if (navbar.style.transform === 'translateX(0px)' || navbar.style.transform === '') {
      // If the navbar is currently visible (transform is 0px) or no transform has been applied yet,
      // move it off-screen to the left by setting translateX to -100%
      navbar.style.transform = 'translateX(-100%)'; // Hide navbar
    } else {
      // If the navbar is hidden (not at 0px), set translateX to 0px to bring it back into view
      navbar.style.transform = 'translateX(0px)'; // Show navbar
    }
  }