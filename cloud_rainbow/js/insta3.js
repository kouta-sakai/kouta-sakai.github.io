var snowmax=40;     

var sinkspeed=5;  /*★降る速度　0.3～2.0の間で指定。 原本は0.6 大きいほど速い*/
var snowmaxsize=40;
var snowminsize=5;

allzone=0; //★全面なら1。範囲なら0
zone=1;    //★全面なら0。範囲なら1

/*★下記２行は、全面指定の時ページが縦に長くて下まで降らせたい時は、documentElementをbodyに変更。bodyに変更しても下まで降らない時は、画面にdiv等で高さ指定を入れて下さい*/
//★上端一列や左端一列の場合は、どちらか１行だけが数値記述になります。↓
var my=document.documentElement.clientHeight;/*★上端一列の時はこの行は数値。上端の縦幅が200pxなら var my=200;ずれる時は数値調整*/
var mx=document.documentElement.clientWidth-15;/*★左端一列の時はこの行は数値。左端の横幅が200pxなら var my=200;ずれる時は数値調整


/*★以下４行は範囲指定用。基本的には0指定ですが、ずれる時はここで調整。判別指定で、allzone=1;zone=0;指定なら、この４行は数値が入っていても無効になります*/

var ctp=10;//★降る範囲のtop(上)からの位置の調整値。降る位置を上げる時は-(マイナス)数値で。下げる時は数値だけ。
var clp=10;//★降る範囲のleft(左)からの位置の調整値。降る位置を左側に移動時は-(マイナス)数値で。右側に移動時は数値だけ。
var cxp=-500;//★降る範囲横幅の位置の調整値。小さくする時は-(マイナス)数値で
var cyp=0;//★降る範囲縦幅の位置の調整値。小さくする時は-(マイナス)数値で

var tp=0+ctp;//★追加
var lp=0+clp;//★追加
var dxp=$(window).width()+cxp;//★追加
var dyp=$(window).height()+cyp;//★追加
my=my*allzone+dyp*zone;//★追加
mx=(mx*allzone+dxp*zone)-15;//★追加

var snow=new Array();
var snow2=new Array();
var snow3=new Array();
var snow4=new Array();
var snow5=new Array();
var snow6=new Array();
var snow7=new Array();
var snow8=new Array();
var snow9=new Array();
var snow10=new Array();


var i_snow=0;
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();

var x_mv2=new Array();
var crds2=new Array();
var lftrght2=new Array();

var x_mv3=new Array();
var crds3=new Array();
var lftrght3=new Array();

var x_mv4=new Array();
var crds4=new Array();
var lftrght4=new Array();

var x_mv5=new Array();
var crds5=new Array();
var lftrght5=new Array();

var x_mv6=new Array();
var crds6=new Array();
var lftrght6=new Array();

var x_mv7=new Array();
var crds7=new Array();
var lftrght7=new Array();

var x_mv8=new Array();
var crds8=new Array();
var lftrght8=new Array();

var x_mv9=new Array();
var crds9=new Array();
var lftrght9=new Array();

var x_mv10=new Array();
var crds10=new Array();
var lftrght10=new Array();

var url1 = "https://api.instagram.com/v1/tags/赤/media/recent?count=33"
var url2 = "https://api.instagram.com/v1/tags/オレンジ/media/recent?count=33"
var url3 = "https://api.instagram.com/v1/tags/黄色/media/recent?count=33"
var url4 = "https://api.instagram.com/v1/tags/黄緑/media/recent?count=33"
var url5 = "https://api.instagram.com/v1/tags/緑/media/recent?count=33"
var url6 = "https://api.instagram.com/v1/tags/水色/media/recent?count=33"
var url7 = "https://api.instagram.com/v1/tags/青/media/recent?count=33"
var url8 = "https://api.instagram.com/v1/tags/紫/media/recent?count=33"
var url9 = "https://api.instagram.com/v1/tags/ピンク/media/recent?count=33"
var url10 = "https://api.instagram.com/v1/tags/赤/media/recent?count=33"

var x = 0;

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

$(function  fade() {
    var fadeSpeed = 17000;
    $('main')
        .css({opacity: '0.0'})
        .animate({opacity: '1'}, fadeSpeed);
		 
});




