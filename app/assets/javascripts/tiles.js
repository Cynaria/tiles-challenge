$( document ).ready(function(){
	calcBoxHeight();

	// on window resize resize box height
	$(window).resize( function () {
		calcBoxHeight();
	});

	//
	$('.tile').on('click', function (e) {
		if($(e.currentTarget).hasClass('no-click')){
		}
		else{
			e.preventDefault();
			var timestamp = Date.now();
			var tileId = e.currentTarget.children[0].id;
			console.log(timestamp + " " + tileId);
			$(e.currentTarget.children[0]).fadeIn("slow", function(){
			});
			$(e.currentTarget).toggleClass('no-click');
			setTimeout(function() {
				$(e.currentTarget.children[0]).fadeOut("slow", function(){
					$(e.currentTarget).css('background-color', '#c47685');
					$(e.currentTarget.children[0]).remove();
				});
				
			}, 1000);
		}


	});


	// resize box heigh to equal width
	function calcBoxHeight() {
		var boxWidth = $('.tile').width();

		$('.tile').css({
			'height': boxWidth + 'px'
		});
	}

// 	function displayTime() {
//     var str = "";

//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();

//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }
//     str += hours + ":" + minutes + ":" + seconds;
//     return str;
// }
});