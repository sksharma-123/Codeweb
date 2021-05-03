var onEnterViewPort = function(entries, observer) {
  entries.forEach(function(entry) {
    console.log(entry);
    // Fade in when we enter the viewport
    if (entry.intersectionRatio !== 0) {
      entry.target.classList.add('card-shown');
    }
  })
}

var observer =  new IntersectionObserver(onEnterViewPort , {
});

var hidemes= document.querySelectorAll('.card');
for(var i = 0; i < hidemes.length; i++) {
  observer.observe(hidemes[i]);
}