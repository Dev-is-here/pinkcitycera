$(document).on("ready", function () {
  //Video
  var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
  var is_explorer = navigator.userAgent.indexOf("MSIE") > -1;
  var is_firefox = navigator.userAgent.indexOf("Firefox") > -1;
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
  var is_windows = navigator.userAgent.toLowerCase().indexOf("windows") > -1;

  if (is_safari && !is_chrome) {
    //alert('Safari');
    $(".videoTGL").remove();
    $(".proVideobg").css("opacity", "1 !important");
  }

  if ((is_explorer, is_firefox, is_windows, is_chrome)) {
    $(".videoIntro").append('<div class="videoTGL"></div>');
  } else {
  }

  $(".video_holder").on("click", "#my-video", function () {
    $(".proVideobg").toggleClass("proVideobg-deactive");
    $(".videoCtrl").toggleClass("videoCtrl-0");
    $(".bgVideo").toggleClass("proVideo-active");
  });

  //Video

  function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
      return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
    else return 0; //It is not IE
  }
  ///

  if (GetIEVersion() > 0) {
    alert("This is IE " + GetIEVersion());
    $(".BroUpdate").addClass("UpdaTE");
  } else {
    //salert("This is not IE.");
    // $('.BroUpdate').addClass('UpdaTE');
  }

  $(".timeLine-2:nth-child(odd)")
    .children("div:first-child")
    .addClass("capasmleft");
  $(".timeLine-2:nth-child(even)")
    .children("div:first-child")
    .addClass("capasmright");

  if ($(window).width() < 1023) {
    $(".proVideo ").remove();
  }

  $(".formSubmit, .f-screen").click(function () {
    $(".f-screen").toggle();
  });
  $("#google_translate_element").click(function () {
    $("body").addClass("trancy");
  });
  $(".productImgHolder").hover(
    function () {
      $(this).addClass("productImgHolder-active");
    },
    function () {
      $(this).removeClass("productImgHolder-active");
    }
  );
  /* Demo purposes only */
  $("figure").mouseleave(function () {
    $(this).removeClass("hover");
  });
  //$('html').on("contextmenu",function(e){return false;});
  //$('.logo .col-all-12').click(function(){
  //$('header').toggleClass('header-active');
  //});

  $(".dent-tab").children("li").addClass("underLine");

  $(window).on("scroll", function () {
    //backToTop();
  });
  $("#back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  //$('.dentTab li h3').on('click', function(e) {

  //    $('html,body').animate({

  //        scrollTop: $(window).height() - $(this).outerHeight(true) - 100
  //    }, 700);
  //});

  $(".missionClick").click(function () {
    $(".misHolder").slideToggle();
    $(".visHolder").slideUp();
  });
  $(".visionClick").click(function () {
    $(".visHolder").slideToggle();
    $(".misHolder").slideUp();
  });

  $(".event-active").click(function () {
    $(".event").slideUp(0);
    $(this)
      .parent("div")
      .parent("div")
      .parent("div")
      .children(".event ")
      .slideToggle(0);
  });
  $("body").on("contextmenu", function (e) {
    //alert('ooops!!!!');
    //return false;
  });
  $(".mainIntro span").click(function () {
    $(".fullDetail").slideToggle();
  });
  //   $('.dent-tab li').click(function() {
  //      $('.tabcontent').toggleClass('dentTabActive');
  //      $('.dent-tab li h3').toggleClass('dentTabActive-2');
  //      $(this).children('div').toggleClass('dentTabActive');
  //      $(this).children('h3').toggleClass('dentTabActive-2');
  //  });

  //$('.dent-tab li').click(function(){
  //	$(this).toggleClass('dentTabActive');
  //});
  $(".subA").click(function () {
    $(".subA").removeClass("dentTabActive-2");
    var trigger = $(this);
    trigger.children("").text($("#accordion div").is(":visible") ? "+" : "-");
    if (false == $(this).next().is(":visible")) {
      $(this).addClass("dentTabActive-2");
      $("#accordion div").slideUp(300);
      //$('html,body').animate({
      //scrollTop: $(this).offset().top - ($(window).height() - $(this).outerHeight(true)) / 2
      //}, 700);
    }
    $(this).next().slideToggle(300);
  });
  $("#accordion div:eq(0)").slideDown();

  if ($(window).width() <= 767) {
    $(".megaMenu").click(function (e) {
      //alert('');
      $(".megaMenu").removeClass("megaMenu-active");
      $("nav").slideUp(0);
      $(this).children("nav").slideDown(0);
      $(this).addClass("megaMenu-active");
    });
  }

  if ($(window).width() >= 767) {
    $(".megaMenu").hover(
      function (e) {
        $(this).children("nav").slideDown(0);
        $(this).addClass("megaMenu-active");
      },
      function () {
        $(this).children("nav").slideUp(0);
        $(this).removeClass("megaMenu-active");
      }
    );
  }
  if ($(window).width() <= 767) {
    //alert('<=767px');
    //$('.megaMenu').click(function(e) {
    //	alert();
    //$(this).children('nav').slideToggle(300);
    //$(this).toggleClass('megaMenu-active');
    //});
  }
  var owl = $("#owl-demo3");
  owl.owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: true,
    autoplayHoverPause: true,
    autoHeight: true,
    transitionStyle: "fade",
  });
  var owl = $("#owl-demo4");
  owl.owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: true,
  });
  var owl = $("#owl-demo9");
  owl.owlCarousel({
    itemsCustom: [
      [0, 1],
      [450, 2],
      [700, 4],
      [1600, 6],
    ],
    // singleItem : true,
    autoPlay: true,
    navigation: false,
  });
  var owl = $("#owl-demo2");
  owl.owlCarousel({
    itemsCustom: [
      [0, 1],
      [450, 2],
      [700, 5],
      [1600, 6],
    ],
    autoPlay: true,
    // navigation : true
  });
  var owl = $("#owl-demo8");
  owl.owlCarousel({
    itemsCustom: [[0, 1]],
    autoPlay: true,
    singleItem: true,
    // navigation : false,
    transitionStyle: "backSlide",
  });

  var owl = $("#owl-demo5");
  owl.owlCarousel({
    itemsCustom: [
      [0, 1],
      [450, 2],
      [700, 4],
      [1600, 5],
    ],
    autoPlay: true,
    // navigation : true
  });
  var owl = $("#owl-demo6, #owl-demo7");
  owl.owlCarousel({
    itemsCustom: [
      [0, 2],
      [450, 5],
      [700, 8],
      [1600, 10],
    ],
    autoPlay: true,
    // navigation : true
  });
  var owl = $("#owl-demo");
  owl.owlCarousel({
    navigation: true,
    singleItem: true,
    transitionStyle: "fadeUp",
    autoPlay: 10000,
  });
  var owl = $("#owl-demo10");
  owl.owlCarousel({
    navigation: true,
    singleItem: true,
    transitionStyle: "fadeUp",
    autoPlay: true,
  });

  // backSlide

  var owl = $("#owl-demo2");
  owl.owlCarousel({
    autoPlay: true,
  });

  //Select Transtion Type
  $("#transitionType").change(function () {
    var newValue = $(this).val();

    //TransitionTypes is owlCarousel inner method.
    owl.data("owlCarousel").transitionTypes(newValue);

    //After change type go to next slide
    owl.trigger("owl.next");
  });

  $(".sm-menuopen").on("click", function () {
    //alert();
    $("body").toggleClass("menu-over");
    $(".sm-menu").toggle();
  });
});
$(window).scroll(function () {
  $(".productIntro").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("productIntro-active");

      $(".interoHead")
        .delay(1000)
        .queue(function () {
          $(this).addClass("interoHead-active");
        });
    }
  });
});

