console.log("js for gbg hoops");

var programOfTheMonthState1 = "http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State1.jpg"
var programOfTheMonthState2 = "http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State2.jpg"

$(function(){
    addEventListener("load", function (){
        $("#ims").attr('src','http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State2.jpg');
        $("#test-slider2").append($( "<span><div class=\"row\">\n" +
            "    <div class=\"col-md-8 offset-md-2\">\n" +
            "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
            "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
            "            <p class=\"programName extraCondensedBlack\">Program of the Month</p>\n" +
            "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div></span>" ))

        // remove append if any of these classes are hovered
    });
    setTimeout(function() {
        $("#ims").attr('src','http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State1.jpg');
        $("#test-slider2").find( "span" ).last().remove();
    }, 10000)

    $("#ims").on({
        mouseenter: function(){
            $(this).attr('src','http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State2.jpg');
            $("#test-slider2").append($( "<span><div class=\"row\">\n" +
                "    <div class=\"col-md-8 offset-md-2\">\n" +
                "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
                "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
                "            <p class=\"programName extraCondensedBlack\">Program of the Month</p>\n" +
                "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
                "            </p>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div></span>" ))
        },
        mouseleave: function(){
            $(this).attr('src','http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State1.jpg');
            $("#test-slider2").find( "span" ).last().remove();
        }
    });

});

$("#program1").hover(
    function () {
        $( "#test-slider2" ).append( $( "<span><div class=\"row\">\n" +
            "    <div class=\"col-md-8 offset-md-2\">\n" +
            "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
            "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
            "            <p class=\"programName extraCondensedBlack\">Program 1 Test Example</p>\n" +
            "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div></span>" ) );
    }, function() {
        $("#test-slider2").find( "span" ).last().remove();
    });


$("#programOfTheMonth").hover(
    function () {
        $( "#test-slider2" ).append( $( "<span><div class=\"row\">\n" +
            "    <div class=\"col-md-8 offset-md-2\">\n" +
            "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
            "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
            "            <p class=\"programName extraCondensedBlack\">Program of the month</p>\n" +
            "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div></span>" ) );
    }, function() {
        $("#test-slider2").find( "span" ).last().remove();
    });

$("#program3").hover(
    function () {
        $( "#test-slider2" ).append( $( "<span><div class=\"row\">\n" +
            "    <div class=\"col-md-8 offset-md-2\">\n" +
            "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
            "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
            "            <p class=\"programName extraCondensedBlack\">Program Three</p>\n" +
            "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div></span>" ) );
    }, function() {
        $("#test-slider2").find( "span" ).last().remove();
    });

$("#program4").hover(
    function () {
        $( "#test-slider2" ).append( $( "<span><div class=\"row\">\n" +
            "    <div class=\"col-md-8 offset-md-2\">\n" +
            "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
            "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
            "            <p class=\"programName AcuminProCondensedMedium\">Program four</p>\n" +
            "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div></span>" ) );
    }, function() {
        $("#test-slider2").find( "span" ).last().remove();
    });

$("#program5").hover(
    function () {

        $( "#test-slider2" ).append( $( "<span><div class=\"row\">\n" +
            "    <div class=\"col-md-8 offset-md-2\">\n" +
            "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
            "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
            "            <p class=\"programName AcuminProCondensedMedium\">Program Five</p>\n" +
            "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div></span>" ) );
    }, function() {
        $("#test-slider2").find( "span" ).last().remove();
    });

$("#program6").hover(
    function () {
        $( "#test-slider2" ).append( $( "<span><div class=\"row\">\n" +
            "    <div class=\"col-md-8 offset-md-2\">\n" +
            "        <div class=\"tooltipbox\" id=\"ttb\">\n" +
            "            <p class=\"programDescription AcuminProExtraCondensedBlack\">\n" +
            "            <p class=\"programName AcuminProCondensedMedium\">Program Six</p>\n" +
            "            Description of workouts,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n" +
            "            </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div></span>" ) );
    }, function() {
        $("#test-slider2").find( "span" ).last().remove();
    });










