$(window).on('load', function() {
  $('main').masonry({
    // options
    itemSelector: 'section',
    columnWidth: 400,
    transitionDuration: 0,
    gutter: 64,
  });
  $('.main-large').masonry({
    // options
    itemSelector: 'section',
    columnWidth: 550,
    transitionDuration: 0,
    gutter: 64,
  });
});
