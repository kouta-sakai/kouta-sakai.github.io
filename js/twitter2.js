//データ管理用の配列を作成
var dat = new Array();

$(function(){
	//自分のタイムライン取得用のphpにアクセス
	$.getJSON("get.php?callback=?", parseJSON);
	//#reloadをクリックしたら
	$("#reload").click(function(e) {
		//リンクを無効にする
		e.preventDefault();
		//各ツイート内容を削除する
		$("#main a").remove();
		//再度自分のタイムライン取得用のphpにアクセス
		$.getJSON("get.php?callback=?", parseJSON);
	});
});

//自分のタイムラインJSONが読み込まれたら行う処理
function parseJSON(json) {
	//読み込んだjsonデータをdatに代入
	dat = json;
	//console.log(dat);
	//datの中身をfor文でひとつひとつ取り出す
	for (i=0; i<dat.length; i++) {
		//#main内に#main○をつくり、下記のフォーマットでdat内の各データを配置する
		/*
		<a id='main○' href='http://twitter.com/アカウント名/status/ツイートID' target='_blank'>
			<img src='アイコン画像のURL'>
		</a>
		*/
		$("#main").append("<a id='main" + i + "' href='http://twitter.com/" + dat[i].user.screen_name + "/status/" + dat[i].id_str + "' target='_blank'><img src='" +  dat[i].user.profile_image_url + "'></a>");
		//#main○のcssのtopとleftを#mainの中でランダムな値に設定する
		$("#main" + i).css({
			top: Math.floor(Math.random() * ($("#main").height() - 48)) + "px",
			left: Math.floor(Math.random() * ($("#main").width() - 48)) + "px"
		});
	}
	//一通りjsonデータの処理が終わったら、#mainをフェイドインさせる
	$("#main a").fadeIn();
}