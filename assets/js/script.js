document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section');

  // Function to highlight the active link
  function highlightActiveLink() {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPos >= sectionTop - sectionHeight / 3 && scrollPos < sectionTop + sectionHeight) {
              navLinks.forEach(link => {
                  link.classList.remove('active-link');
                  if (link.getAttribute('href') === `#${section.id}`) {
                      link.classList.add('active-link');
                  }
              });
          }
      });
  }

  // Event listener for scroll
  window.addEventListener('scroll', highlightActiveLink);
  
  // Existing nav link click event
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(item => item.classList.remove('active-link'));
          this.classList.add('active-link');
      });
  });

  // Navigation toggle event
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
  });

  // Dynamic text typing effect
  const dynamicText = document.getElementById("dynamic-text");
  const texts = ["Full Stack Developer", ".NET Developer"];
  let textIndex = 0;
  let charIndex = 0;

  function typeText() {
      if (charIndex < texts[textIndex].length) {
          dynamicText.textContent += texts[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 100); // Adjust typing speed here
      } else {
          setTimeout(() => {
              charIndex = 0;
              textIndex = (textIndex + 1) % texts.length; // Loop through the phrases
              dynamicText.textContent = ""; // Clear the current text
              typeText(); // Start typing the next text
          }, 2000); // Pause for 2 seconds before switching text
      }
  }

  typeText();
});


(function(){
    emailjs.init("7Dctpzpet649BOeI9"); // Replace with your EmailJS user ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const serviceID = 'service_dz202wu'; // Replace with your EmailJS service ID
    const templateID = 'template_a6xpmaj'; // Replace with your EmailJS template ID

    // Send the email
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('responseMessage').innerText = 'Message sent successfully!';
            this.reset(); // Clear the form after submission
        }, (err) => {
            document.getElementById('responseMessage').innerText = 'An error occurred. Please try again later.';
            console.error(err);
        });
});

