!function(i){document.querySelectorAll('[effect="ripple"]').forEach(s=>{s.addEventListener("click",t=>{t=t.touches?t.touches[0]:t;var e=s.getBoundingClientRect(),i=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));s.style.cssText="--s: 0; --o: 1;",s.offsetTop,s.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`})}),i(function(){var t=i(window),e=i("#header");t.scroll(function(){0<i(this).scrollTop()?e.addClass("active"):e.removeClass("active")})}),i(function(){i(".lnb").find("> ul > li > a").on("click",function(){var t=i(this).closest("li");return t.addClass("active"),t.siblings("li").removeClass("active"),!1})})}(jQuery);