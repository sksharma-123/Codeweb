 //progress bar // 
$('.neumorphic-slider__thumb').on('mousedown', function(){
  $(document).on('mousemove.mm', function(e){
    var new_value = 0;
    if (e.clientX < $('.neumorphic-slider').offset().left) {
      new_value = '0%';
    } else if (e.clientX > $('.neumorphic-slider').offset().left + $('.neumorphic-slider').width() - 10) {
      new_value = '100%';
    } else {
      new_value = ((e.clientX - $('.neumorphic-slider').offset().left) / ($('.neumorphic-slider').width() - 10) * 100).toFixed(0) + '%';
    }
    document.documentElement.style.setProperty('--value', new_value);
    $('.neumorphic-slider__popover').text(new_value);
  });
  $(document).on('mouseup.mu', function(){
    $(document).off('mousemove.mm');
    $('.neumorphic-slider__thumb').off('mouseup.mu');
  });
});