$(function(){
   
    setTimeout(function(){
        initFunc();
    },10000);
});

function initFunc(){
	
	hoge1(),hoge2(),hoge3(),hoge4(),hoge5(),hoge6(),hoge7(),hoge8(),hoge9(),hoge10();
		
 }








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
       //$("<div>").addClass("image").append($("<img>").attr("src",d.tags).attr("width", 1) .attr("height", 800)));
		// <div id='s"+i+"'><p>" + dat.data[i].images.standard_resolution.url +"' class='pic'　　width='50' height=50'></div>
//<a href='" + dat.data[i].link + "' target='_blank'> $("<a>").attr("href", dat.data[i].link ).
        }
 $(initFunc);
      }
  });
};
*/

//<a href='" + dat.data[i].link + "' target='_blank'><



function randommaker(range) {
        rand=Math.floor(range*Math.random());
    return rand;
}


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


$("#main11").append("<div id='s"+i+"'><p>" + data1.data[i].tags +"</p></div>");


 snow[i]  =data1.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds[i] = 0;
            lftrght[i] = Math.random()*1;
            x_mv[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow[i]=document.getElementById("s"+i);
                snow[i].style.position='absolute';//★追加
               
                snow[i].size=randommaker(snowsizerange)+snowminsize;
               snow[i].style.zIndex=1000;
                snow[i].sink=sinkspeed*snow[i].size/5;
                snow[i].posx=randommaker(2*my-my-2*snow[i].size-500);
                snow[i].posy=1500;
				


}

 moveSnow()
}
}
 );
};

function moveSnow() {
	//console.log(snow[0].posx)
	for (i=0; i<snow.length; i++) {
                crds[i] += x_mv[i];
                snow[i].posy+=snow[i].sink;
                snow[i].style.left=lp*zone+snow[i].posy+'px';
                snow[i].style.top=tp*zone+snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
                if (snow[i].posy>=mx){
                        snow[i].posy=-100;
                        snow[i].posx=Math.random()*150+100;
						 }
	}
						
              
				  setTimeout("moveSnow()",50)
		
}
/*
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
$("#main1").append("<p>" + data11.data[i].tags +"' class='image'　 width='3' height=800'>");
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
$("#main1").append("<p>" + data12.data[i].tags +"' class='image'　 width='3' height=800'>");
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
$("#main1").append("<p>" + data13.data[i].tags +"' class='image'　 width='3' height=800'>");
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
$("#main1").append("<p>" + data14.data[i].tags +"' class='image'　 width='3' height=800'>");
}
}
}
 );
};
*/
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
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main12").append("<div id='s2"+i+"'><p>" + data2.data[i].tags +"</p></div>");
	 
	 snow2[i]  =data2.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds2[i] = 0;
            lftrght2[i] = Math.random()*1;
            x_mv2[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow2[i]=document.getElementById("s2"+i);
                snow2[i].style.position='absolute';//★追加
               
                snow2[i].size=randommaker(snowsizerange)+snowminsize;
               snow2[i].style.zIndex=1000;
                snow2[i].sink=sinkspeed*snow2[i].size/5;
                snow2[i].posx=randommaker(2*my-my-2*snow2[i].size-500);
                snow2[i].posy=1500;
				


}

 moveSnow2()
}
}
 );
};

function moveSnow2() {
	//console.log(snow[0].posx)
	for (i=0; i<snow2.length; i++) {
                crds2[i] += x_mv2[i];
                snow2[i].posy+=snow2[i].sink;
                snow2[i].style.left=lp*zone+snow2[i].posy+'px';
                snow2[i].style.top=tp*zone+snow2[i].posx+lftrght2[i]*Math.sin(crds2[i])+'px';
                if (snow2[i].posy>=mx){
                        snow2[i].posy=-100;
                        snow2[i].posx=Math.random()*150+200;
						 }
	}
						
              
				  setTimeout("moveSnow2()",50)
		
}

