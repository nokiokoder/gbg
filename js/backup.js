var programOfTheMonthState1 = "http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State1.jpg"
var programOfTheMonthState2 = "http://gbghoops.com/assetts/Home/WhatIsGBG/WhatIsGBG-ProgramThumb-ProgramOfTheMonth-State2.jpg"
var program6 = "<p class='programDescription AcuminProExtraCondensedBlack'>Program 6</p>"


$ ( ".carousel-item" ).on ( {
    var title = document.querySelectorAll('[data-title]');
    var desc = document.querySelectorAll('[data-description]');
    mouseenter: function () {
        $ ( ".default" ).empty ();
        $ ( ".inner" ).append ();
        console.log(title + desc);

    },
    mouseleave: function () {
        $ ( ".inner" ).empty ();
    }
} );

//
// $ ( "#program2" ).on ( {
//     mouseenter: function () {
//         $ ( ".default" ).empty ();
//         $ ( ".inner" ).append ( "<p class='programDescription AcuminProExtraCondensedBlack'>Program OF Month</p>" +
//             "<p class='programName AcuminProCondensedMedium'>BBBB BBBBBBB BBBBBBB BB BBBBBB BBBBBB Bb BBBB</p>" );
//     },
//     mouseleave: function () {
//
//         $ ( ".inner" ).empty ();
//     }
// } );
// $ ( "#program3" ).on ( {
//
//     mouseenter: function () {
//         $ ( ".default" ).empty ();
//         $ ( ".inner" ).append ( "<p class='programDescription AcuminProExtraCondensedBlack'>Program 3</p>" +
//             "<p class='programName AcuminProCondensedMedium'>CCCC CC CCCC C CCCCCC C CC  CC C  CCCCCCCCC C C C C CCCCCCCC  CCC</p>" );
//     },
//     mouseleave: function () {
//         $ ( ".inner" ).empty ();
//     }
// } );
// $ ( "#program4" ).on ( {
//     mouseenter: function () {
//         $ ( ".default" ).empty ();
//         const programTitle = $ ( "#program4" ).attr ( "data-title" );
//         const programDescription = $ ( "#program4" ).attr ( "data-description" );
//         console.log ( programTitle + "" + programDescription );
//         $ ( ".inner" ).append ( "<p class='programDescription AcuminProExtraCondensedBlack'>Program 4</p>" +
//             "<p class='programName AcuminProCondensedMedium'>DDD D D DDDDDDD DDDD DDDDDDD D DDDDDDDDDD D DDDDDDDDD D DDDDDDDDD DDDDDD DD</p>" );
//     },
//     mouseleave: function () {
//         console.log ( "this works with the mouse off function" );
//         $ ( ".inner" ).empty ();
//     }
// } );
// $ ( "#program5" ).on ( {
//     mouseenter: function () {
//         console.log ( "this works with the mouse on function" );
//         $ ( ".default" ).empty ();
//         $ ( ".inner" ).append ( "<p class='programDescription AcuminProExtraCondensedBlack'>Program 5</p>" +
//             "<p class='programName AcuminProCondensedMedium'>EE EEE EEEEEE EEEEE EEEEEE EEEEEEEE E E EEEEEEEEE EEEEEEEE EEEE</p>" );
//     },
//     mouseleave: function () {
//         console.log ( "this works with the mouse off function" );
//         $ ( ".inner" ).empty ();
//         $ ( ".default" ).append ( "<p class=\"programDescription AcuminProExtraCondensedBlack\">Program Of The Month</p>\n" +
//             "                            <p class=\"programName AcuminProCondensedMedium\">ZZZ ZZ Z ZZ   ZZZZZZZ Z ZZ     ZZZZZZ ZZZ" )
//
//     }
// } );
// $ ( "#program6" ).on ( {
//     mouseenter: function () {
//         $ ( ".default" ).empty ();
//         console.log ( "this works with the mouse on function" );
//         $ ( ".inner" ).append ( program6 );
//     },
//     mouseleave: function () {
//         console.log ( "this works with the mouse off function" );
//         $ ( ".inner" ).empty ();
//     }
// } );


$ ( function () {
    $ ( "#monthly" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/BuyNow/BuyNow-Btn-Monthly-State2' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/BuyNow/BuyNow-Btn-Monthly-State1' );
        }
    } );
    $ ( "#yearly" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/BuyNow/BuyNow-Btn-Yearly-State2' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/BuyNow/BuyNow-Btn-Yearly-State1' );
        }
    } );

    // socials
    $ ( "#instagram" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-IG-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-IG-State1.jpg' );
        }
    } );
    $ ( "#twitter" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Twitter-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Twitter-State1.jpg' );
        }
    } );
    $ ( "#facebook" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-FB-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-FB-State1.jpg' );
        }
    } );
    $ ( "#youtube" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Youtube-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://www.gbghoops.com/assetts/Home/Footer/Footer-Btn-Youtube-State1.jpg' );
        }
    } );

} );

$ ( function () {
    $ ( "#antDavis" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-AnthonyDavis-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-AnthonyDavis-State1.jpg' );
        }
    } );
    $ ( "#jrueHoliday" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-JrueHoliday-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-JrueHoliday-State1.jpg' );
        }
    } );
    $ ( "#mikeJames" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-MikeJames-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-MikeJames-State1.jpg' );
        }
    } );
    $ ( "#frankJackson" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-FrankJackson-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-FrankJackson-State1.jpg' );
        }
    } );
    $ ( "#jahlilOkafor" ).on ( {
        mouseenter: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-JahlilOkafor-State2.jpg' );
        },
        mouseleave: function () {
            $ ( this ).attr ( 'src', 'http://gbghoops.com/assetts/Home/Testimonials/Testimonials-Thumb-JahlilOkafor-State1.jpg' );
        }
    } );

} );










