(function(){
  document.documentElement.classList.remove('no-js');
  var header=document.querySelector('.site-header');
  function onScroll(){ if(header) header.classList.toggle('scrolled', window.scrollY>20); }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  var btn=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
  }
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){io.observe(el);});
  } else { els.forEach(function(el){el.classList.add('in');}); }
  var y=document.querySelectorAll('[data-year]'); for(var i=0;i<y.length;i++) y[i].textContent=new Date().getFullYear();
})();
