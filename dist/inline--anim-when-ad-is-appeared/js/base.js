$(function(){var o=$(".ad"),l=o.offset().top-$(window).height()+o.height(),n=o.offset().top+o.height();console.log("[DEBUG] adApperedDisdance: ",l),0>l&&(console.log("[DEBUG] ADが最初から表示されています"),o.addClass("anim"));var s;$(window).scroll(function(){s=$(window).scrollTop(),console.log("[DEBUG] scrollTop: ",s),s>=n?(console.log("[DEBUG] ADが通り過ぎた"),o.removeClass("anim")):s>=l?(console.log("[DEBUG] ADがwindow内に現れた"),o.addClass("anim")):(console.log("[DEBUG] ADがwindow内ではない"),o.removeClass("anim"))})});