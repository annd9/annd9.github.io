$(function() {
  
    $(".menu-link").click(function(e) {
      e.preventDefault();
      
      $(".menu-overlay").toggleClass("open");
      $(".menu").toggleClass("open");
  
    });
      
  });

  var animation = bodymovin.loadAnimation({
  container: document.getElementById("animation_advanced"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "animation_advanced.json"
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById("animation_beginner"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation_beginner.json"
  });

  var animation = bodymovin.loadAnimation({
    container: document.getElementById("animation_aerial"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation_aerial.json"
  });