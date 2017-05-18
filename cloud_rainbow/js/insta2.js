var url1 = "https://api.instagram.com/v1/tags/赤/media/recent?count=33"
var url2 = "https://api.instagram.com/v1/tags/オレンジ/media/recent?count=33"
var url3 = "https://api.instagram.com/v1/tags/黄色/media/recent?count=33"
var url4 = "https://api.instagram.com/v1/tags/黄緑/media/recent?count=33"
var url5 = "https://api.instagram.com/v1/tags/緑/media/recent?count=33"
var url6 = "https://api.instagram.com/v1/tags/skyblue/media/recent?count=33"
var url7 = "https://api.instagram.com/v1/tags/青/media/recent?count=33"
var url8 = "https://api.instagram.com/v1/tags/紫/media/recent?count=33"
var url9 = "https://api.instagram.com/v1/tags/ピンク/media/recent?count=33"
var url10 = "https://api.instagram.com/v1/tags/赤/media/recent?count=33"



var data1 =new Array();
var data2 =new Array();
var data3 =new Array();
var data4 =new Array();
var data5 =new Array();
var data6 =new Array();
var data7 =new Array();
var data8 =new Array();
var data9 =new Array();
var data10 =new Array();

var data11 =new Array();
var data12 =new Array();
var data13 =new Array();
var data14 =new Array();

var data21 =new Array();
var data22 =new Array();
var data23 =new Array();
var data24 =new Array();

var data31 =new Array();
var data32 =new Array();
var data33 =new Array();
var data34 =new Array();

var data41 =new Array();
var data42 =new Array();
var data43 =new Array();
var data44 =new Array();

var data51 =new Array();
var data52 =new Array();
var data53 =new Array();
var data54 =new Array();

var data61 =new Array();
var data62 =new Array();
var data63 =new Array();
var data64 =new Array();

var data71 =new Array();
var data72 =new Array();
var data73 =new Array();
var data74 =new Array();

var data81 =new Array();
var data82 =new Array();
var data83 =new Array();
var data84 =new Array();

var data91 =new Array();
var data92 =new Array();
var data93 =new Array();
var data94 =new Array();

var data101 =new Array();
var data102 =new Array();
var data103 =new Array();
var data104 =new Array();




function initFunc(){
	
	hoge1(),hoge2(),hoge3(),hoge4(),hoge5(),hoge6(),hoge7(),hoge8(),hoge9(),hoge10();
		
  

  
  
  /* x++;
		//<a href='" + d.link + "' target='_blank'></a>
		if(x<5){
	 initFunc();}else{
		}*/
}


  
$(function  fade() {
    var fadeSpeed = 5000;
    $('#fadein2')
        .css({opacity: '0.0'})
        .animate({opacity: '1'}, fadeSpeed);
});

$(function  fade() {
    var fadeSpeed = 10000;
    $('#fadein2')
        .css({opacity: '1.0'})
        .animate({opacity: '0'}, fadeSpeed);
		 
});





$(function(){
   
    setTimeout(function(){
        initFunc();
    },10000);
});

/*function hoge(){
  $.ajax({
    url: url,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main1").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
      url = data.pagination.next_url;
      for (var i = 0, length = 100; i < length; i++) {
        var d = data.data[i];
        //$("#main1").append(
       //$("<div>").addClass("image").append($("<img>").attr("src",d.images.low_resolution.url).attr("width", 1) .attr("height", 800)));
		// <div id='s"+i+"'><img src='" + dat.data[i].images.standard_resolution.url +"' class='pic'　　width='50' height=50'></div>
//<a href='" + dat.data[i].link + "' target='_blank'> $("<a>").attr("href", dat.data[i].link ).
        }
 $(initFunc);
      }
  });
};
*/

//<a href='" + dat.data[i].link + "' target='_blank'><






//___________________________________________________________

function hoge1(){
  $.ajax({
    url: url1,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main1").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data1=data;
url1 = data1.pagination.next_url;

for (var i = 0, length = 33; i < length; i++) {
$("#main1").append("<a href='" + data1.data[i].link + "' target='_blank'><img src='" + data1.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data1.data[i].comments.count)*50) + "></a>");
}
hoge11()
}
}
 );
};

