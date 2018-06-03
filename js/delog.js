$(function() {
	const $decontent = $('#decontent');
	const $dexit = $('#dexit');
	const $dialog = $('#dialog');
	const $link = $('.normal-list .e-btn');

	console.log($link)
	var template1 = '<h3>奖励规则</h3>' +
		'<p>奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则奖励规则</p>';
	var template2 = '<h3>纪律说明</h3>' +
		'<p>纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明纪律说明</p>';

	$link.on('click', '.extend-btn:eq(0)', function(event) {
		event.preventDefault();
		$decontent.html(template1)
		$dialog.fadeIn()
	}).on('click', '.extend-btn:eq(1)', function(event) {
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
			let $that = $(this)
			if ($that.hasClass('m-exp-hasqd')) return;
			layer.msg('签到成功')
			$that.addClass('m-exp-hasqd').text('已签到30次')
			canclick = false
		});

		$('.exp-icon').on('click', function(event) {
			event.preventDefault();
			layer.msg('点签到旁边图标，弹窗描述签到积分机制 点签到的时候 弹窗做两个文字描述第一种 就是没有攒到积分的时候 提示签到了多少次第二种 够次数了 提示签到成功 并获得XX积分做个灰色背景渐淡浮窗，不要做弹窗');
		});
	})()
	
	

})