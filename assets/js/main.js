$('button').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500);
});

$('a').on('click', function () {
  $('html, body').animate({
    scrollTop: $("#elem").offset().top
  }, 1500);
  return false;
});