function hoge11(){
  $.ajax({
    url: url1,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main1").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data11=data;
url1 = data11.pagination.next_url;

for (var i = 0, length = 33; i < length; i++) {
$("#main1").append("<a href='" + data11.data[i].link + "' target='_blank'><img src='" + data11.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data11.data[i].comments.count)*50) + "></a>");
}
hoge12()
}
}
 );
};

function hoge12(){
  $.ajax({
    url: url1,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main1").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data12=data;
url1 = data12.pagination.next_url;

for (var i = 0, length = 33; i < length; i++) {
$("#main1").append("<a href='" + data12.data[i].link + "' target='_blank'><img src='" + data12.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data12.data[i].comments.count)*50) + "></a>");
}
hoge13()
}
}
 );
};

function hoge13(){
  $.ajax({
    url: url1,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main1").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data13=data;
url1 = data13.pagination.next_url;

for (var i = 0, length = 33; i < length; i++) {
$("#main1").append("<a href='" + data13.data[i].link + "' target='_blank'><img src='" + data13.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data13.data[i].comments.count)*50) + "></a>");
}
hoge14()
}
}
 );
};

function hoge14(){
  $.ajax({
    url: url1,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main1").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data14=data;
url1 = data14.pagination.next_url;

for (var i = 0, length = 33; i < length; i++) {
$("#main1").append("<a href='" + data14.data[i].link + "' target='_blank'><img src='" + data14.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data14.data[i].comments.count)*50) + "></a>");
}
}
}
 );
};

//________________________________________________________________________________________________




function hoge2(){
  $.ajax({
    url: url2,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main2").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data2=data;
     url2 = data2.pagination.next_url;
       // $("#main4").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.images.low_resolution.url).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main2").append("<a href='" + data2.data[i].link + "' target='_blank'><img src='" + data2.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data2.data[i].comments.count)*50) + "></a>");
}	
hoge21()
}
  }
);
};

function hoge21(){
  $.ajax({
    url: url2,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main2").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data21=data;
     url2 = data21.pagination.next_url;
       // $("#main4").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.images.low_resolution.url).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main2").append("<a href='" + data21.data[i].link + "' target='_blank'><img src='" + data21.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data21.data[i].comments.count)*50) + "></a>");
}	
hoge22()
}
  }
);
};

function hoge22(){
  $.ajax({
    url: url2,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main2").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data22=data;
     url2 = data22.pagination.next_url;
       // $("#main4").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.images.low_resolution.url).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main2").append("<a href='" + data22.data[i].link + "' target='_blank'><img src='" + data22.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data22.data[i].comments.count)*50) + "></a>");
}	
hoge23()
}
  }
);
};

function hoge23(){
  $.ajax({
    url: url2,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main2").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data23=data;
     url2 = data23.pagination.next_url;
       // $("#main4").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.images.low_resolution.url).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main2").append("<a href='" + data23.data[i].link + "' target='_blank'><img src='" + data23.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data23.data[i].comments.count)*50) + "></a>");
}	
hoge24()
}
  }
);
};

function hoge24(){
  $.ajax({
    url: url2,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main2").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data24=data;
     url2 = data24.pagination.next_url;
       // $("#main4").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.images.low_resolution.url).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main2").append("<a href='" + data24.data[i].link + "' target='_blank'><img src='" + data24.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data24.data[i].comments.count)*50) + "></a>");
}	
}
  }
);
};

//_____________________________________________________________


function hoge3(){
  $.ajax({
    url: url3,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main3").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
      data3=data;
       url3 = data3.pagination.next_url;
for (var i = 0, length = 33; i < length; i++) {
       
         $("#main3").append("<a href='" + data3.data[i].link + "' target='_blank'><img src='" + data3.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data3.data[i].comments.count)*50) + "></a>");
		
        }
		hoge31()

      }
  });
};

function hoge31(){
  $.ajax({
    url: url3,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main3").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
      data31=data;
       url3 = data31.pagination.next_url;
for (var i = 0, length = 33; i < length; i++) {
       
         $("#main3").append("<a href='" + data31.data[i].link + "' target='_blank'><img src='" + data31.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data31.data[i].comments.count)*50) + "></a>");
		
        }
hoge32()
      }
  });
};


