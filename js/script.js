// Make the navbar is fixed on top when scroll down
$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});
