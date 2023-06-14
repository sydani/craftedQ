$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        items: 1,
        center: false,
        nav: true,
        margin: 40,
        dots: false,
        loop: true,
        navText: ["<span class='carousel-control-prev-icon' aria-hidden='true'></span>", "<span class='carousel-control-next-icon' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});

$(window).scroll(function() {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 100) {
        $("#dashboardContainer").css( { "top": "75px", "transition-duration": ".25s" });
        $("header").addClass('header');
    } else {
        $("#dashboardContainer").css({ "top": "", "transition-duration": ".25s" });
        $("header").removeClass('header');
    }
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  })

  $(".scrollup").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  })