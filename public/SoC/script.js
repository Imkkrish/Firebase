const rocket = document.querySelector('#rocket')
    const sky = document.querySelector('#sky')
    const ex = document.querySelector('#exhaust')
    const content = document.querySelector('.content')
    var bottom = 0
    var last_y = 0
    var wheel

    window.addEventListener('wheel', function(e){
      wheel = e.deltaY
    })

    window.addEventListener('scroll', function(e){
      var h = window.innerHeight
      var y = document.documentElement.scrollTop
      var doc = document.body.offsetHeight - 250
      var perc = y / (doc - h)

      if (perc < 1) {
        sky.style.bottom = -1 * (perc) * 100 + '%'    
      }  

      if (perc > 0) {
        rocket.classList.add('shake_rocket')
        ex.classList.add('exhaust')
      } else {
        rocket.classList.remove('shake_rocket')
        ex.classList.remove('exhaust')
      }

      if (perc > .37) {
        ex.classList.remove('exhaust')
      }

      if (perc > .25) {
        bottom = (perc - .25) * 133
      }

      if (perc > 0) {
        bottom = (perc - .25) * 133
        if (perc - .25 < 0) {
          bottom = 0
        }
      }
      rocket.style.bottom = bottom + '%'

      last_y = y

      // Automatic scroll to main content
      if (y < 100) {
        window.scrollTo({
          top: content.offsetTop,
          behavior: 'smooth'
        });
      }
    })



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


// timeline
// $(function(){

//   window.sr = ScrollReveal();

//   if ($(window).width() < 768) {

//   	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
//   		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
//   	}

//   	sr.reveal('.js--fadeInRight', {
// 	    origin: 'right',
// 	    distance: '300px',
// 	    easing: 'ease-in-out',
// 	    duration: 800,
// 	  },{
//       selector: '.js--fadeInRight'
//     }
    

//   );

//   } else {
  	
//   	sr.reveal('.js--fadeInLeft', {
// 	    origin: 'left',
// 	    distance: '300px',
// 		  easing: 'ease-in-out',
// 	    duration: 800,
// 	  });

// 	  sr.reveal('.js--fadeInRight', {
// 	    origin: 'right',
// 	    distance: '300px',
// 	    easing: 'ease-in-out',
// 	    duration: 800,
// 	  });

//   }
  
//   sr.reveal('.js--fadeInLeft', {
// 	    origin: 'left',
// 	    distance: '300px',
// 		  easing: 'ease-in-out',
// 	    duration: 800,
// 	  });

// 	  sr.reveal('.js--fadeInRight', {
// 	    origin: 'right',
// 	    distance: '300px',
// 	    easing: 'ease-in-out',
// 	    duration: 800,
// 	  });


// });

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