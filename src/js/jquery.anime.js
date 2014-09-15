// Animation on scroll

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

// Basic on scroll animations

		var win = $(window);
		var dinflash = $('.din-flash');
		var dinshake = $('.din-shake');
		var dinbounce = $('.din-bounce');
		var dintada = $('.din-tada');
		var dinwobble = $('.din-wobble');
		var dinpulse = $('.din-pulse');
		var dinfadeIn = $('.din-fadeIn');
		var dinscaleUp = $('.din-scaleUp');
		var dinscaleUpDown = $('.din-scaleUpDown');
		var dinzoomIn = $('.din-zoomIn');
		var dinrotateIn = $('.din-rotateIn');
		var dinmoveFromLeftFade = $('.din-moveFromLeftFade');
		var dinmoveFromRightFade = $('.din-moveFromRightFade');
		var dinmoveFromTopFade = $('.din-moveFromTopFade');
		var dinmoveFromBottomFade = $('.din-moveFromBottomFade');
		win.scroll(function(event) {
		  dinflash.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-flash slow'); 
			} else {
			  el.removeClass('anm-flash slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinshake.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-shake slow'); 
			} else {
			  el.removeClass('anm-shake slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinbounce.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-bounce slow'); 
			} else {
			  el.removeClass('anm-bounce slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dintada.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-tada slow'); 
			} else {
			  el.removeClass('anm-tada slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinwobble.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-wobble slow'); 
			} else {
			  el.removeClass('anm-wobble slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinpulse.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-pulse slow'); 
			} else {
			  el.removeClass('anm-pulse slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinfadeIn.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-fadeIn slow'); 
			} else {
			  el.removeClass('anm-fadeIn slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinscaleUp.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-scaleUp slow'); 
			} else {
			  el.removeClass('anm-scaleUp slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinscaleUpDown.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-scaleUpDown slow'); 
			} else {
			  el.removeClass('anm-scaleUpDown slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinzoomIn.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-zoomIn slow'); 
			} else {
			  el.removeClass('anm-zoomIn slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinrotateIn.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-rotateIn slow'); 
			} else {
			  el.removeClass('anm-rotateIn slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinmoveFromLeftFade.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-moveFromLeftFade slow'); 
			} else {
			  el.removeClass('anm-moveFromLeftFade slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinmoveFromRightFade.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-moveFromRightFade slow'); 
			} else {
			  el.removeClass('anm-moveFromRightFade slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinmoveFromTopFade.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-moveFromTopFade slow'); 
			} else {
			  el.removeClass('anm-moveFromTopFade slow'); 
			} 
		  });
		});
		win.scroll(function(event) {
		  dinmoveFromBottomFade.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('anm-moveFromBottomFade slow'); 
			} else {
			  el.removeClass('anm-moveFromBottomFade slow'); 
			} 
		  });
		});


// Animation on slides

var PageTransitions = (function($) {
  var startElement = 0,
  animEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd',
    'animation': 'animationend'
  }

  function getTransitionPrefix() {
    var b = document.body || document.documentElement;
    var s = b.style;
    var p = 'animation';
    if(typeof s[p] == 'string')
      return 'animation';

    // Tests for vendor specific prop
    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
    p = p.charAt(0).toUpperCase() + p.substr(1);
    for( var i=0; i<v.length; i++ ) {
      if(typeof s[v[i] + p] == 'string')
        return v[i] + p;
    }
    return false;
  }
  // animation end event name
  animEndEventName = animEndEventNames[getTransitionPrefix()];

  function init() {
    $(".slide-page").each(function() {
      $(this).data('originalClassList', $(this).attr('class'));
    });
    $(".slide-wrapper").each(function() {
      $(this).data('current', 0);
      $(this).data('isAnimating', false);
      $(this).children(".slide-page").eq(startElement).addClass('slide-page-current');
    });

    $(".slide-trigger").click(function() {
      animate($(this));
    });
  }

  function animate(block, callback) {
    nextPage($(block).closest('.slide-wrapper'), $(block).attr('slide-out'), $(block).attr('slide-in'),$(block).attr('slide-step'),callback);
  }

  function nextPage(block, outClass, inClass,step, callback) {
    if(step==undefined) step=1;
    block = $(block);
    inClass = formatClass(inClass);
    outClass = formatClass(outClass);
    var current = block.data('current'),
    	$pages = block.children('.slide-page'),
    	pagesCount = $pages.length,
    	endCurrPage = false,
    	endNextPage = false;

    if(block.data('isAnimating')) {
      return false;
    }

    block.data('isAnimating', true);

    var $currPage = $pages.eq(current);
    current=current*1 + step*1;
    if(current >= pagesCount  ) {
      current=0;
    }
    block.data('current', current);

    var $nextPage = $pages.eq(current).addClass('slide-page-current');

    $currPage.addClass(outClass).on(animEndEventName, function() {
      $currPage.off(animEndEventName);
      endCurrPage = true;
      if(endNextPage) {
        if(jQuery.isFunction(callback)) {
          callback(block, $nextPage, $currPage);
        }
        onEndAnimation($currPage, $nextPage, block);
      }
    });

    $nextPage.addClass(inClass).on(animEndEventName, function() {
      $nextPage.off(animEndEventName);
      endNextPage = true;
      if(endCurrPage) {
        onEndAnimation($currPage, $nextPage, block);
      }
    });
  }

  function onEndAnimation($outpage, $inpage, block) {
    resetPage($outpage, $inpage);
    $outpage.trigger("animation.out.complete");
    $inpage.trigger("animation.in.complete");
    block.data('isAnimating', false);
  }

  function resetPage($outpage, $inpage) {
    $outpage.attr('class', $outpage.data( 'originalClassList'));
    $inpage.attr('class', $inpage.data( 'originalClassList') + ' slide-page-current');
  }

  function formatClass(str) {
    classes = str.split(" ");
    output = "";
    for(var n=0; n<classes.length; n++){
      output += " anm-" + classes[n];
    }
    return output;
  }
  return {
    init : init,
    nextPage: nextPage,
    animate: animate
  };
})(jQuery);

jQuery(function($) {
  PageTransitions.init();
});