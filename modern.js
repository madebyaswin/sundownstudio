const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemc = document.querySelector(".elem-container");
var fix = document.querySelector(".fixed-img");
elemc.addEventListener("mouseenter", function () {
  fix.style.display = "block";
});
elemc.addEventListener("mouseleave", function () {
  fix.style.display = "none";
});

// var elem1=document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//    var imf= elem1.getAttribute("data-image")
//   fix.style.backgroundImage=`url(${imf})`
// })
//     const headline = document.querySelector('.left h3');
//     const text = headline.textContent;
//     headline.textContent = '';
//     const frag = document.createDocumentFragment();
//     for (const ch of text) {
//       const span = document.createElement('span');
//       span.className = 'char';
//       span.textContent = ch;
//       frag.appendChild(span);
//     }
//     headline.appendChild(frag);

//     // Animate chars in with a slight random y & rotation for organic feel
//     gsap.set('.char', { y: 40, rotate: gsap.utils.random(-6, 6, 1), opacity: 0 });
//     gsap.to('.char', {
//       y: 0,
//       rotate: 0,
//       opacity: 1,
//       ease: 'power3.out',
//       stagger: { each: 0.015, from: 'start' },
//       duration: 0.7,
//       delay: 0.1
//     });

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseover", () => {
    var image = e.getAttribute("data-image");
    fix.style.backgroundImage = `url(${image})`;
  });
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
    });
}
swiperAnimation()
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector(".fullscr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
          menu.style.opacity=22
            full.style.top = 0
            navimg.style.opacity = 1
            flag = 1
        } else {
             menu.style.opacity=22
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
menuAnimation()


   var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });