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
			var target = e.currentTarget;
			var timestamp = Date.now();
			var tileId = e.currentTarget.children[0].id;
			var data = {"id": tileId,
									"timestamp": timestamp};
			var url = "/tile-click";
			$(target.children[0]).fadeIn("slow", function(){
			});
			$(target).toggleClass('no-click');

			$.ajax({
				type: "POST",
        url: url,
        data: data,
        dataType: "JSON",
        success: function(response){
					setTimeout(function() {
						$(e.currentTarget.children[0]).fadeOut("slow", function(){
							console.log(e.currentTarget.children[0]);
							$(e.currentTarget.children[0]).remove();
						});
					}, 1000);
					pollServer(response,target);
				}
			});

			if($('.tile').length == $('.no-click').length){
				$('#table').fadeOut("slow");
				$('#stats').fadeIn("slow")
			}
		}
	});
	// });

	// polls server and checks if job has failed
	function pollServer(data, target){
		setTimeout(function() {
			$.post('/job-status', data, function(response){
				if(response["status"] == "failed"){
					changeColor(target, '#c47685');
				}
				else{
					changeColor(target, '#ba643c');
				}

			});
		},1000);
	}

	// change tile to red if failed
	function changeColor(target, color){
		$(target).fadeIn('slow', function(){
			$(target).css('background-color', color);
		});
	}
	// }

	// resize box heigh to equal width
	function calcBoxHeight() {
		var boxWidth = $('.tile').width();

		$('.tile').css({
			'height': boxWidth + 'px'
		});
	}

});