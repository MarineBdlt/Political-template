// Template Name: Html for Leader/Candidate/Campaign Politic - Bootstrap 4 | Political
// Author: Iwthemes //// https://themeforest.net/user/iwthemes?ref=iwthemes
// Name File: theme-main.js
// Last Update 1.6
// Email: support@iwthemes.com
// Copyright: (C) 2018


$(document).ready(function($) {
	'use strict';

    //TopBar News
    $.simpleTicker($("#newsticker-roll"),{'effectType':'roll'});

    //Carousel of goals
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 5,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            769:{
                items:3
            },
            1025:{
                items:5
            }
        }
    })

    //Video Play inside .html (see the index.html)
    $('.video-preview').click(function(){
       var video = '<iframe src="https://www.youtube.com/embed/e9j4_tghBlc?rel=0&autoplay=1" class="video-iframe"></iframe>';
        $(this).replaceWith(video);
    });

    //Instagram API
    var feed = new Instafeed({
        get: 'user',
        userId: '558761032',
        limit: 6,
        resolution: 'standard_resolution',
        template: '<div class="insta-items"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
        accessToken: '558761032.1677ed0.983b2acc9e964ed88a2d69554d03955f',
    });

    feed.run();

    //Load Page Preview
    $(window).on('load', function() { // makes sure the whole site is loaded
      $('body').addClass('body--loaded');
    });

    //Scroll inside Page
    $('a.scroll').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        scrollToDiv(elWrapped,40);
        return false;
    });
    function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
        $('body,html').animate({
                scrollTop: totalScroll
        }, 500);
    }

    //Mobile Menu
    $(function() {
      function close() {
        $('body').removeClass('has-active-menu');
        setTimeout(function(){
          $('.nav-slider').removeClass('toggling');
        }, 500);
      }

      function open() {
        $('body').addClass('has-active-menu');
        $('.nav-slider').addClass('toggling');
      }

      $('.nav-mask').click(close);
      $('.navbar-toggler').click(open);
    });

    //Go to top from bottom page
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    //Animation when the site is Scrolled
     $(document).ready(function($) {
        var $animation_elements = $('.animation-element');
        var $window = $(window);
        function check_if_in_view() {
          var window_height = $window.height();
          var window_top_position = $window.scrollTop();
          var window_bottom_position = (window_top_position + window_height);

          $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                  setTimeout(function(){
                    $element.addClass('in-view');
                  }, 500);
            } else {
                  $element.removeClass('in-view');
            }
          });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    });
    
    //Carousel located on blog examples
    $('.carousel').carousel();
});

