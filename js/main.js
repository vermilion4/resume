const scrollElements=document.querySelectorAll('.js-scroll');const elementInView=(el,dividend=1)=>{const elementTop=el.getBoundingClientRect().top;return(elementTop<=(window.innerHeight||document.documentElement.clientHeight)/dividend)};const elementOutofView=(el)=>{const elementTop=el.getBoundingClientRect().top;return(elementTop>(window.innerHeight||document.documentElement.clientHeight))};const displayScrollElement=(element)=>{element.classList.add('scrolled')};const hideScrollElement=(element)=>{element.classList.remove('scrolled')};const handleScrollAnimation=()=>{scrollElements.forEach((el)=>{if(elementInView(el,1.25)){displayScrollElement(el)}else if(elementOutofView(el)){hideScrollElement(el)}})};window.addEventListener('scroll',()=>{handleScrollAnimation()});(function($){'use strict';var cfg={scrollDuration:200,},$WIN=$(window);var doc=document.documentElement;doc.setAttribute('data-useragent',navigator.userAgent);var ssPreloader=function(){$('html').addClass('ss-preload');$WIN.on('load',function(){$('#loader').fadeOut('slow',function(){$('#preloader').delay(100).fadeOut('slow')});$('html').removeClass('ss-preload');$('html').addClass('ss-loaded')})};var ssMoveHeader=function(){var hero=$('.page-hero'),hdr=$('header'),triggerHeight=hero.outerHeight()-170;$WIN.on('scroll',function(){var loc=$WIN.scrollTop();if(loc>triggerHeight){hdr.addClass('sticky')}else{hdr.removeClass('sticky')}
if(loc>triggerHeight+20){hdr.addClass('offset')}else{hdr.removeClass('offset')}
if(loc>triggerHeight+150){hdr.addClass('scrolling')}else{hdr.removeClass('scrolling')}})};var ssMobileMenu=function(){var toggleButton=$('.header-menu-toggle'),nav=$('.header-nav-wrap');toggleButton.on('click',function(event){event.preventDefault();toggleButton.toggleClass('is-clicked');nav.slideToggle()});if(toggleButton.is(':visible'))nav.addClass('mobile');$WIN.on('resize',function(){if(toggleButton.is(':visible'))nav.addClass('mobile');else nav.removeClass('mobile')});nav.find('a').on('click',function(){if(nav.hasClass('mobile')){toggleButton.toggleClass('is-clicked');nav.slideToggle()}})};var ssWaypoints=function(){var sections=$('.target-section'),navigation_links=$('.header-nav li a');sections.waypoint({handler:function(direction){var active_section;active_section=$('section#'+this.element.id);if(direction==='up')
active_section=active_section.prevAll('.target-section').first();var active_link=$('.header-nav li a[href="#'+active_section.attr('id')+'"]');navigation_links.parent().removeClass('current');active_link.parent().addClass('current')},offset:'25%',})};var ssSmoothScroll=function(){$('.smoothscroll').on('click',function(e){var target=this.hash,$target=$(target);e.preventDefault();e.stopPropagation();$('html, body').stop().animate({scrollTop:$target.offset().top,},cfg.scrollDuration,'swing',function(){window.location.hash=target})})};var ssBackToTop=function(){var pxShow=500,fadeInTime=300,fadeOutTime=300,scrollSpeed=300,goTopButton=$('.go-top');$(window).on('scroll',function(){if($(window).scrollTop()>=pxShow){goTopButton.fadeIn(fadeInTime)}else{goTopButton.fadeOut(fadeOutTime)}})};(function ssInit(){ssPreloader();ssMoveHeader();ssMobileMenu();ssWaypoints();ssSmoothScroll();ssBackToTop()})()})(jQuery)