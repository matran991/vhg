function del_topic(){var t=$(this).closest(".post");$(".checker").fadeOut(500),$("#loading").fadeIn(500),$.post($(this).closest(".deletetopic").find("a").attr("href"),{confirm:1},function(){$("#loading").fadeOut(500),t.slideUp(function(){t.remove(),$(".post").length||window.location.reload()})})}function cal_topic(){$(".checker").fadeOut(500)}$(".btt.file_info").toggle(function(){$(".show").trigger("click"),$(".info_type").slideUp(500),$(".info_type").removeClass("show"),$(this).next().slideDown(500),$(this).addClass("show")},function(){$(this).next().slideUp(500),$(this).removeClass("show")}),$(".post_avata").each(function(){var t=$(this).find("a").attr("href");$(this).closest(".post_profile").find(".post_name").wrap('<a href="'+t+'"></a>')}),$('a[href^="/u"]').click(function(t){t.preventDefault(),alert("Bạn đang dùng mobile. Do đó không thể xem được thông tin.")}),$(".img_link").each(function(){$(this).replaceWith('<img src="'+$(this).attr("href")+'">')}),$(".postbody .post_header").not(".quick_reply .post_header").each(function(){var t=$(this).html().replace("by&nbsp;","Được gửi bởi ").replace(" on "," vào ngày ");$(this).text(t)}),$("input.defaultBtn").attr("value"," Trả Lời"),_userdata.session_logged_in>0&&$("#editor").wysibb(),$('a[href^="/u"]').click(function(t){t.preventDefault(),alert("Bạn đang dùng mobile. Do đó không thể xem được thông tin.")}),$(".deletetopic a").click(function(t){t.preventDefault(),$(this).closest(".deletetopic").find(".checker").fadeIn(500)}),$(".quotetopic").click(function(){var t=$(this).closest(".post").find(".content").html();$(".wysibb-text-editor.wysibb-body").append(t),$("html, body").animate({scrollTop:$("#editor").offset().top},500)});