$(window).on("load", function () {
  gridAdjust(".info-speaker-slider .card");
});

$(window).resize(function () {
  gridAdjust(".info-speaker-slider .card");
});

$(document).ready(function () {
  gridAdjust(".info-speaker-slider .card");
});

$(".hero-banner-slider").slick({
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
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(window).on("scroll", function () {
  var e = $(window).scrollTop();

  if (e > 0) {
    $("#mainHeader").addClass("bg");
  } else {
    $("#mainHeader").removeClass("bg");
  }
});

function gridAdjust(targertSteing) {
  var targertHight = $(targertSteing);
  targertHight.css("height", "auto");
  var heights = [];
  targertHight.each(function () {
    var elem = $(this);
    var height = elem.outerHeight();
    heights.push(height);
  });
  heights = heights.sort(function (a, b) {
    return b - a;
  });
  var tallest = heights[0];
  targertHight.css("height", tallest + "px");
}

// Off canvas sidebar
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");
  var offcanvasElement = document.getElementById("offcanvasNavbar");
  var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      bsOffcanvas.hide();
    });
  });
});

// Nav & For Slider
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: true,
  centerMode: false,
  autoplay: true,
  pauseOnHover: false,
  focusOnSelect: true,
  appendArrows: $(".info_testmonial_arrows"),
  prevArrow:
    '<div class="slick-nav news__arrow news__arrow_dir_left"><i class="fa-solid fa-chevron-left testmonial-left-arrow"></i></div>',
  nextArrow:
    '<div class="slick-nav news__arrow news__arrow_dir_right"><i class="fa-solid fa-chevron-right testmonial-right-arrow"></i></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

// Speakers Slider
$(document).ready(function () {
  // Initialize Slick but keep autoplay OFF by default
  $(".info-speaker-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: false,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    appendArrows: $(".info_speaker_arrows"),
    prevArrow:
      '<div class="slick-nav news__arrow news__arrow_dir_left"><i class="fa-solid fa-chevron-left speaker-left-arrow"></i></div>',
    nextArrow:
      '<div class="slick-nav news__arrow news__arrow_dir_right"><i class="fa-solid fa-chevron-right speaker-right-arrow"></i></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: false,
        },
      },
    ],
  });

  let slider = $(".info-speaker-slider");

  // Intersection Observer
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Slider visible → start autoplay
          slider.slick("slickPlay");
        } else {
          // Slider not visible → stop autoplay
          slider.slick("slickPause");
        }
      });
    },
    {
      threshold: 0.4, // % of section visible
    }
  );

  observer.observe(document.querySelector("#speakerSlider"));
});

// Light Box Gallery //
// query selectors
const lightboxEnabled = document.querySelectorAll(".lightbox_img_wrap");
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxBtns = document.querySelectorAll(".lightbox-btn");
const lightboxBtnRight = document.querySelector("#right");
const lightboxBtnLeft = document.querySelector("#left");
const close = document.querySelector("#close");
let activeImage;
// Functions
const showLightBox = () => {
  lightboxContainer.classList.add("active");
};

const hideLightBox = () => {
  lightboxContainer.classList.remove("active");
};

const setActiveImage = (image) => {
  lightboxImage.src = image.dataset.imgsrc;
  activeImage = lightboxArray.indexOf(image);
};

const transitionSlidesLeft = () => {
  lightboxBtnLeft.focus();
  $(".lightbox-image").addClass("slideright");
  setTimeout(function () {
    activeImage === 0
      ? setActiveImage(lightboxArray[lastImage])
      : setActiveImage(lightboxArray[activeImage - 1]);
  }, 250);

  setTimeout(function () {
    $(".lightbox-image").removeClass("slideright");
  }, 500);
};

const transitionSlidesRight = () => {
  lightboxBtnRight.focus();
  $(".lightbox-image").addClass("slideleft");
  setTimeout(function () {
    activeImage === lastImage
      ? setActiveImage(lightboxArray[0])
      : setActiveImage(lightboxArray[activeImage + 1]);
  }, 250);
  setTimeout(function () {
    $(".lightbox-image").removeClass("slideleft");
  }, 500);
};

const transitionSlideHandler = (moveItem) => {
  moveItem.includes("left") ? transitionSlidesLeft() : transitionSlidesRight();
};

// Event Listeners
lightboxEnabled.forEach((image) => {
  image.addEventListener("click", (e) => {
    showLightBox();
    setActiveImage(image);
  });
});
lightboxContainer.addEventListener("click", () => {
  hideLightBox();
});
close.addEventListener("click", () => {
  hideLightBox();
});
lightboxBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    transitionSlideHandler(e.currentTarget.id);
  });
});

lightboxImage.addEventListener("click", (e) => {
  e.stopPropagation();
});

$(document).ready(function () {
  // Show More clicked
  $("#showMoreBtn").on("click", function () {
    $(".hidden-gallery-item").slideDown(300); // Show all hidden images
    $(".show-more-item").hide(); // Hide Show More tile
    $("#showLessWrapper").show(); // Show "Show Less"
  });

  // Show Less clicked
  $("#showLessBtn").on("click", function () {
    $(".hidden-gallery-item").slideUp(300); // Hide images again
    $("#showLessWrapper").hide(); // Hide Show Less button
    $(".show-more-item").show(); // Show More tile returns at 8th slot
  });
});

// Youtube Video Player
let players = [];

function onYouTubeIframeAPIReady() {
  // Initialize first video
  players.push(
    new YT.Player("youtube-player-1", {
      videoId: "5t8ZVRx6W6w",
      playerVars: {
        autoplay: 0,
        rel: 0,
        controls: 1,
        mute: 0,
      },
    })
  );

  observeVideoRows();
}

function observeVideoRows() {
  const rows = document.querySelectorAll(".video-row");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const rowIndex = Array.from(rows).indexOf(entry.target);
        if (players[rowIndex]) {
          if (entry.isIntersecting) {
            players[rowIndex].playVideo();
          } else {
            players[rowIndex].pauseVideo();
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  rows.forEach((row) => observer.observe(row));
}

// Load YouTube API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.getElementsByTagName("script")[0].parentNode.insertBefore(tag, document.getElementsByTagName("script")[0]);
