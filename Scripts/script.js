
let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
// moves the navbar up or down if prevscrollpos is bigger or smaller
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navbar').style.top = '0';
  } else {
    document.querySelector('.navbar').style.top = '-200px';
  }
  prevScrollpos = currentScrollPos
};

// Initialize skill progress bars on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.skill-progress').forEach(progress => {
    const level = progress.getAttribute('data-level');
    progress.style.setProperty('--progress', level);
  });
});