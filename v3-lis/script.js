function showMessage() {
  alert("Still on maintanace Sen. Adeyemi Quyum Adekunle.)
}

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

