var backgroundColor = "#F5EFE8";
var slides = document.querySelectorAll("section");
var container = document.querySelector("#panelWrap");
var dots = document.querySelector(".dots");
var oldSlide = 0;
var activeSlide = 0;
var navDots = [];
var dur = 0.5;

for (let i = 0; i < slides.length; i++) {
  TweenMax.set(slides[i], { backgroundColor });
  var newDot = document.createElement("div");
  newDot.className = "dot";
  newDot.index = i;
  navDots.push(newDot);
  newDot.addEventListener("click", slideAnim);
  dots.appendChild(newDot);
}

TweenMax.set(".dots", {yPercent:-50});
TweenMax.set(navDots[0], {backgroundColor:"#2D4159"});

var prevTime = new Date().getTime();

function slideAnim(e) {
  var curTime = new Date().getTime();
  var timeDiff = curTime - prevTime;
  prevTime = curTime;
  if(!timeDiff || timeDiff <= 200){
    return
  }

  if (TweenMax.isTweening( container )) {return;}
  
  oldSlide = activeSlide;
  if (this.className === "dot") {
    activeSlide = this.index;
  } else {
    activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
    activeSlide = activeSlide < 0 ? 0 : activeSlide;
    activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  }
  if (oldSlide === activeSlide) {
    return;
  }
  TweenMax.to("#panelWrap", dur, { scrollTo: slides[activeSlide] });
  TweenMax.to(navDots[activeSlide], dur, { backgroundColor:"#2D4159", ease:Linear.easeNone });
  TweenMax.to(navDots[oldSlide], dur, { backgroundColor:"#fff", ease:Linear.easeNone });
}

window.addEventListener("wheel", slideAnim);
window.addEventListener("resize", newSize);

function newSize() {
 TweenMax.set(container, {scrollTo:slides[activeSlide]}); 
}