function hoge32(){
  $.ajax({
    url: url3,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main3").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
      data32=data;
       url3 = data32.pagination.next_url;
for (var i = 0, length = 33; i < length; i++) {
       
         $("#main3").append("<a href='" + data32.data[i].link + "' target='_blank'><img src='" + data32.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data32.data[i].comments.count)*50) + "></a>");
		
        }
hoge33()
      }
  });
};


function hoge33(){
  $.ajax({
    url: url3,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main3").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
      data33=data;
       url3 = data33.pagination.next_url;
for (var i = 0, length = 33; i < length; i++) {
       
         $("#main3").append("<a href='" + data33.data[i].link + "' target='_blank'><img src='" + data33.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data33.data[i].comments.count)*50) + "></a>");
		
        }
hoge34()
      }
  });
};


function hoge34(){
  $.ajax({
    url: url3,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main3").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
      data34=data;
       url3 = data34.pagination.next_url;
for (var i = 0, length = 33; i < length; i++) {
       
         $("#main3").append("<a href='" + data34.data[i].link + "' target='_blank'><img src='" + data34.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data34.data[i].comments.count)*50) + "></a>");
		
        }

      }
  });
};

//_____________________________________________________





function hoge4(){
  $.ajax({
    url: url4,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main4").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data4=data;
      url4 = data4.pagination.next_url;
          for (var i = 0, length = 33; i < length; i++) {
        
      $("#main4").append("<a href='" + data4.data[i].link + "' target='_blank'><img src='" + data4.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data4.data[i].comments.count)*50) + "></a>");
        }
hoge41()
      }
  });
};

function hoge41(){
  $.ajax({
    url: url4,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main4").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data41=data;
      url4 = data41.pagination.next_url;
          for (var i = 0, length = 33; i < length; i++) {
        
      $("#main4").append("<a href='" + data41.data[i].link + "' target='_blank'><img src='" + data41.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data41.data[i].comments.count)*50) + "></a>");
        }
hoge42()
      }
  });
};


function hoge42(){
  $.ajax({
    url: url4,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main4").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data42=data;
      url4 = data42.pagination.next_url;
          for (var i = 0, length = 33; i < length; i++) {
        
      $("#main4").append("<a href='" + data42.data[i].link + "' target='_blank'><img src='" + data42.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data42.data[i].comments.count)*50) + "></a>");
        }
hoge43()
      }
  });
};


function hoge43(){
  $.ajax({
    url: url4,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main4").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data43=data;
      url4 = data43.pagination.next_url;
          for (var i = 0, length = 33; i < length; i++) {
        
      $("#main4").append("<a href='" + data43.data[i].link + "' target='_blank'><img src='" + data43.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data43.data[i].comments.count)*50) + "></a>");
        }
hoge44()
      }
  });
};

function hoge44(){
  $.ajax({
    url: url4,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main4").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data44=data;
      url4 = data44.pagination.next_url;
          for (var i = 0, length = 33; i < length; i++) {
        
      $("#main4").append("<a href='" + data44.data[i].link + "' target='_blank'><img src='" + data44.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data44.data[i].comments.count)*50) + "></a>");
        }

      }
  });
};

//_________________________________________________________________



function hoge5(){
  $.ajax({
    url: url5,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main5").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data5=data;
      url5 = data5.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
       
        $("#main5").append("<a href='" + data5.data[i].link + "' target='_blank'><img src='" + data5.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data5.data[i].comments.count)*50) + "></a>");
        }
hoge51()
      }
  });
};

function hoge51(){
  $.ajax({
    url: url5,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main5").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data51=data;
      url5 = data51.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
       
        $("#main5").append("<a href='" + data51.data[i].link + "' target='_blank'><img src='" + data51.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data51.data[i].comments.count)*50) + "></a>");
        }
hoge52()
      }
  });
};

function hoge52(){
  $.ajax({
    url: url5,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main5").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data52=data;
      url5 = data52.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
       
        $("#main5").append("<a href='" + data52.data[i].link + "' target='_blank'><img src='" + data52.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data52.data[i].comments.count)*50) + "></a>");
        }
hoge53()
      }
  });
};

