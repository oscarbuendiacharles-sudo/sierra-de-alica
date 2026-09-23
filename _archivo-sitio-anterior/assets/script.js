(function(){
'use strict';
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
},{threshold:.14, rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rise').forEach(function(el){ io.observe(el); });
})();
