(function ($) {

  // ripple
  document.querySelectorAll(`[effect="ripple"]`).forEach(el => {
    el.addEventListener('click', e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(),
            d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;
      el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;
    });
  });

  // header
  $(function(){
    var win = $(window);
    var header = $('#header');

    win.scroll(function(){

      ($(this).scrollTop() > 0) ? header.addClass('active') : header.removeClass('active') ;

    });
    
  });

  // lnb
  $(function(){
    var lnb = $('.lnb');
    var lnbDepth1 = lnb.find('> ul > li > a');

    lnbDepth1.on('click', function(){
      var $this = $(this);
      var $parent = $this.closest('li');

      $parent.addClass('active');
      $parent.siblings('li').removeClass('active');

      return false;
    });
    
  });


})(jQuery);