function hoge53(){
  $.ajax({
    url: url5,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main5").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data53=data;
      url5 = data53.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
       
        $("#main5").append("<a href='" + data53.data[i].link + "' target='_blank'><img src='" + data53.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data53.data[i].comments.count)*50) + "></a>");
        }
hoge54()
      }
  });
};

function hoge54(){
  $.ajax({
    url: url5,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main5").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		 data54=data;
      url5 = data54.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
       
        $("#main5").append("<a href='" + data54.data[i].link + "' target='_blank'><img src='" + data54.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data54.data[i].comments.count)*50) + "></a>");
        }

      }
  });
};

//___________________________________________________________________

function hoge6(){
  $.ajax({
    url: url6,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main6").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data6=data;
      url6 = data6.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
        
         $("#main6").append("<a href='" + data6.data[i].link + "' target='_blank'><img src='" + data6.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data6.data[i].comments.count)*50) + "></a>");
        }

hoge61()
      }
  });
};

function hoge61(){
  $.ajax({
    url: url6,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main6").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data61=data;
      url6 = data61.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
        
         $("#main6").append("<a href='" + data61.data[i].link + "' target='_blank'><img src='" + data61.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data61.data[i].comments.count)*50) + "></a>");
        }

hoge62()
      }
  });
};


function hoge62(){
  $.ajax({
    url: url6,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main6").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data62=data;
      url6 = data62.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
        
         $("#main6").append("<a href='" + data62.data[i].link + "' target='_blank'><img src='" + data62.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data62.data[i].comments.count)*50) + "></a>");
        }

hoge63()
      }
  });
};


function hoge63(){
  $.ajax({
    url: url6,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main6").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data63=data;
      url6 = data63.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
        
         $("#main6").append("<a href='" + data63.data[i].link + "' target='_blank'><img src='" + data63.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data63.data[i].comments.count)*50) + "></a>");
        }

hoge64()
      }
  });
};

function hoge64(){
  $.ajax({
    url: url6,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main6").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data64=data;
      url6 = data64.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
        
         $("#main6").append("<a href='" + data64.data[i].link + "' target='_blank'><img src='" + data64.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data64.data[i].comments.count)*50) + "></a>");
        }


      }
  });
};
//_____________________________________________________________



function hoge7(){
  $.ajax({
    url: url7,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main7").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data7=data;
      url7 = data7.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main7").append("<a href='" + data7.data[i].link + "' target='_blank'><img src='" + data7.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data7.data[i].comments.count)*50) + "></a>");
        }
hoge71()
      }
  });
};

function hoge71(){
  $.ajax({
    url: url7,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main7").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data71=data;
      url7 = data71.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main7").append("<a href='" + data71.data[i].link + "' target='_blank'><img src='" + data71.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data71.data[i].comments.count)*50) + "></a>");
        }
hoge72()
      }
  });
};

function hoge72(){
  $.ajax({
    url: url7,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main7").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data72=data;
      url7 = data72.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main7").append("<a href='" + data72.data[i].link + "' target='_blank'><img src='" + data72.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data72.data[i].comments.count)*50) + "></a>");
        }
hoge73()
      }
  });
};

function hoge73(){
  $.ajax({
    url: url7,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main7").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data73=data;
      url7 = data73.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main7").append("<a href='" + data73.data[i].link + "' target='_blank'><img src='" + data73.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data73.data[i].comments.count)*50) + "></a>");
        }
hoge74()
      }
  });
};

function hoge74(){
  $.ajax({
    url: url7,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main7").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data74=data;
      url7 = data74.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main7").append("<a href='" + data74.data[i].link + "' target='_blank'><img src='" + data74.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data74.data[i].comments.count)*50) + "></a>");
        }

      }
  });
};
//_______________________________________________________________

function hoge8(){
  $.ajax({
    url: url8,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main8").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data8=data;
      url8 = data8.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main8").append("<a href='" + data8.data[i].link + "' target='_blank'><img src='" + data8.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data8.data[i].comments.count)*50) + "></a>");
        }
 hoge81()

      }
  });
};

function hoge81(){
  $.ajax({
    url: url8,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main8").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data81=data;
      url8 = data81.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main8").append("<a href='" + data81.data[i].link + "' target='_blank'><img src='" + data81.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data81.data[i].comments.count)*50) + "></a>");
        }
 hoge82()

      }
  });
};

