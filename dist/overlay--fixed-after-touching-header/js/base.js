$(function(){"use strict";var i,o=$(".ad"),t=50,s=o.offset().top-t;$(window).scroll(function(){i=$(window).scrollTop(),i>=s?o.css({position:"fixed",top:t,left:0}):o.css({position:"relative",top:"inherit",left:"inherit"})})});