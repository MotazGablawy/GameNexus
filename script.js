document.addEventListener("DOMContentLoaded", function () {
  var communityLi = document.querySelector(".main-nav li.community");

  communityLi.addEventListener("click", function (e) {
    e.preventDefault();
    communityLi.classList.toggle("show-mega-menu");
  });

  document.addEventListener("click", function (e) {
    if (!communityLi.contains(e.target)) {
      communityLi.classList.remove("show-mega-menu");
    }
  });

  var megaMenuLinks = document.querySelectorAll(".mega-menu a");
  megaMenuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.stopPropagation();
      communityLi.classList.remove("show-mega-menu");
    });
  });
});