function hoge82(){
  $.ajax({
    url: url8,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main8").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data82=data;
      url8 = data82.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main8").append("<a href='" + data82.data[i].link + "' target='_blank'><img src='" + data82.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data82.data[i].comments.count)*50) + "></a>");
        }

 hoge83()
      }
  });
};

function hoge83(){
  $.ajax({
    url: url8,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main8").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data83=data;
      url8 = data83.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main8").append("<a href='" + data83.data[i].link + "' target='_blank'><img src='" + data83.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data83.data[i].comments.count)*50) + "></a>");
        }

 hoge84()
      }
  });
};

function hoge84(){
  $.ajax({
    url: url8,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main8").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data84=data;
      url8 = data84.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main8").append("<a href='" + data84.data[i].link + "' target='_blank'><img src='" + data84.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data84.data[i].comments.count)*50) + "></a>");
        }


      }
  });
};

//____________________________________________________

function hoge9(){
  $.ajax({
    url: url9,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main9").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data9=data;
      url9 = data9.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main9").append("<a href='" + data9.data[i].link + "' target='_blank'><img src='" + data9.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data9.data[i].comments.count)*50) + "></a>");
        }
hoge91()

      }
  });
};

function hoge91(){
  $.ajax({
    url: url9,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main9").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data91=data;
      url9 = data91.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main9").append("<a href='" + data91.data[i].link + "' target='_blank'><img src='" + data91.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data91.data[i].comments.count)*50) + "></a>");
        }
hoge92()

      }
  });
};

function hoge92(){
  $.ajax({
    url: url9,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main9").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data92=data;
      url9 = data92.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main9").append("<a href='" + data92.data[i].link + "' target='_blank'><img src='" + data92.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data92.data[i].comments.count)*50) + "></a>");
        }
hoge93()

      }
  });
};

function hoge93(){
  $.ajax({
    url: url9,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main9").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data93=data;
      url9 = data93.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main9").append("<a href='" + data93.data[i].link + "' target='_blank'><img src='" + data93.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data93.data[i].comments.count)*50) + "></a>");
        }
hoge94()

      }
  });
};

function hoge94(){
  $.ajax({
    url: url9,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main9").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data94=data;
      url9 = data94.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
        $("#main9").append("<a href='" + data94.data[i].link + "' target='_blank'><img src='" + data94.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data94.data[i].comments.count)*50) + "></a>");
        }


      }
  });
};
//__________________________________________________

function hoge10(){
  $.ajax({
    url: url10,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main10").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data10=data;
      url10 = data10.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main10").append("<a href='" + data10.data[i].link + "' target='_blank'><img src='" + data10.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data10.data[i].comments.count)*50) + "></a>");
        }

hoge101()
      }
  });
};

function hoge101(){
  $.ajax({
    url: url10,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main10").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data101=data;
      url10 = data101.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main10").append("<a href='" + data101.data[i].link + "' target='_blank'><img src='" + data101.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data101.data[i].comments.count)*50) + "></a>");
        }

hoge102()
      }
  });
};


function hoge102(){
  $.ajax({
    url: url10,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main10").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data102=data;
      url10 = data102.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main10").append("<a href='" + data102.data[i].link + "' target='_blank'><img src='" + data102.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data102.data[i].comments.count)*50) + "></a>");
        }
hoge103()

      }
  });
};


function hoge103(){
  $.ajax({
    url: url10,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main10").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data103=data;
      url10 = data103.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main10").append("<a href='" + data103.data[i].link + "' target='_blank'><img src='" + data103.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data103.data[i].comments.count)*50) + "></a>");
        }

hoge104()
      }
  });
};


function hoge104(){
  $.ajax({
    url: url10,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main10").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		data104=data;
      url10 = data104.pagination.next_url;
      for (var i = 0, length = 33; i < length; i++) {
  
         $("#main10").append("<a href='" + data104.data[i].link + "' target='_blank'><img src='" + data104.data[i].images.low_resolution.url +"' class='image'　 width='2' height=" + (30+Number(data104.data[i].comments.count)*50) + "></a>");
        }


      }
  });
};





//データ管理用のオブジェクトを作成