function hoge3(){
  $.ajax({
    url: url3,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main3").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data3=data;
     url3 = data3.pagination.next_url;
       // $("#main4").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main13").append("<div id='s3"+i+"'><p>" + data3.data[i].tags +"</p></div>");
	 
	  snow3[i]  =data3.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds3[i] = 0;
            lftrght3[i] = Math.random()*1;
            x_mv3[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow3[i]=document.getElementById("s3"+i);
                snow3[i].style.position='absolute';//★追加
               
                snow3[i].size=randommaker(snowsizerange)+snowminsize;
               snow3[i].style.zIndex=1000;
                snow3[i].sink=sinkspeed*snow3[i].size/5;
                snow3[i].posx=randommaker(2*my-my-2*snow3[i].size-500);
                snow3[i].posy=1500;
				


}

 moveSnow3()
}
}
 );
};

function moveSnow3() {
	//console.log(snow[0].posx)
	for (i=0; i<snow3.length; i++) {
                crds3[i] += x_mv3[i];
                snow3[i].posy+=snow3[i].sink;
                snow3[i].style.left=lp*zone+snow3[i].posy+'px';
                snow3[i].style.top=tp*zone+snow3[i].posx+lftrght3[i]*Math.sin(crds3[i])+'px';
                if (snow3[i].posy>=mx){
                        snow3[i].posy=-100;
                        snow3[i].posx=Math.random()*150+300;
						 }
	}
						
              
				  setTimeout("moveSnow3()",50)
		
}

function hoge4(){
  $.ajax({
    url: url4,
    data: { access_token:  "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main4").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data4=data;
     url4 = data4.pagination.next_url;
       // $("#main4").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 400)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main14").append("<div id='s4"+i+"'><p>" + data4.data[i].tags +"</p></div>");
	 
	   snow4[i]  =data4.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds4[i] = 0;
            lftrght4[i] = Math.random()*1;
            x_mv4[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow4[i]=document.getElementById("s4"+i);
                snow4[i].style.position='absolute';//★追加
               
                snow4[i].size=randommaker(snowsizerange)+snowminsize;
               snow4[i].style.zIndex=1000;
                snow4[i].sink=sinkspeed*snow4[i].size/5;
                snow4[i].posx=randommaker(2*my-my-2*snow4[i].size-500);
                snow4[i].posy=1500;
				


}

 moveSnow4()
}
}
 );
};

function moveSnow4() {
	//console.log(snow[0].posx)
	for (i=0; i<snow4.length; i++) {
                crds4[i] += x_mv4[i];
                snow4[i].posy+=snow4[i].sink;
                snow4[i].style.left=lp*zone+snow4[i].posy+'px';
                snow4[i].style.top=tp*zone+snow4[i].posx+lftrght4[i]*Math.sin(crds4[i])+'px';
                if (snow4[i].posy>=mx){
                        snow4[i].posy=-100;
                        snow4[i].posx=Math.random()*150+400;
						 }
	}
						
              
				  setTimeout("moveSnow4()",50)
		
}

function hoge5(){
  $.ajax({
    url: url5,
    data: { access_token:  "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main5").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data5=data;
     url5 = data5.pagination.next_url;
       // $("#main5").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 500)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main15").append("<div id='s5"+i+"'><p>" + data5.data[i].tags +"</p></div>");
	 
	  snow5[i]  =data5.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds5[i] = 0;
            lftrght5[i] = Math.random()*1;
            x_mv5[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow5[i]=document.getElementById("s5"+i);
                snow5[i].style.position='absolute';//★追加
               
                snow5[i].size=randommaker(snowsizerange)+snowminsize;
               snow5[i].style.zIndex=1000;
                snow5[i].sink=sinkspeed*snow5[i].size/5;
                snow5[i].posx=randommaker(2*my-my-2*snow5[i].size-500);
                snow5[i].posy=1500;
				


}

 moveSnow5()
}
}
 );
};

function moveSnow5() {
	//console.log(snow[0].posx)
	for (i=0; i<snow5.length; i++) {
                crds5[i] += x_mv5[i];
                snow5[i].posy+=snow5[i].sink;
                snow5[i].style.left=lp*zone+snow5[i].posy+'px';
                snow5[i].style.top=tp*zone+snow5[i].posx+lftrght5[i]*Math.sin(crds5[i])+'px';
                if (snow5[i].posy>=mx){
                        snow5[i].posy=-100;
                        snow5[i].posx=Math.random()*150+500;
						 }
	}
						
              
				  setTimeout("moveSnow5()",50)
		
}

