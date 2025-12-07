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

  // Header scrolled state (add .scrolled when page is scrolled)
  var header = document.querySelector('.site-header');
  function onScroll(){
    if(window.scrollY > 16) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Reveal on scroll for elements with .reveal
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('show');
          obs.unobserve(e.target);
        }
      });
    },{threshold:0.12});
    reveals.forEach(function(r){ obs.observe(r); });
  } else {
    // fallback: show all
    reveals.forEach(function(r){ r.classList.add('show'); });
  }

  // Smooth anchor scrolling with header offset and mobile menu close
  var internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(function(link){
    link.addEventListener('click', function(e){
      var targetId = this.getAttribute('href');
      if(targetId.length > 1 && document.querySelector(targetId)){
        e.preventDefault();
        var target = document.querySelector(targetId);
        var headerHeight = document.querySelector('.site-header')?.offsetHeight || 64;
        var offset = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
        window.scrollTo({top: offset, behavior: 'smooth'});
        // close mobile nav if open
        var nav = document.getElementById('nav-links');
        if(nav && nav.classList.contains('show')) nav.classList.remove('show');
      }
    });
  });
});
