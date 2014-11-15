$(document).ready(function () {

	// Feeds comunistes.cat

	$('#feed-bloc').rssfeed('http://bloc.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});
	$('#feed-imatges').rssfeed('http://imatges.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});
	$('#feed-videos').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});
	$('#feed-lluites').rssfeed('http://lluites.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-persones').rssfeed('http://persones.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	
	// Feeds filtrats del bloc

	$('#feed-bloc-comunicats').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Comunicats',{
		snippet: false,
		limit: 1
	});	
	$('#feed-bloc-documents').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Documents',{
		snippet: false,
		limit: 1
	});	
	$('#feed-bloc-actualitat').rssfeed('http://bloc.comunistes.cat/feeds/posts/default/-/Actualitat',{
		snippet: false,
		limit: 1
	});	
	
	// Feeds filtrats de imatges

	$('#feed-imatges-cartells').rssfeed('http://imatges.comunistes.cat/feeds/posts/default/-/Cartells',{
		snippet: false,
		limit: 1
	});	
	$('#feed-imatges-grafismes').rssfeed('http://imatges.comunistes.cat/feeds/posts/default/-/Grafismes',{
		snippet: false,
		limit: 1
	});	
	
	
	// Feeds filtrats de videos

	$('#feed-videos-last-one').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-videos-last-two').rssfeed('http://videos.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 2
	});	
	$('#feed-videos-parlament').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Parlament',{
		snippet: false,
		limit: 1
	});
	$('#feed-videos-mobilitzacions').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Mobilitzacions',{
		snippet: true,
		limit: 1
	});
	$('#feed-videos-campanyes').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Campanyes',{
		snippet: true,
		limit: 1
	});
	$('#feed-videos-cinema').rssfeed('http://videos.comunistes.cat/feeds/posts/default/-/Cinema',{
		snippet: true,
		limit: 1
	});
	
	// Feeds organitzacions
	
	$('#feed-euia').rssfeed('http://euia.cat/apartado_noticias_rss_cat.php?ap=1',{
		snippet: true,
		limit: 1
	});
	$('#feed-fpereardiaca').rssfeed('http://noticies.fpereardiaca.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-el').rssfeed('http://www.european-left.org/english/home/news_archive/newsfeed.xml',{
		snippet: true,
		limit: 1
	});
	$('#feed-ccoo').rssfeed('http://www.ccoo.cat/aspnet/rss.aspx',{
		snippet: true,
		limit: 1
	});
	$('#feed-cgt').rssfeed('http://www.cgtcatalunya.cat/spip.php?page=backend',{
		snippet: true,
		limit: 1
	});	
	$('#feed-cobas').rssfeed('http://www.cobas.es/index.php?format=feed&type=rss&lang=en',{
		snippet: true,
		limit: 1
	});	
	$('#feed-dempeus').rssfeed('http://dempeusperlasalut.wordpress.com/feed/',{
		snippet: true,
		limit: 1
	});
	$('#feed-iaioflautas').rssfeed('http://www.iaioflautas.org/feed/',{
		snippet: true,
		limit: 1
	});
	$('#feed-falternativa').rssfeed('http://www.fundacioalternativa.cat/?feed=rss2',{
		snippet: true,
		limit: 1
	});
	$('#feed-pah').rssfeed('http://pahbarcelona.org/feed/',{
		snippet: true,
		limit: 1
	});
	
	// Feeds Blocs
	
	$('#feed-amcastells').rssfeed('http://puntsdevista.wordpress.com/feed/rss/',{
		snippet: true,
		limit: 1
	});
	$('#feed-mdelgado').rssfeed('http://manueldelgadoruiz.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-jjnuet').rssfeed('http://feeds.feedburner.com/ElBlocDeJoanJosepNuet',{
		snippet: true,
		limit: 1
	});
	$('#feed-jmena').rssfeed('http://joanmena.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-tsalado').rssfeed('http://blocpolitikon.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-aitalo').rssfeed('http://antoniitalo.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-mnavarro').rssfeed('http://lescosesdenjomi.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-amoreno').rssfeed('http://unbellfantasma.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-asalmeron').rssfeed('http://alfonso-lhquetuvols.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-rvalls').rssfeed('http://www.albasud.org/rss.php?lan=es',{
		snippet: true,
		limit: 1
	});	
	
});