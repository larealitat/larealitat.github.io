// hipertextos Injectables: jQuery & CSS basics
// by Acozar [www.hipertextos.net]

$(function() {

	var url = document.URL;
	
	// Sharing-list 
	
	$('.sharing-list').html('<ul>'+
		'<li><a href="http://twitter.com/?status='+ url +'" target="blank" title="Comparteix">Twitter</a></li>'+
		'<li><a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" target="blank" title="Comparteix">Facebook</a></li>'+
		'<li><a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" target="blank" title="Comparteix">Google +</a></li>'+
	'</ul>');
	
	// Sharing-buttons (squared)
	
	$('.sharing-buttons').html('<div>'+
		'<a href="http://twitter.com/?status='+ url +'" class="button squared flat soft-blue" target="blank" title="Comparteix">Twitter</a>'+
		'<a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" class="button squared flat blue" target="blank" title="Comparteix">Facebook</a>'+
		'<a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" class="button squared flat soft-red" target="blank" title="Comparteix">Google +</a>'+
	'</div>');
	
	// Sharing-buttons (rounded)
	
	$('.sharing-buttons-rounded').html('<div>'+
		'<a href="http://twitter.com/?status='+ url +'" class="button rounded flat soft-blue" target="blank" title="Comparteix">Twitter</a>'+
		'<a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" class="button rounded flat blue" target="blank" title="Comparteix">Facebook</a>'+
		'<a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" class="button rounded flat soft-red" target="blank" title="Comparteix">Google +</a>'+
	'</div>');
	
	// Sharing-icons (squared)

	$('.sharing-icons').html('<div>'+
		'<a href="http://twitter.com/?status='+ url +'" class="button-icon squared flat soft-blue" target="blank" title="Comparteix">Tw</a><br class="hidden-phone">'+
		'<a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" class="button-icon squared flat blue" target="blank" title="Comparteix">Fb</a><br class="hidden-phone">'+
		'<a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" class="button-icon squared flat soft-red" target="blank" title="Comparteix">G +</a><br class="hidden-phone">'+
	'</div>');
	
	// Sharing-icons (rounded)

	$('.sharing-icons-rounded').html('<div>'+
		'<a href="http://twitter.com/?status='+ url +'" class="button-icon rounded flat soft-blue" target="blank" title="Comparteix">Tw</a>'+
		'<a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" class="button-icon rounded flat blue" target="blank" title="Comparteix">Fb</a><br class="hidden-phone">'+
		'<a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" class="button-icon rounded flat soft-red" target="blank" title="Comparteix">G +</a><br class="hidden-phone">'+
	'</div>');
	
	// Sharing-icons (circled)

	$('.sharing-icons-circled').html('<div>'+
		'<a href="http://twitter.com/?status='+ url +'" class="button-icon circled flat soft-blue" target="blank" title="Comparteix">Tw</a>'+
		'<a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title" class="button-icon circled flat blue" target="blank" title="Comparteix">Fb</a><br class="hidden-phone">'+
		'<a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'" class="button-icon circled flat soft-red" target="blank" title="Comparteix">G +</a><br class="hidden-phone">'+
	'</div>');
	
	
	// Translating list 

	$('.translating-list').html('<ul>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=ca&u='+ url +'" target="blank" title="Translate with Google Translate">Catalan</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=de&u='+ url +'" target="blank" title="Translate with Google Translate">Deutsch</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=en&u='+ url +'" target="blank" title="Translate with Google Translate">English</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=fr&u='+ url +'" target="blank" title="Translate with Google Translate">French</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=it&u='+ url +'" target="blank" title="Translate with Google Translate">Italian</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=pt&u='+ url +'" target="blank" title="Translate with Google Translate">Portuguese</a></li>'+
		'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=es&u='+ url +'" target="blank" title="Translate with Google Translate">Spanish</a></li>'+
	'</ul>');
	
	// Translating buttons 

	$('.translating-buttons').html('<div>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=ca&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Catalan</a>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=de&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Deutsch</a>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=en&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">English</a>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=fr&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">French</a>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=it&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Italian</a>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=pt&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Portuguese</a>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=es&u='+ url +'" class="button" target="blank" title="Translate with Google Translate">Spanish</a>'+
	'</div>');
	
	// Translating icons 
	
	$('.translating-icons').html('<div>'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=ca&u='+ url +'" class="button-icon" target="blank" title="Translate with Google Translate">Catalan</a><br class="hidden-phone">'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=de&u='+ url +'" class="button-icon" target="blank" title="Translate with Google Translate">Deutsch</a><br class="hidden-phone">'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=en&u='+ url +'" class="button-icon" target="blank" title="Translate with Google Translate">English</a><br class="hidden-phone">'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=fr&u='+ url +'" class="button-icon" target="blank" title="Translate with Google Translate">French</a><br class="hidden-phone">'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=it&u='+ url +'" class="button-icon" target="blank" title="Translate with Google Translate">Italian</a><br class="hidden-phone">'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=pt&u='+ url +'" class="button-icon" target="blank" title="Translate with Google Translate">Portuguese</a><br class="hidden-phone">'+
		'<a href="http://translate.google.es/translate?hl=es&sl=auto&tl=es&u='+ url +'" class="button-icon" target="blank" title="Translate with Google Translate">Spanish</a><br class="hidden-phone">'+
	'</div>');
	
});