function hoge6(){
  $.ajax({
    url: url6,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main6").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data6=data;
     url6 = data6.pagination.next_url;
       // $("#main6").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 600)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main16").append("<div id='s6"+i+"'><p>" + data6.data[i].tags +"</p></div>");
	 
	  snow6[i]  =data6.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds6[i] = 0;
            lftrght6[i] = Math.random()*1;
            x_mv6[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow6[i]=document.getElementById("s6"+i);
                snow6[i].style.position='absolute';//★追加
               
                snow6[i].size=randommaker(snowsizerange)+snowminsize;
               snow6[i].style.zIndex=1000;
                snow6[i].sink=sinkspeed*snow6[i].size/5;
                snow6[i].posx=randommaker(2*my-my-2*snow6[i].size-600);
                snow6[i].posy=1500;
				


}

 moveSnow6()
}
}
 );
};

function moveSnow6() {
	//console.log(snow[0].posx)
	for (i=0; i<snow6.length; i++) {
                crds6[i] += x_mv6[i];
                snow6[i].posy+=snow6[i].sink;
                snow6[i].style.left=lp*zone+snow6[i].posy+'px';
                snow6[i].style.top=tp*zone+snow6[i].posx+lftrght6[i]*Math.sin(crds6[i])+'px';
                if (snow6[i].posy>=mx){
                        snow6[i].posy=-100;
                        snow6[i].posx=Math.random()*150+600;
						 }
	}
						
              
				  setTimeout("moveSnow6()",50)
		
}
function hoge7(){
  $.ajax({
    url: url7,
    data: { access_token:  "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main7").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data7=data;
     url7 = data7.pagination.next_url;
       // $("#main7").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 700)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main17").append("<div id='s7"+i+"'><p>" + data7.data[i].tags +"</p></div>");
	 
	 snow7[i]  =data7.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds7[i] = 0;
            lftrght7[i] = Math.random()*1;
            x_mv7[i] = 0.03 + Math.random()/5;
			
			
       　　　 snow7[i]=document.getElementById("s7"+i);
                snow7[i].style.position='absolute';//★追加
               
                snow7[i].size=randommaker(snowsizerange)+snowminsize;
               snow7[i].style.zIndex=1000;
                snow7[i].sink=sinkspeed*snow7[i].size/7;
                snow7[i].posx=randommaker(2*my-my-2*snow7[i].size-700);
                snow7[i].posy=1500;
				


}

 moveSnow7()
}
}
 );
};

function moveSnow7() {
	//console.log(snow[0].posx)
	for (i=0; i<snow7.length; i++) {
                crds7[i] += x_mv7[i];
                snow7[i].posy+=snow7[i].sink;
                snow7[i].style.left=lp*zone+snow7[i].posy+'px';
                snow7[i].style.top=tp*zone+snow7[i].posx+lftrght7[i]*Math.sin(crds7[i])+'px';
                if (snow7[i].posy>=mx){
                        snow7[i].posy=-100;
                        snow7[i].posx=Math.random()*150+700;
						 }
	}
						
              
				  setTimeout("moveSnow7()",50)
		
}


function hoge8(){
  $.ajax({
    url: url8,
    data: { access_token:  "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main8").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data8=data;
     url8 = data8.pagination.next_url;
       // $("#main8").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 800)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main18").append("<div id='s8"+i+"'><p>" + data8.data[i].tags +"</p></div>");
	 
	  snow8[i]  =data8.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds8[i] = 0;
            lftrght8[i] = Math.random()*1;
            x_mv8[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow8[i]=document.getElementById("s8"+i);
                snow8[i].style.position='absolute';//★追加
               
                snow8[i].size=randommaker(snowsizerange)+snowminsize;
               snow8[i].style.zIndex=1000;
                snow8[i].sink=sinkspeed*snow8[i].size/8;
                snow8[i].posx=randommaker(2*my-my-2*snow8[i].size-800);
                snow8[i].posy=1500;
				


}

 moveSnow8()
}
}
 );
};

