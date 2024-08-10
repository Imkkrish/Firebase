document.addEventListener("DOMContentLoaded", function() {
            const text = "Seasons of Code";

            function createTextSemiCircle(className, rotationAngle) {
                const container = document.querySelector(`.${className}`);
                const numChars = text.length;
                const anglePerChar = 130 / (numChars - 1); // Adjust based on the number of characters
                
                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.transform = `rotate(${index * anglePerChar + rotationAngle}deg)`;
                    container.appendChild(span);
                });
            }

           // Create text instances at different positions
            createTextSemiCircle('text-semi-circle-1', 10);
            createTextSemiCircle('text-semi-circle-2', 0);
            createTextSemiCircle('text-semi-circle-3', 0);
            createTextSemiCircle('text-semi-circle-4', 10);
            createTextSemiCircle('text-semi-circle-5', 0);
            createTextSemiCircle('text-semi-circle-6', 0);
            createTextSemiCircle('text-semi-circle-7', 10);
            createTextSemiCircle('text-semi-circle-8', 0);
            createTextSemiCircle('text-semi-circle-9', 0);
            createTextSemiCircle('text-semi-circle-10', 10);
            createTextSemiCircle('text-semi-circle-11', 0);
            createTextSemiCircle('text-semi-circle-12', 0);
            createTextSemiCircle('text-semi-circle-13', 10);
            createTextSemiCircle('text-semi-circle-14', 0);
            createTextSemiCircle('text-semi-circle-15', 0);
            createTextSemiCircle('text-semi-circle-16', 0);
        });
        const rocket = document.querySelector('#rocket');
const sky = document.querySelector('#sky');
const ex = document.querySelector('#exhaust');
const content = document.querySelector('.content');
const scrollBtn = document.querySelector('.scroll-downs');
var bottom = 0;

function smoothScrollTo(target, duration) {
  const start = window.pageYOffset;
  const distance = target - start;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    window.scrollTo(0, start + (distance * easeInOutQuad(progress)));

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animation);
}

window.addEventListener('scroll', function() {
  var y = document.documentElement.scrollTop;

  // Calculate the percentage of the scroll
  var perc = y / 300;

  // Adjust the sky's bottom position
  if (perc < 1) {
    sky.style.bottom = -1 * (perc) * 100 + '%';
  } else {
    sky.style.bottom = '-99%';
  }

  // Add or remove classes based on scroll percentage
  if (perc > 0) {
    rocket.classList.add('shake_rocket');
    ex.classList.add('exhaust');
  } else {
    rocket.classList.remove('shake_rocket');
    ex.classList.remove('exhaust');
  }

  if (perc > 0.37) {
    ex.classList.remove('exhaust');
  }

  // Adjust the rocket's bottom position
  if (perc > 0) {
    bottom = (perc - 0.25) * 133;
    if (perc - 0.25 < 0) {
      bottom = 0;
    }
    rocket.style.bottom = bottom + '%';
  }

  // Set rocket's bottom position to 140% after scrolling 300px
  if (y >= 300) {
    rocket.style.bottom = '140%';
  }

  // Automatic scroll to main content with custom speed
  if (y < 200) {
    smoothScrollTo(content.offsetTop, 2000); // 2000ms for slower scroll
  }

  // Fade out and hide the scroll-downs button
  if (perc > 0.15) {
    scrollBtn.style.opacity = 1 - (perc - 0.15) / 0.15; // Fade out
    if (perc > 0.3) {
      scrollBtn.style.visibility = 'hidden'; // Hide after fading out
    }
  } else {
    scrollBtn.style.opacity = 1;
    scrollBtn.style.visibility = 'visible';
  }
});
        document.querySelectorAll('.toggle-btn').forEach((button, index) => {
          button.addEventListener('click', function () {
              const accordion = this.previousElementSibling;
              const textBox = accordion.querySelector('.text-box');
              const isThirdAccordion = accordion.parentElement.matches('.box-accordion:nth-child(3)');
              const expanded = textBox.style.maxHeight && textBox.style.maxHeight !== (isThirdAccordion ? '380px' : '250px');
      
              if (expanded) {
                  textBox.style.maxHeight = isThirdAccordion ? '380px' : '250px';  // Restore specific height
                  this.querySelector('span').textContent = 'Read More';
              } else {
                  textBox.style.maxHeight = textBox.scrollHeight + 'px';  // Expand to full height
                  this.querySelector('span').textContent = 'Read Less';
              }
          });
      });
      
// content js
/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
  content: "#content",
  wrapper: "#wrapper",
  smooth: true,
  effects: false,
  normalizeScroll: true,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".accordions",
    pin: true,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    ease: "linear",
  },
});

tl.to(".accordion .text", {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: 0.5,
});
tl.to(
  ".accordion",
  {
    marginBottom: -15,
    stagger: 0.5,
  },
  "<"
);
document.addEventListener("DOMContentLoaded", function() {
  const timelineWrapper = document.querySelector('.timeline-wrapper');
  const lastTimelineIcon = document.querySelector('.timeline:last-child .timeline-icon');

  if (timelineWrapper && lastTimelineIcon) {
    const timelineRect = lastTimelineIcon.getBoundingClientRect();
    const wrapperRect = timelineWrapper.getBoundingClientRect();

    // Adjust the height of the timeline-wrapper to match the last .timeline-icon position
    timelineWrapper.style.height = (timelineRect.top - wrapperRect.top + timelineRect.height) + 'px';
  }
});

// timeline
$(function() {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  } else {
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }
}); // <--- Added closing bracket here
