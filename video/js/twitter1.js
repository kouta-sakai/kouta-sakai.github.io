//データ管理用の配列を作成
var dat = new Array();

$(function(){
	//あとでフェイドインさせるために、#mainを非表示にしておく
	$("#main").hide();
	//自分のタイムライン取得用のphpにアクセス
	$.getJSON("get.php?callback=?", parseJSON);
	//#reloadをクリックしたら
	$("#reload").click(function(e) {
		//リンクを無効にする
		e.preventDefault();
		//#mainをいったん非表示にして、
		$("#main").hide();
		//#main内にある各ツイート内容を削除する
		$("#main").empty();
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
		//jsonデータ内の時刻がグリニッジ標準時になっているので日本時間に変更
		var time = new Date(dat[i].created_at);
		//#main内に.tweetをつくり、下記のフォーマットでdat内の各データを配置する
		console.log(dat[i]);
		/*
		<div class='tweet'>
			<strong>
				<a href='http://twitter.com/アカウント名' target='_blank'>アカウント名</a>
			</strong>
			<a href='http://twitter.com/アカウント名' target='_blank'>
				<img src='アイコン画像のURL'>
			</a>
			<p class='date'>投稿時間</p>
			<p class='txt'>投稿内容</p>
		</div>
		*/
		if (dat[i].entities.media) {$("#main").append("<div class='tweet'><p class='date'>" + time + "</p><br><br><br><br><img src='" +  dat[i].entities.media[0].media_url+ "' ><p class='txt'>" + dat[i].text + "</p></div>");
	}else{$("#main").append("<div class='tweet'><p class='date'>" + time + "</p><br><br><br><br><p class='txt'>" + dat[i].text + "</p></div>");}}
	//一通りjsonデータの処理が終わったら、#mainをフェイドインさせる
	$("#main").fadeIn();
}
