import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles.css"; // Import your styles

const SOC = () => {
  useEffect(() => {
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
    createTextSemiCircle('text-semi-circle-16', 10);

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

    window.addEventListener('scroll', function () {
      var y = document.documentElement.scrollTop;
      var perc = y / 300;

      if (perc < 1) {
        sky.style.bottom = -1 * (perc) * 100 + '%';
      } else {
        sky.style.bottom = '-99%';
      }

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

      if (perc > 0) {
        bottom = (perc - 0.25) * 133;
        if (perc - 0.25 < 0) {
          bottom = 0;
        }
        rocket.style.bottom = bottom + '%';
      }

      if (y >= 300) {
        rocket.style.bottom = '140%';
      }

      if (y < 200) {
        smoothScrollTo(content.offsetTop, 2000);
      }

      if (perc > 0.15) {
        scrollBtn.style.opacity = 1 - (perc - 0.15) / 0.15;
        if (perc > 0.3) {
          scrollBtn.style.visibility = 'hidden';
        }
      } else {
        scrollBtn.style.opacity = 1;
        scrollBtn.style.visibility = 'visible';
      }
    });

    document.querySelectorAll('.toggle-btn').forEach((button) => {
      button.addEventListener('click', function () {
        const accordion = this.previousElementSibling;
        const textBox = accordion.querySelector('.text-box');
        const isThirdAccordion = accordion.parentElement.matches('.box-accordion:nth-child(3)');
        const expanded = textBox.style.maxHeight && textBox.style.maxHeight !== (isThirdAccordion ? '380px' : '250px');

        if (expanded) {
          textBox.style.maxHeight = isThirdAccordion ? '380px' : '250px';
          this.querySelector('span').textContent = 'Read More';
        } else {
          textBox.style.maxHeight = textBox.scrollHeight + 'px';
          this.querySelector('span').textContent = 'Read Less';
        }
      });
    });

    const parts = document.querySelectorAll('.text-part');
    let currentIndex = 0;

    function rotateText() {
      parts[currentIndex].classList.remove('show');
      parts[currentIndex].classList.add('hide');

      currentIndex = (currentIndex + 1) % parts.length;

      setTimeout(() => {
        parts[currentIndex].classList.remove('hide');
        parts[currentIndex].classList.add('show');
      }, 500);
    }

    setTimeout(() => {
      parts[currentIndex].classList.add('show');
    }, 500);

    setInterval(rotateText, 3000);

    const timelineWrapper = document.querySelector('.timeline-wrapper');
    const lastTimelineIcon = document.querySelector('.timeline:last-child .timeline-icon');

    if (timelineWrapper && lastTimelineIcon) {
      const timelineRect = lastTimelineIcon.getBoundingClientRect();
      const wrapperRect = timelineWrapper.getBoundingClientRect();
      timelineWrapper.style.height = (timelineRect.top - wrapperRect.top + timelineRect.height) + 'px';
    }

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
  }, []);

  return (
    <div className="main-content">
      <div id="rocket" className="rocket-shake"></div>
      <div id="exhaust" className="exhaust-shake"></div>
      <div id="sky"></div>
      <section id="scroll-down" style={{ position: "relative", zIndex: 10000 }}>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </section>

      <div className="circle-container">
        {[...Array(22)].map((_, index) => (
          <div key={index} className="circle"></div>
        ))}

        {[...Array(16)].map((_, index) => (
          <div key={index} className={`text-semi-circle text text-semi-circle-${index + 1}`}></div>
        ))}
      </div>

      <div className="content">
        <div className="svg-container">
          <img src="navlogo.svg" alt="Logo" id="mySVG" />
          <div id="output">
            <span id="word"></span>
          </div>
          <div className="soc">
            <div className="soc-left"></div>
            <div className="soc-right">
              <p id="soc-name">S</p>
              <p id="soc-name" style={{ color: "rgb(54, 61, 183)" }}>o</p>
              <p id="soc-name">C</p>
            </div>
          </div>
          <div className="soc-title">
            <h1>Seasons of Code:<br />
              <span className="text-part">&emsp; Summer Project</span>
              <span className="text-part">&emsp; Autumn Coding Challenge</span>
              <span className="text-part">&emsp; Spring DevSprint</span>
            </h1>
          </div>
        </div>

        <div className="spacer"></div>
        <section className="timeline-vertical">
          <div className="timeline-wrapper">
            <TimelineItem title="SEASONS OF CODE 2024" date="AUG" />
          </div>
        </section>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, date }) => (
  <div className="timeline">
    <div className="timeline-icon"></div>
    <div className="timeline-content">
      <span className="timeline-date">{date}</span>
      <span className="timeline-title">{title}</span>
    </div>
  </div>
);

export default SOC;
