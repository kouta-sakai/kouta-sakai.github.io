var url = "https://api.instagram.com/v1/users/self/media/recent?count=33"



//www.idd.tamabi.ac.jp/o47034/tamasya/?code=9455aa5afa80491cb12c5be563a87752&state=502338cf65f096ad9b4a50e0c410ab8f843b4722


$(initFunc);

function initFunc(){
  hoge();
}

function hoge(){
  $.ajax({
    url: url,
    data: { access_token: "1924552725.2a45a41.2ecf1783800543e39732b4bb22e3919b" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#photo").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
		
      
      for (var i = 0, length = 33; i < length; i++) {
		
		var d = new Date( Number( data.data[i].created_time+'000' ) );
      　var year = d.getFullYear();
	  var month = d.getMonth()+1;
	  var date = d.getDate();
　　　var dateT = ["日","月","火","水","木","金","土"];
　　　var day = dateT[d.getDay()];
		
        $("#photo").append(
        $("<div>").addClass("image").append($("<img>").attr("src",  data.data[i].images.standard_resolution.url) ));
		$("#photo").append("<p>" +　year + "/" + month + "/" + date + "(" + day + ")" + "</p>");
		$("#photo").append("<p>" + data.data[i].caption.text +"</p>");
		console.log(data);
		
		function formatedTime(time) {
	//引数の文字列を時間に変換
	var t = new Date(time);
	//上記の書式に合わせて出力
	return t.getFullYear() + "/" + plus0(t.getMonth()+1) + "/" + plus0(t.getDate());
}

//桁を揃える関数
function plus0(n) {
	//引数nが2桁未満だったら
	if (n.length < 2) {
		//頭に0をつけて2桁にする
		n = "0" + n;
	}
	//nを出力
	return n;
}

		
        }


      }
  });
};