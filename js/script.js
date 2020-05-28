(function() {
    "use strict";

    var $projects = $(".projects");

    $projects.isotope({
        itemSelector: ".item",
        layoutMode: "fitRows"
    });

    $("ul.filters > li").on("click", function(e) {
        e.preventDefault();

        var filter = $(this).attr("data-filter");

        $("ul.filters > li").removeClass("active");
        $(this).addClass("active");

        $projects.isotope({ filter: filter });
    });

    $(".card")
        .mouseenter(function() {
            $(this)
                .find(".card-hover")
                .css({ top: "0" });
        })
        .mouseleave(function() {
            $(this)
                .find(".card-hover")
                .css({ top: "100%" });
        });
})(jQuery);

$(function() {
    $("#customers-testimonial").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

$(function() {
    $("#regional-bodies").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            786: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            786: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
});