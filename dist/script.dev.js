"use strict";

var prevScrollpos = window.scrollY;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navbar').style.top = '0';
  } else {
    document.querySelector('.navbar').style.top = '-200px';
  }

  prevScrollpos = currentScrollPos;
};