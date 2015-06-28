$.get("/feed/").done(function(e) {
    for (var t = $(e), a = t.find("item").length, s = 0; a > s; s++) {
        var n = t.find("item:eq(" + s + ") title").text(),
            c = t.find("item:eq(" + s + ") link").text();
        $(".content_recent").append('<li class="chbv dataf"><a href="' + c + '" class="baivietlast">' + n + "</a></li>")
    }
});
if (_userdata.session_logged_in == 1) {
    var tid = _userdata.page_logout.split('tid=')[1].split('&key')[0];

    function onchat() {
        $.get('/chatbox/actions.forum?archives=1&avatar=0&method=connect&tid=' + tid + '').done(function() {
            getchat()
        });
    }

    function copyname() {
        $('#text').val('' + $('#text').val() + '  ' + $(this).text() + ': ')
    }
    lastmess = 0;
    function msgchat() {
        if (getdata.messages) {
            contentz = "";
            if (getdata.messages) {   
                if(lastmess == 0 || $('.result p').length == 0){
                    lastmess = getdata.messages.length;
                    var l = (getdata.messages.length - 1);
                    for (var j = l; j > -1; j--) {
                        var message = getdata.messages[j];
                        if(message.msg.indexOf('Messages cleared') > -1 || message.msg.indexOf('{BUZZ}') > -1 || message.msg.indexOf('<sub>') > -1 || message.msg.indexOf('<em>') > -1 || message.msg.indexOf('||') > -1){
                            var mess = '';
                        }
                        else{
                            var mess = '<p class="block_mess">' + '';
                            mess += '<span class="chat_msg"><span class="chat_name"><a href="/u' + message.userId + '" onclick="event.preventDefault();copyname.call(this)">' + message.username + '</a>: </span><span class="chat_content">' + message.msg + '</span></span>';
                            mess += '</p>';
                        }
                        contentz += mess;
                    }
                    $(".result").html(contentz);
                }
                else if(getdata.messages.length > lastmess){
                    var a = getdata.messages.length;
                    var b = lastmess;
                    for(var j = b;j < a;j++){
                        var message = getdata.messages[j];
                        var mess = '<p class="block_mess">' + '';
                        mess += '<span class="chat_msg"><span class="chat_name"><a href="/u' + message.userId + '" onclick="event.preventDefault();copyname.call(this)">' + message.username + '</a>: </span><span class="chat_content">' + message.msg + '</span></span>';
                        mess += '</p>';
                    $(".result .block_mess:first").before(mess);
                    }
                    lastmess = getdata.messages.length;
                }
            }
        }
    }

    function getchat() {
        $.ajax({
            url: 'chatbox/actions.forum?method=get&tid=' + tid + '&archives=1',
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function(response) {
                getdata = response;
                if (getdata.messages[0].msg.indexOf('You are disconnected') > -1) {
                    lastmess == 0;
                    onchat();
                }
                if(getdata.messages[(getdata.messages.length - 1)].msg.indexOf('Messages cleared') > -1){
                    lastmess = 0;
                }
                msgchat();
            }
        })
    }

    function sendchat() {
        data = data_chat;
        $.ajax({
            url: '/chatbox/actions.forum',
            type: 'post',
            data: data,
            dataType: 'json',
            cache: false,
            success: function(response) {
                getchat();
            }
        })
    }
    onchat();
    auto2 = setInterval(function() {
        getchat();
    }, 3000);
    $('#Cboxvhg').submit(function(event) {
        event.preventDefault();
        if (document.Cboxvhg.text.value == '') {
            alert('Bạn chưa nhập nội dung chat.');
        } else if (document.Cboxvhg.text.value.length > 255) {
            alert("Nội dung bạn nhập quá dài.");
            document.Cboxvhg.text.value = ('')
        } else if (_userdata["username"].length <= 1) {
            alert('Vui lòng tải lại trang để cập nhật thông tin.');
            document.Cboxvhg.text.value = ('')
        } else {
            data_chat = '' + $('input#text').serialize() + '&method=send&archives=1';
            sendchat();
            document.Cboxvhg.text.value = "";
        }
    });
} else {
    $('#Chatboxvhg').html('<span class="mobile_set"><i class="fa fa-bookmark-o"></i> CHATBOX</span><div class="result noatv"><div class="warning"> Vui lòng <a onclick="login();event.preventDefault();" href="/login">Đăng Nhập</a> hoặc <a onclick="register();event.preventDefault();"  href="/register">Đăng Ký</a> để chat.</div></div>')
}
