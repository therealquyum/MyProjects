function showMessage() {
  alert("Still on maintanace Sen. Adeyemi Quyum Adekunle.)
}


  const text = "Welcome to V3 LIS Resource Hub";
  const speed = 100; // typing speed in milliseconds
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      document.getElementById("type-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    }
  }

  // Start typing when page loads
  window.onload = typeEffect;


