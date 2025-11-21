  $(window).on('load', function() {
    gridAdjust(".info-speaker-slider .card");

  });

  $(window).resize(function() {
    gridAdjust(".info-speaker-slider .card");

  });

  $(document).ready(function() {
    gridAdjust(".info-speaker-slider .card");


  });  
  
  $('.hero-banner-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    fade: true,
    speed: 800, // Increase transition duration for smoother effect
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
    ]
  });

$(window).on("scroll", function() {
  var e = $(window).scrollTop();

  if (e > 0) {
      $("#mainHeader").addClass("bg");
  } else {
      $("#mainHeader").removeClass("bg");
  }
});


function gridAdjust(targertSteing) {
    var targertHight = $(targertSteing);
    targertHight.css('height', 'auto');
    var heights = [];
    targertHight.each(function() {
        var elem = $(this);
        var height = elem.outerHeight();
        heights.push(height);
    });
    heights = heights.sort(function(a, b) {
        return b - a
    });
    var tallest = heights[0];
    targertHight.css('height', tallest + 'px');
}