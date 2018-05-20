$(function() {
	const $decontent = $('#decontent');
	const $dexit = $('#dexit');
	const $dialog = $('#dialog');
	const $link = $('.my-link');
	var template1 = '<h3>奖励规则</h3>' +
		'<p>奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则</p>';
	var template2 = '<h3>纪律说明</h3>' +
		'<p>纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明</p>';

	$link.on('click', '.ui-btn:eq(0)', function(event) {
		event.preventDefault();
		$decontent.html(template1)
		$dialog.fadeIn()
	}).on('click', '.ui-btn:eq(1)', function(event) {
		event.preventDefault();
		$decontent.html(template2)
		$dialog.fadeIn()
	});

	$dexit.on('click', function(event) {
		event.preventDefault();
		$decontent.html()
		$dialog.fadeOut()
	});

	$dialog.on('click', function(event) {
		event.preventDefault();
		if ($(event.target).hasClass('ui-dialog')) {
			$decontent.html()
			$dialog.fadeOut()
		}
	});


	// 签到
	(function() {
		var canclick = true;
		$('#qdclick').on('click', function(event) {
			event.preventDefault();
			if (!canclick) return;
			let $that = $(this)
			canclick = false
			$that.next().addClass('e-b-active')
			setTimeout(()=>{
				$that.next().removeClass('e-b-active')
				canclick = true
			},3000)
		});
	})()
	
	

})