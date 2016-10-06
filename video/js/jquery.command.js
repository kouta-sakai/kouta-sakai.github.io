$(function(){
	$('#Wrapper').css({opacity: '0'});
	$(window).load(function() {
	setTimeout(function(){ $('#Wrapper').stop().animate({opacity: '1'},1000); },600);
	});
});
$(function(){
	$(window).load(function() {
		$("ul.champagne").champagne({
			beginning_delay: 1300,
			delay_between: 150,
			duration: 800
		});
	var setImg = '#Keyvisual';
	var fadeSpeed = 2000;
	var switchDelay = 7000;

	var imgHeight = $(setImg + ' img').height();
	$(setImg).css({height:(imgHeight)});

	$(window).bind('load resize',function(){
		var imgHeight = $(setImg + ' img').height();
		$(setImg).css({height:(imgHeight)});
	})

	setOperate();

	$(setImg).children('img').css({opacity:'0'});
	$(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

	setInterval(function(){
		$(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
	},switchDelay);
	});
});

function setOperate(){
	setView();
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1){
		window.onorientationchange = setView;
	}else if(agent.search(/iPad/) != -1){
		window.onorientationchange = setView;
	}else if(agent.search(/iPod/) != -1){
		window.onorientationchange = setView;
	}else if(agent.search(/Android/) != -1){
		window.onresize = setView;
	}
}
function setView(){
	var orientation = window.orientation;
	if(orientation === 0){
		var imgHeight = $('#Keyvisual img').height();
		$('#Keyvisual').css({height:(imgHeight)});
	}else{
		var imgHeight = $('#Keyvisual img').height();
		$('#Keyvisual').css({height:(imgHeight)});
	}
}

var xmlUrl = "http://rssadelete.dokoda.jp/d/http/feedblog.ameba.jp/rss/ameblo/odd-kumamoto/rss20.xml";
var setNum = 3;
var setID = "NewsList";
google.load("feeds", "1");
function initialize() {
    var html = '';
    var feed = new google.feeds.Feed(xmlUrl);
    feed.setNumEntries(setNum);
    feed.load(function(result) {
        if (!result.error){
            var container = document.getElementById(setID);
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                var title = entry.title;
                var link = entry.link;
                var publishedDate = entry.publishedDate;
                var pubDD = new Date(publishedDate);
                yy = pubDD.getYear();if (yy < 2000) { yy += 1900; }
                mm = pubDD.getMonth() + 1;dd = pubDD.getDate();
                var pubDate = yy +'.'+ mm +'.'+ dd +'.';
                for (var j = 0; j < entry.categories.length; j++) {
                    var categorie = entry.categories[j];
                }
                html += '<li><a href="' + link + '" target="_blank">' + title +'</a><span> ' + pubDate + '</span></li>';
            }
            container.innerHTML = html;
        }
    });
}
google.setOnLoadCallback(initialize);

$(function(){
	$('#BrandList ul li a').hover(
		function(){
			$(this).fadeTo(160, 0.6);
		},
		function(){
			$(this).fadeTo(200, 1);
		}
	);
	$('#Toggle a, #Logo a, #GlobalNav ul li a, #NavNext a, #NavPrev a, #GoogleMap a').hover(
		function(){
			$(this).fadeTo(160, 0.3);
		},
		function(){
			$(this).fadeTo(200, 1);
		}
	);
	$('#NewsList ul li:nth-child(1)').each(function(){
		$(this).css({borderTop: '0'});
	})
	$('#ImgNav li:nth-child(1)').each(function(){
		$(this).css({marginLeft: '0'});
	})
	$('#BrandList ul li:nth-child(5n)').each(function(){
		$(this).css({marginRight: '0'});
	})
	$('#ConceptInner').cycle({
		fx: 'fade',
		speed:   700,
		timeout: 0,
		auto: false,
		pager: '#ConceptNav',
		next:   '#NavNext', 
		prev:   '#NavPrev',
		cleartypeNoBg: true,
		pagerAnchorBuilder: function(idx, slide) {
			return '#ConceptNav li:eq(' + (idx) + ') a';
		}
	});
	$('#ImgGallery div.Img').cycle({
		fx: 'fade',
		speed:   2000,
		timeout: 7000,
		pager: '#ImgNav',
		cleartypeNoBg: true,
		pagerAnchorBuilder: function(idx, slide) {
			return '#ImgNav li:eq(' + (idx) + ') a';
		}
	});
	$("#Slide").slider({
		time: 35,
		pause: 0
	});
});

$(function() {
	$("#Toggle").css({display: 'none'});
	$(window).scroll(function (){
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > 1500){
			$("#Toggle").fadeIn("500");
	     }
		else if (scroll <= 1500){
			$("#Toggle").fadeOut("500");
	     }
	});
 });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-46743795-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();