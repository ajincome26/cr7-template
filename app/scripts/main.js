// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const headerToggle = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");
headerToggle.addEventListener("click", function (e) {
  headerMenu.classList.toggle("menu-show");
  e.target.classList.toggle("fa-times");
  e.target.style.color = "#95e1d3";
});
document.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerMenu.classList.remove("menu-show");
    headerToggle.classList.remove("fa-times");
  }
});

const wedoIcons = document.querySelectorAll(".wedo-icon");
const wedoMedia = document.querySelector(".wedo-media");
[...wedoIcons].forEach((item) =>
  item.addEventListener("click", function (e) {
    const wedoItemBox =
      e.target.parentNode.parentNode.querySelector(".wedo-item_box");
    const wedoItemHeader =
      e.target.parentNode.parentNode.querySelector(".wedo-item_header");
    wedoItemHeader.style.borderBottomColor = "#ccc";
    wedoItemBox.style.height = `${wedoItemBox.scrollHeight}px`;
    e.target.classList.toggle("fa-angle-up");
    wedoItemBox.classList.toggle("wedo-show");
    if (!wedoItemBox.classList.contains("wedo-show")) {
      wedoItemHeader.style.borderBottomColor = "transparent";
      wedoItemBox.style.height = "0px";
    }
  })
);

// Slick slide quote
$(document).ready(function () {
  $(".quote-list").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false
          }
        }
      ]
  });
});

// Slick slider avatar
$(document).ready(function(){
  $('.avatar-list').slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false
          }
        }
      ]
  });
});
