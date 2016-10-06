var url = "https://api.instagram.com/v1/users/16213907/media/recent?count=33"






$(initFunc);

function initFunc(){
  hoge();
}

function hoge(){
  $.ajax({
    url: url,
    data: { access_token: "1924552725.78854f0.33f2999d71274acda6194a27e9fb6c11" },
    dataType: "jsonp",
    error: function(jqXHR, textStatus, errorThrown) {
      $("#photo").text(textStatus);
    },
    success: function(data, textStatus, jqXHR) {
		
		
      
      for (var i = 0, length = 33; i < length; i++) {
		
     
        $("#photo").append(
        $("<div>").addClass("image").append($("<img>").attr("src",  data.data[i].images.low_resolution.url).attr("width",300) .attr("height", 300)));
		
		
		
		
        }


      }
  });
};