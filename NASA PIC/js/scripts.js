$('#form').on('submit', function(){
	let date = $('#form-date').val();
	$.getJSON('https://api.nasa.gov/planetary/apod?api_key=obnEvK3FtJkhznZj1DzSl6lKPTJ2E6ygLlsupwYW&date='+date)
	.done(function(data){
			$('#image-titre').text(data.title);
      $('#image-description').text(data.explanation);
      $('#image-date').text(data.date);
      if(data.media_type=='image'){
          $('#video-nasa').css("display", "none");
			    $('#image-nasa')
            .attr('src',data.url)
            .css("display", "block");
					$('#lineSeparator2').css("display", "block")
      }else{
          $('#image-nasa').css("display", "none");
          $('#video-nasa')
            .attr('src',data.url)
            .css("display", "block");
      }
		});
    return false;
});
