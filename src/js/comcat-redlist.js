$(document).ready(function () {

	// Feeds Organitzacions
	$('#feed-pcc').rssfeed('http://noticies.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-pcc-cultura').rssfeed('http://cultura.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-pcc-movobrer').rssfeed('http://movimentobrer.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-pcc-movpopular').rssfeed('http://movimentpopular.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-pcc-movunitari').rssfeed('http://movimentunitari.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-pcc-che').rssfeed('http://cheguevara.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-partit').rssfeed('http://partit.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-persones').rssfeed('http://persones.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 10
	});
	$('#feed-lluites').rssfeed('http://lluites.pcc.cat/feeds/posts/default',{
		snippet: true,
		limit: 24
	});
	$('#feed-euia').rssfeed('http://euia.cat/apartado_noticias_rss_cat.php?ap=1',{
		snippet: true,
		limit: 1
	});
	$('#feed-fpa').rssfeed('http://noticies.fpereardiaca.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-el').rssfeed('http://www.european-left.org/english/home/news_archive/newsfeed.xml',{
		snippet: true,
		limit: 1
	});
	
	// Feeds Avant
	$('#feed-avant').rssfeed('http://avant.avant.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-dossiersavant').rssfeed('http://dossiers.avant.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-avantpdf').rssfeed('http://publicacions.comunistes.cat/feeds/posts/default/-/Avant',{
		snippet: true,
		limit: 5
	});
	$('#feed-amcavant').rssfeed('http://angelsmartinezcastells.avant.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-tb').rssfeed('http://laratera.avant.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-tbratera').rssfeed('http://bloclaratera.wordpress.com/feed/',{
		snippet: true,
		limit: 1
	});
	$('#feed-nl').rssfeed('http://www.semprealesquerra.org/nurialozano?feed=rss',{
		snippet: true,
		limit: 1
	});
	$('#feed-ciutadanad').rssfeed('http://ciutadanadempeus.avant.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-salvat').rssfeed('http://salvatorres.avant.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-mas').rssfeed('http://miquelangelsoria.avant.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	
	// Feeds Publicacions
	$('#feed-cjcrev').rssfeed('http://revista.joventutcomunista.org/feed/',{
		snippet: true,
		limit: 1
	});	
	$('#feed-realitat').rssfeed('http://revista.realitat.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-realitatpdf').rssfeed('http://publicacions.comunistes.cat/feeds/posts/default/-/Realitat',{
		snippet: true,
		limit: 1
	});
	$('#feed-espurna').rssfeed('http://espurna.fpereardiaca.org/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-espurnapdf').rssfeed('http://publicacions.comunistes.cat/feeds/posts/default/-/Espurna',{
		snippet: true,
		limit: 5
	});
	$('#feed-llibres').rssfeed('http://publicacions.comunistes.cat/feeds/posts/default/-/Llibres',{
		snippet: true,
		limit: 1
	});
	$('#feed-revistes').rssfeed('http://publicacions.comunistes.cat/feeds/posts/default/-/Revistes',{
		snippet: true,
		limit: 1
	});
	
	// Feeds Comcat
	$('#feed-comcat').rssfeed('http://som.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-ara').rssfeed('http://ara.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 5
	});
	$('#feed-ara-actualitat').rssfeed('http://ara.comunistes.cat/feeds/posts/default/-/Actualitat',{
		limit: 1,
		header: false,
		snippet: false
	});
	$('#feed-ara-accions').rssfeed('http://ara.comunistes.cat/feeds/posts/default/-/Accions',{
		limit: 1,
		header: false,
		snippet: false
	});
	$('#feed-ara-analisi').rssfeed('http://ara.comunistes.cat/feeds/posts/default/-/Anàlisi',{
		limit: 1,
		header: false,
		snippet: false
	});
	$('#feed-ara-opinions').rssfeed('http://ara.comunistes.cat/feeds/posts/default/-/Opinions',{
		limit: 1,
		header: false,
		snippet: false
	});
	$('#feed-ara-som').rssfeed('http://som.comunistes.cat/feeds/posts/default/-/Militants',{
		limit: 1,
		header: false,
		snippet: false
	});
	$('#feed-comcat-pubs').rssfeed('http://publicacions.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-comcat-som').rssfeed('http://som.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-comcat-cyber').rssfeed('http://ciberactivisme.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-comcat-agitprop').rssfeed('http://agitprop.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	
	// Feeds TV

	$('#feed-comcat-tv').rssfeed('http://tv.comunistes.cat/feeds/posts/default',{
		snippet: false,
		limit: 1
	});	
	$('#feed-comcat-tv-last5').rssfeed('http://tv.comunistes.cat/feeds/posts/default',{
		snippet: true,
		limit: 5
	});	
	$('#feed-tv-congres').rssfeed('http://tv.comunistes.cat/feeds/posts/default/-/Congrés',{
		snippet: true,
		limit: 1
	});
	$('#feed-tv-parlament').rssfeed('http://tv.comunistes.cat/feeds/posts/default/-/Parlament',{
		snippet: false,
		limit: 1
	});
	$('#feed-tv-mobilitzacions').rssfeed('http://tv.comunistes.cat/feeds/posts/default/-/Mobilitzacions',{
		snippet: true,
		limit: 1
	});
	$('#feed-tv-campanyes').rssfeed('http://tv.comunistes.cat/feeds/posts/default/-/Campanyes',{
		snippet: true,
		limit: 1
	});
	
	// Feeds CJC
	$('#feed-cjc').rssfeed('http://feeds2.feedburner.com/joventutcomunista',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-baixllobr').rssfeed('http://feeds.feedburner.com/cjcbaixllobregat',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-vallocc').rssfeed('http://feeds.feedburner.com/cjcvallesoccidental',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-bcnstandr').rssfeed('http://feeds.feedburner.com/cjcsantandreu',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-bcnsants').rssfeed('http://santscjc.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-bcnnord').rssfeed('http://bcnnord.cjc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-girona').rssfeed('http://osona.cjc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-zonafranca').rssfeed('http://zonafrancacjc.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-vilanova').rssfeed('http://vilanovacjc.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-bcnnoubarr').rssfeed('http://noubarris.cjc.cat/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-cjc-bcngrac').rssfeed('http://feeds.feedburner.com/cjcgracia',{
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
	$('#feed-nuet').rssfeed('http://feeds.feedburner.com/ElBlocDeJoanJosepNuet',{
		snippet: true,
		limit: 1
	});
	$('#feed-mena').rssfeed('http://joanmena.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});
	$('#feed-tsalado').rssfeed('http://blocpolitikon.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-italo').rssfeed('http://antoniitalo.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-jomi').rssfeed('http://lescosesdenjomi.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-bellfantasma').rssfeed('http://unbellfantasma.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-alfsalm').rssfeed('http://alfonso-lhquetuvols.blogspot.com/feeds/posts/default',{
		snippet: true,
		limit: 1
	});	
	$('#feed-raulvalls').rssfeed('http://www.albasud.org/rss.php?lan=es',{
		snippet: true,
		limit: 1
	});	

	// Feeds Externs
	$('#feed-psucviu').rssfeed('http://www.psuc.org/?format=feed&type=rss',{
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
	$('#feed-fundalt').rssfeed('http://www.fundacioalternativa.cat/?feed=rss2',{
		snippet: true,
		limit: 1
	});
	$('#feed-pah').rssfeed('http://pahbarcelona.org/feed/',{
		snippet: true,
		limit: 1
	});
	
});