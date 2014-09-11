// hipertextos Widgets: jQuery & CSS basics
// by Acozar [www.hipertextos.net]

$(function() {

	var url = document.URL;
	
	// Site header
	
	$('#site-header').html('<header class="anm-rotateCarouselBottomIn">'+
		'<div class="content"> <div class="cell-1"> <a href="http://comunistes.cat" title="www.comunistes.cat" class="button-image"><img src="../logo/128/logocomcat-base.png" alt="Home"></a> </div> <div class="cell-11"> <nav class="rounded"> <input class="toggletrigger" type="checkbox" id="mob-nav" name="mob-nav" aria-hidden="true" hidden> <label for="mob-nav" class="toggle">Menú <span class="caret"></span></label> <div id="nav-collapse" class="togglecollapsed anm-rotatePullTop"> <a href="http://bloc.comunistes.cat" title="Bloc dels i les Comunistes de Catalunya">Bloc</a> <a href="http://imatges.comunistes.cat" title="Imatges dels i les Comunistes de Catalunya">Imatges</a> <a href="http://videos.comunistes.cat" title="Vídeos dels i les Comunistes de Catalunya">Vídeos</a> <a href="http://publicacions.comunistes.cat" title="Publicacions dels i les Comunistes de Catalunya">Publicacions</a> <a href="http://persones.comunistes.cat" title="Persones Comunistes de Catalunya">Persones</a> <a href="http://comunistes.cat/lluites" title="Lluites dels i les Comunistes de Catalunya">Lluites</a> <a href="http://comunistes.cat/organitzacio" title="Organització dels i les Comunistes de Catalunya">Organització</a> <form class="form-search" action="http://www.google.com/cse"> <input type="hidden" name="cx" value="007620493827235173837:iw6nd8cvpza"> <input type="text" name="q" class="terms" placeholder="cerca"> <input type="submit" name="sa" class="search" value="·"> </form> </div> </nav> </div> <hr class="no-margin"> </div>'+
	'</header>');
	
	// Site footer
	
	$('#site-footer').html('<footer id="site-footer" class="flat black anm-moveFromBottom">'+
		'<div class="content"> <div class="cell-1"> <a class="button-image" href="http://comunistes.cat" title="www.comunistes.cat"><img src="../logo/128/logocomcat-base-negative.png"></a> </div> <div class="cell-11 universe s"> <adress> <span class="organization symbol-hammerandsickle"><b>Comunistes de Catalunya</b></span> <br class="visible-phone"> <span class="location symbol-flower">Av Portal de l´Àngel, 42-48, 08001, Barcelona</span> <span class="website symbol-hyperlink"><a href="http://comunistes.cat" title="www.comunistes.cat">www.comunistes.cat</a></span> <span class="email symbol-email"><a href="mailto:info@comunistes.cat" title="Escriu">info@comunistes.cat</a></span> <span class="phone symbol-blackphone"><a href="tel:+0034933184282" title="truca">(0034) 93 318 42 82</a></span> <span class="vcard symbol-smilingface"><a href="http://comunistes.cat/pages/comunistes.vcard" download="Comunistes de Catalunya" title="Vcard"> vCard </a></span> </adress> <span class="license symbol-copyright"><a href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.ca" title="Termes de la llicència">Reconeixement – No Comercial – Compartir Igual (by-nc-sa)</a> </span> <span class="legal symbol-justice"><a href="http://comunistes.cat/pages/avislegal.html" title="Informació legal">Avís legal</a></span> </div> <hr class="no-margin"> </div>'+
	'</footer>');

	// Action buttons
	
	$('.action-buttons').html('<div class="button-centered">'+
		'<a href="http://comunistes.cat/docs/contact.html" class="button-icon circled flat green anm-bounce delay-200" title="Sol·licita o envia informació"> Info </a> <a href="http://comunistes.cat/docs/collaboration.html" class="button-icon circled flat orange anm-bounce delay-300" title="Col·labora amb el PCC"> Actua </a> <a href="http://comunistes.cat/docs/milite.html" class="button-icon circled flat red anm-bounce delay-400" title="Milita amb nosaltres"> Milita </a>'+
	' </div>');
	
	
	// Profile buttons
	
	$('.profile-buttons').html('<div class="button-centered">'+
		'<a href="<$BlogSiteFeedUrl$>" class="button-icon circled flat orange" target="blank" title="Segueix-nos amb RSS"> RSS </a> <a href="http://www.twitter.com/comunistesdecatalunya" class="button-icon circled flat soft-blue" target="blank" title="Segueix-nos a Twitter"> Tw </a> <a href="https://plus.google.com/u/0/114312260461772838369/" class="button-icon circled flat soft-granate" target="blank" title="Segueix-nos a Google +"> G+ </a> <a href="http://www.facebook.com/comunistesdecatalunya" class="button-icon circled flat blue" target="blank" title="Segueix-nos a Facebook"> Fb </a> <a href="http://comunistescat.tumblr.com/" class="button-icon circled flat asphalt" target="blank" title="Segueix-nos a Tumblr"> Tmblr </a> <a href="https://www.youtube.com/user/comunistescat" class="button-icon circled flat soft-red" target="blank" title="Segueix-nos a YouTube"> Yt </a>'+
	' </div>');

	// Sharing-list widget
	
	$('.sharing-list').html('<ul>'+
		'<li><a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" target="blank" title="Comparteix ara">Comparteix a Facebook</a></li>'+
		'<li><a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" target="blank" title="Comparteix ara">Comparteix a Google +</a></li>'+
		'<li><a href="http://twitter.com/?status='+ url +'" target="blank" title="Comparteix ara">Comparteix a Twitter</a></li>'+
	'</ul>');
	
	// Social-buttons widget
	
	$('.sharing-buttons').html('<div>'+
		'<a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" class="button flat blue" target="blank" title="Comparteix ara">Comparteix a Facebook</a> '+
		'<a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" class="button flat soft-red" target="blank" title="Comparteix ara">Comparteix a Google +</a> '+
		'<a href="http://twitter.com/?status='+ url +'" class="button flat soft-blue" target="blank" title="Comparteix ara">Comparteix a Twitter</a> '+
	'</div>');
	
	// Translating list widget

	$('.translating-list').html('<ul>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=ca&u='+ url +'" target="blank" title="Translate with Google Translate">Catalan</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=de&u='+ url +'" target="blank" title="Translate with Google Translate">Deutsch</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=en&u='+ url +'" target="blank" title="Translate with Google Translate">English</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=fr&u='+ url +'" target="blank" title="Translate with Google Translate">French</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=it&u='+ url +'" target="blank" title="Translate with Google Translate">Italian</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=pt&u='+ url +'" target="blank" title="Translate with Google Translate">Portuguese</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=es&u='+ url +'" target="blank" title="Translate with Google Translate">Spanish</a></li>'+
	'</ul>');
	
	// Translating buttons widget

	$('.translating-buttons').html('<div>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=ca&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Catalan</a> '+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=de&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Deutsch</a> '+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=en&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">English</a> '+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=fr&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">French</a> '+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=it&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Italian</a> '+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=pt&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Portuguese</a> '+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=es&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Spanish</a> '+
	'</div>');
	
});