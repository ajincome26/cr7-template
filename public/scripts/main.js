"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var headerToggle=document.querySelector(".header-toggle"),headerMenu=document.querySelector(".header-menu"),wedoIcons=(headerToggle.addEventListener("click",function(e){headerMenu.classList.toggle("menu-show"),e.target.classList.toggle("fa-times"),e.target.style.color="#95e1d3"}),document.addEventListener("click",function(e){headerMenu.contains(e.target)||e.target.matches(".header-toggle")||(headerMenu.classList.remove("menu-show"),headerToggle.classList.remove("fa-times"))}),document.querySelectorAll(".wedo-icon")),wedoMedia=document.querySelector(".wedo-media");[].concat(_toConsumableArray(wedoIcons)).forEach(function(e){return e.addEventListener("click",function(e){var t=e.target.parentNode.parentNode.querySelector(".wedo-item_box"),r=e.target.parentNode.parentNode.querySelector(".wedo-item_header");r.style.borderBottomColor="#ccc",t.style.height=t.scrollHeight+"px",e.target.classList.toggle("fa-angle-up"),t.classList.toggle("wedo-show"),t.classList.contains("wedo-show")||(r.style.borderBottomColor="transparent",t.style.height="0px")})}),$(document).ready(function(){$(".quote-list").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})}),$(document).ready(function(){$(".avatar-list").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})});