function moveSnow8() {
	//console.log(snow[0].posx)
	for (i=0; i<snow8.length; i++) {
                crds8[i] += x_mv8[i];
                snow8[i].posy+=snow8[i].sink;
                snow8[i].style.left=lp*zone+snow8[i].posy+'px';
                snow8[i].style.top=tp*zone+snow8[i].posx+lftrght8[i]*Math.sin(crds8[i])+'px';
                if (snow8[i].posy>=mx){
                        snow8[i].posy=-100;
                        snow8[i].posx=Math.random()*150+800;
						 }
	}
						
              
				  setTimeout("moveSnow8()",50)
		
}


function hoge9(){
  $.ajax({
    url: url9,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main9").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data9=data;
     url9 = data9.pagination.next_url;
       // $("#main9").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 900)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main19").append("<div id='s9"+i+"'><p>" + data9.data[i].tags +"</p></div>");
	 
	   snow9[i]  =data9.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds9[i] = 0;
            lftrght9[i] = Math.random()*1;
            x_mv9[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow9[i]=document.getElementById("s9"+i);
                snow9[i].style.position='absolute';//★追加
               
                snow9[i].size=randommaker(snowsizerange)+snowminsize;
               snow9[i].style.zIndex=1000;
                snow9[i].sink=sinkspeed*snow9[i].size/9;
                snow9[i].posx=randommaker(2*my-my-2*snow9[i].size-900);
                snow9[i].posy=1500;
				


}

 moveSnow9()
}
}
 );
};

function moveSnow9() {
	//console.log(snow[0].posx)
	for (i=0; i<snow9.length; i++) {
                crds9[i] += x_mv9[i];
                snow9[i].posy+=snow9[i].sink;
                snow9[i].style.left=lp*zone+snow9[i].posy+'px';
                snow9[i].style.top=tp*zone+snow9[i].posx+lftrght9[i]*Math.sin(crds9[i])+'px';
                if (snow9[i].posy>=mx){
                        snow9[i].posy=-100;
                        snow9[i].posx=Math.random()*150+900;
						 }
	}
						
              
				  setTimeout("moveSnow9()",50)
		
}
function hoge10(){
  $.ajax({
    url: url10,
    data: { access_token:  "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11"  },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#main10").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
data10=data;
     url10 = data10.pagination.next_url;
       // $("#main10").append(
        //$("<div>").addClass("image").append($("<img>").attr("src",  d.tags).attr("width",1) .attr("height", 1000)));

		for (var i = 0, length = 33; i < length; i++) {

     
	 $("#main110").append("<div id='s10"+i+"'><p>" + data10.data[i].tags +"</p></div>");
	 
	  snow10[i]  =data10.data[i].tags
		 
		 document.bgColor = "#fff";
		
		 var snowsizerange=snowmaxsize-snowminsize
		
			
                crds10[i] = 0;
            lftrght10[i] = Math.random()*1;
            x_mv10[i] = 0.03 + Math.random()/10;
			
			
       　　　 snow10[i]=document.getElementById("s10"+i);
                snow10[i].style.position='absolute';//★追加
               
                snow10[i].size=randommaker(snowsizerange)+snowminsize;
               snow10[i].style.zIndex=1000;
                snow10[i].sink=sinkspeed*snow10[i].size/10;
                snow10[i].posx=randommaker(2*my-my-2*snow10[i].size-1000);
                snow10[i].posy=1500;
				


}

 moveSnow10()
}
}
 );
};

function moveSnow10() {
	//console.log(snow[0].posx)
	for (i=0; i<snow10.length; i++) {
                crds10[i] += x_mv10[i];
                snow10[i].posy+=snow10[i].sink;
                snow10[i].style.left=lp*zone+snow10[i].posy+'px';
                snow10[i].style.top=tp*zone+snow10[i].posx+lftrght10[i]*Math.sin(crds10[i])+'px';
                if (snow10[i].posy>=mx){
                        snow10[i].posy=-100;
                        snow10[i].posx=Math.random()*150+1000;
						 }
	}
						
              
				  setTimeout("moveSnow10()",50)
		
}