$(window).scroll(function () {
  $(".proVideo").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("proVideo-active");
      $(".videoIntro")
        .delay(1000)
        .queue(function () {
          $(this).addClass("videoIntro-active");
        });
    }
  });
});

$(window).scroll(function () {
  $(".story").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 100) {
      //alert();
      $(".main-menu").addClass("");
    } else {
      $(".main-menu").removeClass("");
    }
  });

  if ($(window).width() <= 767) {
    $(".innerHead ").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 100) {
        //alert();
        $(".logo").addClass("");
      } else {
        $(".logo").removeClass("");
      }
    });
  }

  $(".story").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 100) {
      $(this).addClass("");
    } else {
      $(this).removeClass("");
    }
  });
  $(".timeline").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 400) {
      $(this).addClass("");
    } else {
      $(this).removeClass("");
    }
  });

  $(".storyImgAnimation").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 600) {
      $(this).addClass("");
    } else {
      $(this).removeClass("");
    }
  });
});

$(window).scroll(function () {
  $(".story .timeline:last-child").each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 400) {
      $(".story").addClass("");
    } else {
      $(".story").removeClass("");
    }
  });
});

$(window).scroll(function () {
  $(".capa").each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 600) {
      $(".capa").addClass("");
    } else {
      $(".capa").removeClass("");
    }
  });
});

$(window).scroll(function () {
  $(".tabcontent").each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 600) {
      $(".tabcontent").addClass("");
    } else {
      $(".tabcontent").removeClass("");
    }
  });
});
//
//	$(window).scroll(function() {
//			$('.CoAmtn').each(function(){
//
//		var imagePos = $(this).offset().top;
//	var topOfWindow = $(window).scrollTop();
//			if (imagePos < topOfWindow+500) {
//				$('.CoAmtn').addClass("");
//			}else{
//			$('.CoAmtn').removeClass("CoAmtn-active");
//			}
//
//		});
//		});
//
//
$(window).scroll(function () {
  $(".CoAmtn").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("");
    }
  });
});

$(".enentCtrl").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop:
        $(window).height() -
        $(this).parent(".eventsHolder").outerHeight() -
        150,
    },
    700
  );
});
