id_user = location.pathname.match(/\d+/)[0];
submit_change = true;
if(_userdata.user_id == id_user){
	$('.li[menu="wall_design"]').show().attr('onclick','tab_wall.call(this)');
}
else{
	$(function(){
		submit_design = false;
	});
}
function music_frame(a){
	if(/nhaccuatui.com/.test(a) == true){
		var list = a.match(/.+.com\/(.+)\/.+/)[1];
		var arr_list = {
			'playlist':'l',
			'bai-hat':'m',
			'video':'video/xem-clip'
		}
		var link = a.split('.html')[0];
		var link = link.split('.');
		var length = link.length - 1;
		var link = link[length];
		var music = '<object class="music_frame" width="0" height="0"><param name="movie" value="http://www.nhaccuatui.com/'+arr_list[list]+'/'+link+'"><param name="quality" value="high">  <param name="wmode" value="transparent"><param name="allowscriptaccess" value="always"><param name="allowfullscreen" value="true"> <param name="flashvars" value="autostart=true"><embed src="http://www.nhaccuatui.com/'+arr_list[list]+'/'+link+'" flashvars="target=blank&amp;autostart=true" allowscriptaccess="always" allowfullscreen="false" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="0" height="0"></object>';
	}
	if(/youtube.com/.test(a) == true){
		var link = a.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/)[1];
		var music = '<iframe class="music_frame" width="0" height="0" src="https://www.youtube.com/embed/'+link+'?autoplay=1"></iframe>';
	}
	if(/mp3.zing.vn/.test(a) == true){
		var b = a.match(/.+mp3.zing.vn\/(.+)\/.+\/(.+).html/);
		var link = b[2];
		var list = b[1];
		var arr_list = {
			'playlist':'album',
			'bai-hat':'song',
			'video-clip':'video'
		}
		var music = '<iframe class="music_frame" width="0" height="0" src="http://mp3.zing.vn/embed/'+arr_list[list]+'/'+link+'?autoplay=true"></iframe>';
	}
	$('body').append(music);
}
function get_wall(id_user){
	$.ajax({
	  url: ''+hosting+'/wall/',
	  dataType: "script",
		data: {
			id_user: id_user
		},
	}).done(function(){
		if(typeof(message) == "object" && typeof(message) != "undefined"){
			var length = message.length - 1;
			var all_mess = "";
			for(var j = 0;j < length;j++){
				var item = message[j];
				var mhtml = item.data.replace(/\\n/gi,'\n');
				$('.mswitch').trigger('click');$("#editor").bbcode(mhtml);$('.mswitch').trigger('click');var mhtml = $("#editor").htmlcode();$("#editor").htmlcode('');
				var mess = '<div class="wall_block_mess"><div class="col-md-3"><div class="wall_mess_left">';
				mess += '<img src="'+item.avata+'"><div class="wall_left_name"><a href="/u'+item.id+'">'+item.name+'</a></div></div></div>';
				mess += '<div class="col-md-9"><div class="wall_time_right">'+item.time+'</div>';
				mess += '<div class="wall_content_right">'+mhtml+'</div></div></div>';
				all_mess += mess;
			}
			$('.result_wall').html(all_mess);
		}
	});
	$('#quickreply').submit(function(event) {
		var id = _userdata.user_id;
		var name = _userdata.username;
		var time = new Date;
		var time = 'Gửi vào ngày '+time.getDay()+'/'+time.getMonth()+'/'+time.getFullYear()+' vào lúc '+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+'.';
		var avata = $(_userdata.avatar).attr('src');
		var data = $("#editor").bbcode();
		if(/<|>/gi.test(data) == true){
			alert('Nội dung tin nhắn của bạn không được phép sử dụng html.');
			$("#editor").bbcode('').htmlcode('');
		}
		else if(data.length < 20){
			alert('Nội dung tin nhắn của bạn quá ngắn.');
		}
		else if(data.length > 2000){
			alert('Nội dung tin nhắn của bạn quá dài.')
		}
		else{
			var data = data.replace(/\n/gi,'\\n');
			var mhtml = $("#editor").htmlcode();
			var mess = '<div class="wall_block_mess"><div class="col-md-3"><div class="wall_mess_left">';
				mess += '<img src="'+avata+'"><div class="wall_left_name"><a href="/u'+id+'">'+name+'</a></div></div></div>';
				mess += '<div class="col-md-9"><div class="wall_time_right">'+time+'</div>';
				mess += '<div class="wall_content_right">'+mhtml+'</div></div></div>';
			$('.result_wall').append(mess);
			$("#editor").bbcode('').htmlcode('');
			$('.loading').fadeIn(500);
			$.ajax({
			  url: ''+hosting+'/wall/',
			  dataType: "script",
				data: {
					id:id,
					name: name,
					id_user: id_user,
					data: data,
					time: time,
					avata: avata
				},
			}).done(function(){
				$('.loading').fadeOut(500);
				$('body').scrollTop($('.result_wall .wall_block_mess:last').offset().top);
			})
		}
	});
}
function tab_wall(){
	var $this = $(this);
	var menu = $this.closest('.wall_menu');
	var li = $this.closest('li');
	menu.find('li').removeClass('active');
	li.addClass('active');
	var tab = li.attr('menu');
	$('.list_menu_wall').fadeOut(500);
	if(tab == 'wall_design' && $('.b_c_wall').length == 0){
		var a = $('.wall_design').html();
		var a = a.replace(/\<\!--|--\>/gi,'');
 		$('.wall_design').html(a);
 		$('.wall_design').fadeIn(500);
 		$.getScript('https://cdn.rawgit.com/matran991/vhg/master/wall/color1.js').done(function(){
			$('.colorpicker-element').colorpicker({color:true}).on('changeColor.colorpicker', function(event){
			  $(this).css('background',event.color.toHex());
			});
 		});
 		if(typeof(style_wall) != "undefined"){
	 		$('.wall_b_c_hex').val(style_wall.br_c);
			$('.wall_b_p_hex').val(style_wall.br_p);
			$('.wall_f_c_hex').val(style_wall.cl_c);
			$('.wall_f_p_hex').val(style_wall.cl_p);
			$('.wall_k_c_hex').val(style_wall.k_c);
			$('.wall_k_p_hex').val(style_wall.k_p);
			$('.wall_b_c_img').val(style_wall.br_c_i);
			$('.wall_b_p_img').val(style_wall.br_p_i);
			$('.wall_music').val(style_wall.music);
		}
	}
	$('.'+tab+'').fadeIn(500);
}
function background(a){
	if(a.indexOf('#') > -1){
	 	return 'background-color : '+a+'!important;';
	}
	else if(/.jpg|.gif|.png/.test(a) == true){
		return 'background-image : url('+a+')!important;background-repeat: round';
	}
	else{
		return false;
	}
}
function color(a){
	if(a.indexOf('#') > -1){
	 	return 'color : '+a+'!important';
	}
	else{
		return false;
	}
}
function style_add(br_c,br_p,cl_c,cl_p,k_c,k_p,br_c_i,br_p_i,music){
	var br_c = background(br_c);
	var br_p_2 = br_p;
	var br_p = background(br_p);
	var cl_c = color(cl_c);
	var cl_p = color(cl_p);
	var k_c = background(k_c);
	var k_p_2 = k_p;
	var k_p = background(k_p);
	var br_c_i = background(br_c_i);
	var br_p_i = background(br_p_i);
	var music = music_frame(music);
	var wall_style = '';
	// Nền chính
	var style = '#phpbb {'+br_c+';'+br_c_i+'}';
	// Nền Phụ + Ảnh nền phụ
	style += '.profile_list .forum_box_mod, .line_info, #tab_menu ul, .wall_block_mess .wall_content_right {'+br_p+';'+br_p_i+'}.line_design,.submit_design .col-md-12,.wall_block_mess,#quickreply,#quickreply .submit_post {background-color: transparent!important;}.wall_block_mess .col-md-3 {'+br_p+';'+br_p_i+';border-color: '+br_p_2+'!important}';
	// Màu Chữ Chính
	style += '#main_body a,.result_wall,.profile_list {'+cl_c+'}';
	// Màu chữ phụ
	style += '.line_info .col-md-4, .line_info .col-md-4 span {'+cl_p+'}';
	// Nền khung chính
	style += '.block_title,.forum_box_name,.bor_forum_right:before {'+k_c+'}';
	// Nền khung phụ
	style += '.bor_forum_left:before,.bor_forum_right {'+k_p+'}.bor_forum_right:before{border-color: transparent transparent '+k_p_2+'!important;}';
	var wall_style = '<div class="tag_style"><style>'+style+'</style></div>';
	$('body').append(wall_style);
}
function test_music(){
	$('.music_frame').remove();
	var link = $('.wall_music').val();
	if(/nhaccuatui.com|mp3.zing.vn|youtube.com/.test(link) == true){
		music_frame(link);
		$('.test_wall_music').fadeOut(500);
		$('.off_wall_music').fadeIn(500);
	}
}
function off_music(){
	$('.test_wall_music').fadeIn(500);
	$('.off_wall_music').fadeOut(500);
	$('.music_frame').remove();
}
function reset_design(){
	$('.line_design input').val('').removeAttr('style');
	off_music();
}
function delete_design(){
	reset_design();
	$('.tag_style').remove();
	$('.loading').fadeIn(500);
	$.post("/ajax_profile.forum?jsoncallback=?", {
		id: "1",
		user: _userdata.user_id,
		active: "1",
		content: '[["profile_field_2_1",""]]',
		tid: $('.thiet_lap_box a[href*="logout="]').attr('href').match(/.+tid\=(.+)\&.+/)[1]
	}, {}, "json").done(function (data) {
		$('.loading').fadeOut(500);
	})
}
function submit_design(){
	if(submit_change == true){
		$('.tag_style').remove();
		submit_change = false;
		// Lấy color background chính
		var br_c = $('.wall_b_c_hex').val();
		// Lấy color background phụ
		var br_p = $('.wall_b_p_hex').val();
		// Lấy color font chính
		var cl_c = $('.wall_f_c_hex').val();
		// Lấy color font phụ
		var cl_p = $('.wall_f_p_hex').val();
		// Lấy color khung chính
		var k_c = $('.wall_k_c_hex').val();
		// Lấy color khung phụ
		var k_p = $('.wall_k_p_hex').val();
		// Lấy link ảnh nền chính
		var br_c_i = $('.wall_b_c_img').val();
		// Lấy link ảnh nền phụ
		var br_p_i = $('.wall_b_p_img').val();
		// Lấy link nhạc
		var music = $('.wall_music').val();
		var style = 'style_wall = {';
			style += 'br_c: \''+br_c+'\',';
			style += 'br_p: \''+br_p+'\',';
			style += 'cl_c: \''+cl_c+'\',';
			style += 'cl_p: \''+cl_p+'\',';
			style += 'k_c: \''+k_c+'\',';
			style += 'k_p: \''+k_p+'\',';
			style += 'br_c_i: \''+br_c_i+'\',';
			style += 'br_p_i: \''+br_p_i+'\',';
			style += 'music: \''+music+'\'';
			style += '}';
		$('.loading').fadeIn(500);
		$.post("/ajax_profile.forum?jsoncallback=?", {
			   id: "1",
			   user: _userdata.user_id,
			   active: "1",
			   content: '[["profile_field_2_1","'+style+'"]]',
			   tid: $('.thiet_lap_box a[href*="logout="]').attr('href').match(/.+tid\=(.+)\&.+/)[1]
		}, {}, "json").done(function (data) {
				submit_change = true;
				$('.loading').fadeOut(500);
				style_add(br_c,br_p,cl_c,cl_p,k_c,k_p,br_c_i,br_p_i,music);
		})
	}
}
$(function(){
	if(_userdata.user_id == -1){
		$("#quickreply").remove();
	}
	else{
		$("#editor").wysibb();
	}
	get_wall(id_user);
	$('.inbox_mess a').attr('href','/privmsg?mode=post&u='+id_user+'');
	var data_style = $('#field_id1 .field_uneditable').text();
	if(typeof(style_wall) != "undefined"){
		eval(data_style);
		style_add(style_wall.br_c,style_wall.br_p,style_wall.cl_c,style_wall.cl_p,style_wall.k_c,style_wall.k_p,style_wall.br_c_i,style_wall.br_p_i,style_wall.music);
	}
})
