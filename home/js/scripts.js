document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Get modal
var modal = document.getElementById('imageModal');

// Get all images in the portfolio
var images = document.querySelectorAll('.portfolio-item img');

// Get modal image element
var modalImg = document.getElementById('modalImg');

// Get modal caption element
var captionText = document.getElementById('modalCaption');

// Loop through all portfolio images
images.forEach(function(image) {
  image.onclick = function() {
    modal.style.display = 'block'; // Show the modal
    modalImg.src = this.src; // Set the image in the modal
    captionText.innerHTML = this.alt; // Set the caption in the modal
  };
});

// Get the close button element
var closeBtn = document.getElementsByClassName('close')[0];

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = 'none';
};
