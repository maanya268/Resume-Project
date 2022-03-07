var navMenuAnchorTags = document.querySelectorAll("#nav-list a");

console.log(navMenuAnchorTags);

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();

    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    // console.log(targetSectionID);
    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 60);
    }, 10);
  });
}

var progressBars = document.querySelectorAll(".skills-progress > div");
var skillContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animation = false;

function initialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
}

initialiseBars();

function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval();
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 3);
  }
}

function checkScroll() {
  // we have to check whether the skill container is visible or not
  var coordinates = skillContainer.getBoundingClientRect();
  if (!animation && coordinates.top < window.innerHeight) {
    animation = true; //we get to know that the skills container is visible
    console.log("skills section is visible");
    fillBars();
  }
}
