// Small interactive helpers: menu toggle and year
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav-links');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('show');
    });
  }
  var year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
});
