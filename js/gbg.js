$(function () {
    slider.init("test-slider1", { numActiveItems: 3 });
    slider.init("test-slider2", { indicatorLinks: "true", numActiveItems: 5, itemInFocus: 3 });
    initHoverEventProgram();
    initHoverEventTestimonial();

    $("#test-slider2").on("changeSlider", function () {
        var $focusedEl = $(this).find(".carousel-item.focused");
        populateProgramInfo($focusedEl);
        initHoverEventProgram();
    });

    $("#test-slider1").on("changeSlider", initHoverEventTestimonial);

    function initHoverEventProgram() {
        $("#test-slider2 .carousel-item")
            .off("mouseenter")
            .off("mouseleave")
            .on("mouseenter", function () {
                $("#test-slider2").addClass("hovered");
                populateProgramInfo($(this));
            })
            .on("mouseleave", function () {
                $("#test-slider2").removeClass("hovered");
                var $focusedEl = $("#test-slider2 .carousel-item.focused");
                populateProgramInfo($focusedEl);
            });
    }

    function populateProgramInfo ($program) {
        var title = $program.data().title;
        var description = $program.data().description;
        var html =
            "<h3 class='programDescription AcuminProExtraCondensedBlack letterSpaceOne'>" +
            title +
            "</h3>" +
            "<p class='programName AcuminProCondensedMedium'>" +
            description +
            "</p>";
        $(".inner").html(html);
    }

    function initHoverEventTestimonial() {
        $("#test-slider1 .carousel-item")
            .on("mouseenter", function () {
                $("#test-slider1").addClass("hovered");
            })
            .on("mouseleave", function () {
                $("#test-slider1").removeClass("hovered");
            });
    }

    var htmlAD = $("#AD").html(),
        htmlJH = $("#JH").html(),
        htmlFJ = $("#FJ").html(),
        htmlMJ = $("#MJ").html(),
        htmlJO = $("#JO").html();

    $(".modal, .close").on("click", function () {
        $("#myModal").hide();

        $(".close,.modal").click(function () {
            $("#AD").html(htmlAD);
            $("#JH").html(htmlJH);
            $("#FJ").html(htmlFJ);
            $("#MJ").html(htmlMJ);
            $("#JO").html(htmlJO);
        });
    });

    $("#test-slider1 .carousel-item").on("click", function () {
        var targetSelector = $(this).data().target;
        $(".mySlides").hide();
        $(targetSelector).show();
        $("#myModal").show();
    });

    function positionSliderControls () {
        $(".carousel.slider").each(function (index, slider) {
            var gap = 10; // gap between carousel inner and carousel controls in px
            var $slider = $(slider);
            var $inner = $slider.find(".carousel-inner");
            var $items = $slider.find(".carousel-item.active");
            var $prev = $slider.find(".carousel-control-prev");
            var $next = $slider.find(".carousel-control-next");

            var innerWidth = $inner.width();

            var itemsWidth = 0,
                marginLeft = 0,
                marginRight = 0;
            $items.each(function (index, item) {
                var width = $(item).width();
                marginLeft = parseFloat($(item).css("margin-left"));
                marginRight = parseFloat($(item).css("margin-right"));
                itemsWidth += (width + marginLeft + marginRight);
            });
            itemsWidth -= (marginLeft + marginRight);

            var effectiveWidth = innerWidth > itemsWidth ? itemsWidth : innerWidth;
            var controlWidth = $prev.width();
            var translateAmount = (effectiveWidth / 2) + controlWidth + gap;

            $prev.css("transform", "translateX(-" + translateAmount + "px)");
            $next.css("transform", "translateX(" + translateAmount + "px)");
        });
    }

    positionSliderControls();
    $(window).on("resize", positionSliderControls);

    // socials
    $("#instagram").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-IG-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-IG-State1.jpg");
        },
    });
    $("#twitter").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Twitter-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Twitter-State1.jpg");
        },
    });
    $("#facebook").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-FB-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-FB-State1.jpg");
        },
    });
    $("#youtube").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Youtube-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Youtube-State1.jpg");
        },
    });
    //socials for mobile
    // socials
    $("#instagramM").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-IG-Mobile-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-IG-Mobile-State1.jpg");
        },
    });
    $("#twitterM").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Twitter-Mobile-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Twitter-Mobile-State1.jpg");
        },
    });
    $("#facebookM").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-FB-Mobile-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-FB-Mobile-State1.jpg");
        },
    });
    $("#youtubeM").on({
        mouseenter: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Youtube-State2.jpg");
        },
        mouseleave: function () {
            $(this).attr("src", "http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Youtube-State1.jpg");
        },
    });
    //nokio added this
    var i = 2; //index of the panel
    $('#programOfTheMonth').on('click', function() {
        $('#test-slider2').carousel(i);
        console.log("clicked for middle item");
        location.reload();
    });
});



