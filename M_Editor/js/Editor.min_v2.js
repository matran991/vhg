var myfunc = function(t) {
  this.wbbInsertCallback(t, {
    AUTHOR: "",
    SELTEXT: ""
  })
};
"undefined" == typeof WBBLANG && (WBBLANG = {}), WBBLANG.vi = CURLANG = {
    bold: "In đậm",
    italic: "In nghiêng",
    underline: "Gạch chân",
    strike: "Gạch ngang",
    link: "Liên kết",
    img: "Hình ảnh",
    sup: "Superscript",
    sub: "Subscript",
    justifyleft: "Canh trái",
    justifycenter: "Canh giữa",
    justifyright: "Canh phải",
    table: "Bảng",
    bullist: "Tạo danh sách.",
    numlist: "Tạo danh sách theo số.",
    quote: "Trích dẫn",
    offtop: "Offtop",
    code: "Code",
    spoiler: "Ẩn hiện văn bản",
    fontcolor: "Màu chữ",
    fontsize: "Size chữ",
    fontfamily: "Font chữ",
    smilebox: "Box Smile",
    video: "Chèn video Youtube",
    removeFormat: "Xỏa định dạng",
    modal_link_title: "Chèn Link vào bài viết",
    modal_link_text: "Text hiển thị",
    modal_link_url: "URL trang",
    modal_email_text: "Chèn Email liên hệ",
    modal_email_url: "Email",
    modal_link_tab1: "Chèn Link",
    modal_img_title: "Chèn Ảnh",
    modal_img_tab1: "Nhập URL",
    modal_img_tab2: "Tải lên",
    modal_imgsrc_text: "Nhập địa chỉ hình ảnh",
    modal_img_btn: "Chọn hình ảnh tải lên",
    modal_video_text: "Nhập URL video",
    close: "Đóng",
    save: "Lưu",
    cancel: "Hủy",
    remove: "Xóa",
    validation_err: "Liên kết của bạn không hợp lệ.",
    error_onupload: "Lỗi Upload tập tin",
    fileupload_text1: "Kéo hình ảnh vào đây",
    fileupload_text2: "Hoặc",
    loading: "Đang tải...",
    auto: "Chọn màu",
    sm1: "Nụ cười",
    sm2: "Cười",
    sm3: "Nháy mắt",
    sm4: "Cảm ơn bạn",
    sm5: "Thề",
    sm6: "Sốc",
    sm7: "Ác",
    sm8: "Đau buồn",
    sm9: "Bệnh hoạn"
  }, wbbdebug = !0,
  function(t) {
    "use strict";
    t.wysibb = function(e, i) {
      t(e).data("wbb", this), i && i.deflang && "undefined" != typeof WBBLANG[i.deflang] && (CURLANG = WBBLANG[i.deflang]), i && i.lang && "undefined" != typeof WBBLANG[i.lang] && (CURLANG = WBBLANG[i.lang]), this.txtArea = e, this.$txtArea = t(e);
      this.$txtArea.attr("id") || this.setUID(this.txtArea);
      this.options = {
        bbmode: !1,
        onlyBBmode: !1,
        themeName: "default",
        bodyClass: "",
        lang: "ru",
        tabInsert: !0,
        imgupload: !1,
        img_uploadurl: "/iupload.php",
        img_maxwidth: 800,
        img_maxheight: 800,
        hotkeys: !0,
        showHotkeys: !0,
        autoresize: !0,
        resize_maxheight: 800,
        loadPageStyles: !0,
        traceTextarea: !0,
        smileConversion: !0,
        buttons: "bold,italic,underline,|,img,upimg,video,link,|,bullist,numlist,|,header,fontcolor,fontsize,fontfamily,|,justifyleft,justifycenter,justifyright,|,quote,spoiler,code,table,|,download,thanker,removeFormat",
        allButtons: {
          bold: {
            title: CURLANG.bold,
            buttonHTML: '<span class="fonticon ve-tlb-bold1"></span>',
            excmd: "bold",
            hotkey: "ctrl+b",
            transform: {
              "<b>{SELTEXT}</b>": "[b]{SELTEXT}[/b]",
              "<strong>{SELTEXT}</strong>": "[b]{SELTEXT}[/b]"
            }
          },
          italic: {
            title: CURLANG.italic,
            buttonHTML: '<span class="fonticon ve-tlb-italic1"></span>',
            excmd: "italic",
            hotkey: "ctrl+i",
            transform: {
              "<i>{SELTEXT}</i>": "[i]{SELTEXT}[/i]",
              "<em>{SELTEXT}</em>": "[i]{SELTEXT}[/i]"
            }
          },
          underline: {
            title: CURLANG.underline,
            buttonHTML: '<span class="fonticon ve-tlb-underline1"></span>',
            excmd: "underline",
            hotkey: "ctrl+u",
            transform: {
              "<u>{SELTEXT}</u>": "[u]{SELTEXT}[/u]"
            }
          },
          link: {
            title: CURLANG.link,
            buttonHTML: '<span class="fonticon ve-tlb-link1"></span>',
            hotkey: "ctrl+shift+2",
            modal: {
              title: CURLANG.modal_link_title,
              width: "500px",
              tabs: [{
                input: [{
                  param: "SELTEXT",
                  title: CURLANG.modal_link_text,
                  type: "div"
                }, {
                  param: "URL",
                  title: CURLANG.modal_link_url,
                  validation: "^http(s)?://"
                }]
              }]
            },
            transform: {
              '<a href="{URL}">{SELTEXT}</a>': "[url={URL}]{SELTEXT}[/url]",
              '<a href="{URL}">{URL}</a>': "[url]{URL}[/url]"
            }
          },
          img: {
            title: CURLANG.img,
            buttonHTML: '<span class="fonticon ve-tlb-img1"></span>',
            hotkey: "ctrl+shift+1",
            addWrap: !0,
            modal: {
              title: CURLANG.modal_img_title,
              width: "600px",
              tabs: [{
                title: CURLANG.modal_img_tab1,
                input: [{
                  param: "SRC",
                  title: CURLANG.modal_imgsrc_text,
                  validation: "^http(s)?://.*?.(jpg|png|gif|jpeg)$"
                }]
              }],
              onLoad: this.imgLoadModal
            },
            transform: {
              '<img src="{SRC}" />': "[img]{SRC}[/img]",
              '<img src="{SRC}" width="{WIDTH}" height="{HEIGHT}"/>': "[img width={WIDTH},height={HEIGHT}]{SRC}[/img]"
            }
          },
          upimg: {
            title: "Up Ảnh",
            buttonHTML: '<i onclick="upload()" class="fa fa-cloud-upload butedit"></i>',
            hotkey: "ctrl+shift+6",
            excmd: "removeFormat"
          },
          bullist: {
            title: CURLANG.bullist,
            buttonHTML: '<span class="fonticon ve-tlb-list1"></span>',
            excmd: "insertUnorderedList",
            transform: {
              "<ul>{SELTEXT}</ul>": "[list]{SELTEXT}[/list]",
              "<li>{SELTEXT}</li>": "[*]{SELTEXT}[/*]"
            }
          },
          numlist: {
            title: CURLANG.numlist,
            buttonHTML: '<span class="fonticon ve-tlb-numlist1"></span>',
            excmd: "insertOrderedList",
            transform: {
              "<ol>{SELTEXT}</ol>": "[list=1]{SELTEXT}[/list]",
              "<li>{SELTEXT}</li>": "[*]{SELTEXT}[/*]"
            }
          },
          quote: {
            title: CURLANG.quote,
            buttonHTML: '<span class="fonticon ve-tlb-quote1"></span>',
            hotkey: "ctrl+shift+3",
            cmd: myfunc,
            transform: {
              "<blockquote><div><cite>{AUTHOR} đã viết:</cite>{SELTEXT}</div></blockquote>": '[quote="{AUTHOR}"]{SELTEXT}[/quote]'
            }
          },
          spoiler: {
            title: "Thu gọn nội dung",
            buttonHTML: '<span class="fa fa-indent butedit"></span>',
            hotkey: "ctrl+shift+7",
            modal: {
              title: "Tiêu Đề Nội Dung Rút Gọn",
              width: "600px",
              tabs: [{
                input: [{
                  param: "TITLE",
                  title: "Nhập tiêu đề nội dung bạn muốn rút gọn.",
                  type: "div"
                }]
              }]
            },
            transform: {
              '<dl class="codebox spoiler"><dt style="cursor: pointer;">{TITLE}</dt><dd><div class="spoiler_content">{SELTEXT}</div></dd></dl>': '[spoiler="{TITLE}"]{SELTEXT}[/spoiler]'
            }
          },
          code: {
            title: CURLANG.code,
            buttonHTML: '<span class="fonticon"></span>',
            hotkey: "ctrl+shift+4",
            onlyClearText: !0,
            transform: {
              "<code>{SELTEXT}</code>": "[code]{SELTEXT}[/code]"
            }
          },
          offtop: {
            title: CURLANG.offtop,
            buttonText: "offtop",
            transform: {
              '<span style="font-size:10px;color:#ccc">{SELTEXT}</span>': "[offtop]{SELTEXT}[/offtop]"
            }
          },
          fontcolor: {
            type: "colorpicker",
            title: CURLANG.fontcolor,
            excmd: "foreColor",
            valueBBname: "color",
            subInsert: !0,
            colors: "#000000,#444444,#666666,#999999,#b6b6b6,#cccccc,#d8d8d8,#efefef,#f4f4f4,#ffffff,-, 							 #ff0000,#980000,#ff7700,#ffff00,#00ff00,#00ffff,#1e84cc,#0000ff,#9900ff,#ff00ff,-, 							 #f4cccc,#dbb0a7,#fce5cd,#fff2cc,#d9ead3,#d0e0e3,#c9daf8,#cfe2f3,#d9d2e9,#ead1dc, 							 #ea9999,#dd7e6b,#f9cb9c,#ffe599,#b6d7a8,#a2c4c9,#a4c2f4,#9fc5e8,#b4a7d6,#d5a6bd, 							 #e06666,#cc4125,#f6b26b,#ffd966,#93c47d,#76a5af,#6d9eeb,#6fa8dc,#8e7cc3,#c27ba0, 							 #cc0000,#a61c00,#e69138,#f1c232,#6aa84f,#45818e,#3c78d8,#3d85c6,#674ea7,#a64d79, 							 #900000,#85200C,#B45F06,#BF9000,#38761D,#134F5C,#1155Cc,#0B5394,#351C75,#741B47, 							 #660000,#5B0F00,#783F04,#7F6000,#274E13,#0C343D,#1C4587,#073763,#20124D,#4C1130",
            transform: {
              '<font color="{COLOR}">{SELTEXT}</font>': "[color={COLOR}]{SELTEXT}[/color]"
            }
          },
          table: {
            type: "table",
            title: CURLANG.table,
            cols: 10,
            rows: 10,
            cellwidth: 20,
            transform: {
              "<td>{SELTEXT}</td>": "[td]{SELTEXT}[/td]",
              "<tr>{SELTEXT}</tr>": "[tr]{SELTEXT}[/tr]",
              '<table class="{TITLE}">{SELTEXT}</table>': '[table class="{TITLE}"]{SELTEXT}[/table]'
            },
            skipRules: !0
          },
          header: {
            type: "select",
            title: '<i class="fa fa-header butedit"></i> <span class="titbut">Header</span>',
            options: "fs_h2,fs_h3,fs_h4"
          },
          fontsize: {
            type: "select",
            title: '<i class="fa fa-text-height butedit"></i> <span class="titbut">Size Chữ</span>',
            options: "fs_verysmall,fs_small,fs_normal,fs_big,fs_verybig"
          },
          fontfamily: {
            type: "select",
            title: '<i class="fa fa-font butedit"></i> <span class="titbut">Kiểu Font</span>',
            excmd: "fontName",
            valueBBname: "font",
            options: [{
              title: "Arial",
              exvalue: "Arial"
            }, {
              title: "Comic Sans MS",
              exvalue: "Comic Sans MS"
            }, {
              title: "Courier New",
              exvalue: "Courier New"
            }, {
              title: "Georgia",
              exvalue: "Georgia"
            }, {
              title: "Lucida Sans Unicode",
              exvalue: "Lucida Sans Unicode"
            }, {
              title: "Tahoma",
              exvalue: "Tahoma"
            }, {
              title: "Times New Roman",
              exvalue: "Times New Roman"
            }, {
              title: "Trebuchet MS",
              exvalue: "Trebuchet MS"
            }, {
              title: "Verdana",
              exvalue: "Verdana"
            }],
            transform: {
              '<font face="{FONT}">{SELTEXT}</font>': "[font={FONT}]{SELTEXT}[/font]"
            }
          },
          download: {
            title: "Tạo khung download",
            buttonHTML: '<i class="fa fa-download butedit"></i>',
            modal: {
              title: "Khung Download",
              width: "600px",
              tabs: [{
                input: [{
                  param: "SELTEXT",
                  title: "Chèn link bạn muốn tạo khung download.",
                }]
              }]
            },
            transform: {
              '<div class="box_download pad5 borra dibl"><div class="head_download pad5"><i class="fa fa-download"></i> Download</div><div class="nd_download pad5 bde">{SELTEXT}</div></div>': "[sup]{SELTEXT}[/sup]"
            }
          },
          thanker: {
            title: "Tạo khung thank mới thấy link.",
            buttonHTML: '<i class="fa fa-thumbs-o-up butedit"></i>',
            modal: {
              title: "Khung Thank",
              width: "600px",
              tabs: [{
                input: [{
                  param: "SELTEXT",
                  title: "Chèn link download bạn muốn ẩn và chỉ hiện khi bấm thank.",
                }]
              }]
            },
            transform: {
              '<div class="box_thanker pad5 dibl borra"><div class="head_thanker pad5"><i class="fa fa-download"></i> Download</div><div class="nd_thanker pad5 bde">{SELTEXT}</div></div>': "[sub]{SELTEXT}[/sub]"
            }
          },
          justifyleft: {
            title: CURLANG.justifyleft,
            buttonHTML: '<span class="fonticon ve-tlb-textleft1"></span>',
            groupkey: "align",
            transform: {
              '<p style="text-align:left">{SELTEXT}</p>': "[left]{SELTEXT}[/left]"
            }
          },
          justifyright: {
            title: CURLANG.justifyright,
            buttonHTML: '<span class="fonticon ve-tlb-textright1"></span>',
            groupkey: "align",
            transform: {
              '<p style="text-align:right">{SELTEXT}</p>': "[right]{SELTEXT}[/right]"
            }
          },
          justifycenter: {
            title: CURLANG.justifycenter,
            buttonHTML: '<span class="fonticon ve-tlb-textcenter1"></span>',
            groupkey: "align",
            transform: {
              '<p style="text-align:center">{SELTEXT}</p>': "[center]{SELTEXT}[/center]"
            }
          },
          video: {
            title: CURLANG.video,
            buttonHTML: '<span class="fonticon ve-tlb-video1"></span>',
            modal: {
              title: CURLANG.video,
              width: "600px",
              tabs: [{
                title: CURLANG.video,
                input: [{
                  param: "SRC",
                  title: CURLANG.modal_video_text
                }]
              }],
              onSubmit: function(t) {
                var e = this.$modal.find('input[name="SRC"]').val();
                e && (e = e.replace(/^\s+/, "").replace(/\s+$/, ""));
                var i;
                if (i = e.match(-1 != e.indexOf("youtu.be") ? /^http[s]*:\/\/youtu\.be\/([a-z0-9_-]+)/i : /^http[s]*:\/\/www\.youtube\.com\/watch\?.*?v=([a-z0-9_-]+)/i), i && 2 == i.length) {
                  var s = i[1];
                  this.insertAtCursor(this.getCodeByCommand(t, {
                    src: s
                  }))
                }
                return this.closeModal(), this.updateUI(), !1
              }
            },
            transform: {
              '<iframe src="http://www.youtube.com/embed/{SRC}" width="480" height="360" frameborder="0"></iframe>': "[youtube]{SRC}[/youtube]"
            }
          },
          fs_h2: {
            title: "H2",
            buttonText: "H2",
            exvalue: "1",
            transform: {
              "<h2>{SELTEXT}</h2>": "[h2]{SELTEXT}[/h2]"
            }
          },
          fs_h3: {
            title: "H3",
            buttonText: "H3",
            exvalue: "2",
            transform: {
              "<h3>{SELTEXT}</h3>": "[h3]{SELTEXT}[/h3]"
            }
          },
          fs_h4: {
            title: "H4",
            buttonText: "H4",
            exvalue: "3",
            transform: {
              "<h4>{SELTEXT}</h4>": "[h4]{SELTEXT}[/h4]"
            }
          },
          fs_verysmall: {
            title: "10",
            buttonText: "10",
            excmd: "fontSize",
            exvalue: "1",
            transform: {
              '<font size="1">{SELTEXT}</font>': "[size=10]{SELTEXT}[/size]"
            }
          },
          fs_small: {
            title: "13",
            buttonText: "13",
            excmd: "fontSize",
            exvalue: "2",
            transform: {
              '<font size="2">{SELTEXT}</font>': "[size=13]{SELTEXT}[/size]"
            }
          },
          fs_normal: {
            title: "16",
            buttonText: "16",
            excmd: "fontSize",
            exvalue: "3",
            transform: {
              '<font size="3">{SELTEXT}</font>': "[size=16]{SELTEXT}[/size]"
            }
          },
          fs_big: {
            title: "18",
            buttonText: "18",
            excmd: "fontSize",
            exvalue: "4",
            transform: {
              '<font size="4">{SELTEXT}</font>': "[size=18]{SELTEXT}[/size]"
            }
          },
          fs_verybig: {
            title: "24",
            buttonText: "24",
            excmd: "fontSize",
            exvalue: "6",
            transform: {
              '<font size="6">{SELTEXT}</font>': "[size=24]{SELTEXT}[/size]"
            }
          },
          removeformat: {
            title: CURLANG.removeFormat,
            buttonHTML: '<span class="fonticon ve-tlb-removeformat1"></span>',
            excmd: "removeFormat"
          }
        },
        systr: {
          "<br/>": "\n",
          '<span class="wbbtab">{SELTEXT}</span>': "   {SELTEXT}"
        },
        customRules: {
          td: [
            ["[td]{SELTEXT}[/td]", {
              seltext: {
                rgx: !1,
                attr: !1,
                sel: !1
              }
            }]
          ],
          tr: [
            ["[tr]{SELTEXT}[/tr]", {
              seltext: {
                rgx: !1,
                attr: !1,
                sel: !1
              }
            }]
          ],
          table: [
            ['[table]{SELTEXT}[/table]', {
              seltext: {
                rgx: !1,
                attr: !1,
                sel: !1
              }
            }]
          ]
        },
        smileList: [],
        attrWrap: ["src", "color", "href"]
      }, this.inited = this.options.onlyBBmode, this.options.themePrefix || t("link").each(t.proxy(function(e, i) {
        var s = t(i).get(0).href.match(/(.*\/)(.*)\/wbbtheme\.css.*$/);
        null !== s && (this.options.themeName = s[2], this.options.themePrefix = s[1])
      }, this)), "undefined" != typeof WBBPRESET && (WBBPRESET.allButtons && t.each(WBBPRESET.allButtons, t.proxy(function(t, e) {
        e.transform && this.options.allButtons[t] && delete this.options.allButtons[t].transform
      }, this)), t.extend(!0, this.options, WBBPRESET)), i && i.allButtons && t.each(i.allButtons, t.proxy(function(t, e) {
        e.transform && this.options.allButtons[t] && delete this.options.allButtons[t].transform
      }, this)), t.extend(!0, this.options, i), this.init()
    }, t.wysibb.prototype = {
      lastid: 1,
      init: function() {
        t.log("Init", this), this.isMobile = function(t) {
          /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)
        }(navigator.userAgent || navigator.vendor || window.opera), this.options.onlyBBmode === !0 && (this.options.bbmode = !0), this.controllers = [], this.options.buttons = this.options.buttons.toLowerCase(), this.options.buttons = this.options.buttons.split(","), this.options.allButtons._systr = {}, this.options.allButtons._systr.transform = this.options.systr, this.smileFind(), this.initTransforms(), this.build(), this.initModal(), this.options.hotkeys !== !0 || this.isMobile || this.initHotkeys(), this.options.smileList && this.options.smileList.length > 0 && this.options.smileList.sort(function(t, e) {
          return e.bbcode.length - t.bbcode.length
        }), this.$txtArea.parents("form").bind("submit", t.proxy(function() {
          return this.sync(), !0
        }, this)), this.$txtArea.parents("form").find("input[id*='preview'],input[id*='submit'],input[class*='preview'],input[class*='submit'],input[name*='preview'],input[name*='submit']").bind("mousedown", t.proxy(function() {
          this.sync(), setTimeout(t.proxy(function() {
            this.options.bbmode === !1 && this.$txtArea.removeAttr("wbbsync").val("")
          }, this), 1e3)
        }, this)), this.options.initCallback && this.options.initCallback.call(this), t.log(this)
      },
      initTransforms: function() {
        t.log("Create rules for transform HTML=>BB");
        var e = this.options;
        e.rules || (e.rules = {}), e.groups || (e.groups = {});
        var i = e.buttons.slice();
        i.push("_systr");
        for (var s = 0; s < i.length; s++) {
          var o = e.allButtons[i[s]];
          if (o) {
            if (o.en = !0, o.simplebbcode && t.isArray(o.simplebbcode) && 2 == o.simplebbcode.length && (o.bbcode = o.html = o.simplebbcode[0] + "{SELTEXT}" + o.simplebbcode[1], o.transform && delete o.transform, o.modal && delete o.modal), "select" == o.type && "string" == typeof o.options) {
              var n = o.options.split(",");
              t.each(n, function(e, s) {
                -1 == t.inArray(s, i) && i.push(s)
              })
            }
            if (o.transform && o.skipRules !== !0) {
              var a = t.extend({}, o.transform);
              for (var r in a) {
                var l = r,
                  h = a[r];
                if (o.bbSelector || (o.bbSelector = []), -1 == t.inArray(h, o.bbSelector) && o.bbSelector.push(h), this.options.onlyBBmode === !1) {
                  r = this.wrapAttrs(r);
                  var d = t(document.createElement("DIV")).append(t(this.elFromString(r, document))),
                    c = this.filterByNode(d.children());
                  if ("div" == c || "undefined" != typeof e.rules[c]) {
                    t.log("create unique selector: " + c), this.setUID(d.children()), c = this.filterByNode(d.children()), t.log("New rootSelector: " + c);
                    var u = d.html();
                    u = this.unwrapAttrs(u);
                    var p = this.unwrapAttrs(r);
                    o.transform[u] = h, delete o.transform[p], r = u, l = u
                  }
                  o.excmd || (o.rootSelector || (o.rootSelector = []), o.rootSelector.push(c)), "undefined" == typeof e.rules[c] && (e.rules[c] = []);
                  var b = {};
                  if (r.match(/\{\S+?\}/)) {
                    d.find("*").each(t.proxy(function(e, i) {
                      var s = this.getAttributeList(i);
                      t.each(s, t.proxy(function(e, s) {
                        var o = t(i).attr(s);
                        "_" == s.substr(0, 1) && (s = s.substr(1));
                        var n = o.match(/\{\S+?\}/g);
                        if (n)
                          for (var a = 0; a < n.length; a++) {
                            var r = n[a].substr(1, n[a].length - 2);
                            r = r.replace(this.getValidationRGX(r), "");
                            var l = this.relFilterByNode(i, c),
                              h = o != n[a] ? this.getRegexpReplace(o, n[a]) : !1;
                            b[r.toLowerCase()] = {
                              sel: l ? t.trim(l) : !1,
                              attr: s,
                              rgx: h
                            }
                          }
                      }, this));
                      var o = [];
                      t(i).is("iframe") || t(i).contents().filter(function() {
                        return 3 === this.nodeType
                      }).each(t.proxy(function(e, s) {
                        var n = s.textContent || s.data;
                        if ("undefined" == typeof n) return !0;
                        var a = n.match(/\{\S+?\}/g);
                        if (a)
                          for (var r = 0; r < a.length; r++) {
                            var l = a[r].substr(1, a[r].length - 2);
                            l = l.replace(this.getValidationRGX(l), "");
                            var h = this.relFilterByNode(i, c),
                              d = n != a[r] ? this.getRegexpReplace(n, a[r]) : !1,
                              u = h ? t.trim(h) : !1;
                            if (t.inArray(u, o) > -1 || t(s).parent().contents().size() > 1) {
                              var p = t("<span>").html("{" + l + "}");
                              this.setUID(p, "wbb");
                              var f = n.indexOf(l) + l.length + 1,
                                m = n.substr(f, n.length - f);
                              s.data = n.substr(0, n.indexOf(l) - 1), t(s).after(this.elFromString(m, document)).after(p), u = (u ? u + " " : "") + this.filterByNode(p), d = !1
                            }
                            b[l.toLowerCase()] = {
                              sel: u,
                              attr: !1,
                              rgx: d
                            }, o[o.length] = u
                          }
                      }, this)), o = null
                    }, this));
                    var f = d.html();
                    f = this.unwrapAttrs(f), l != f && (delete o.transform[l], o.transform[f] = h, r = f)
                  }
                  e.rules[c].push([h, b]), o.onlyClearText === !0 && (this.cleartext || (this.cleartext = {}), this.cleartext[c] = i[s]), o.groupkey && (e.groups[o.groupkey] || (e.groups[o.groupkey] = []), e.groups[o.groupkey].push(c))
                }
              }
              o.rootSelector && this.sortArray(o.rootSelector, -1);
              var m = t.map(o.transform, function(t, e) {
                return e
              }).sort(function(t, e) {
                return (e[0] || "").length - (t[0] || "").length
              });
              o.bbcode = o.transform[m[0]], o.html = m[0]
            }
          }
        }
        this.options.btnlist = i, t.extend(e.rules, this.options.customRules), e.srules = {}, this.options.smileList && t.each(e.smileList, t.proxy(function(i, s) {
          var o = t(this.strf(s.img, e)),
            n = this.filterByNode(o);
          e.srules[n] = [s.bbcode, s.img]
        }, this));
        for (var g in e.rules) this.options.rules[g].sort(function(t, e) {
          return e[0].length - t[0].length
        });
        this.rsellist = [];
        for (var g in this.options.rules) this.rsellist.push(g);
        this.sortArray(this.rsellist, -1)
      },
      build: function() {
        if (t.log("Build editor"), this.$editor = t("<div>").addClass("wysibb"), this.isMobile && this.$editor.addClass("wysibb-mobile"), this.options.direction && this.$editor.css("direction", this.options.direction), this.$editor.insertAfter(this.txtArea).append(this.txtArea), this.startHeight = this.$txtArea.outerHeight(), this.$txtArea.addClass("wysibb-texarea"), this.buildToolbar(), this.$txtArea.wrap('<div class="wysibb-text">'), this.options.onlyBBmode === !1) {
          var e = this.options.minheight || this.$txtArea.outerHeight(),
            i = (this.options.resize_maxheight, this.options.autoresize === !0 ? this.options.resize_maxheight : e);
          if (this.$body = t(this.strf('<div class="wysibb-text-editor" style="max-height:{maxheight}px;min-height:{height}px"></div>', {
              maxheight: i,
              height: e
            })).insertAfter(this.$txtArea), this.body = this.$body[0], this.$txtArea.hide(), e > 32 && this.$toolbar.css("max-height", e), t.log("WysiBB loaded"), this.$body.addClass("wysibb-body").addClass(this.options.bodyClass), this.options.direction && this.$body.css("direction", this.options.direction), "contentEditable" in this.body) {
            this.body.contentEditable = !0;
            try {
              document.execCommand("StyleWithCSS", !1, !1), this.$body.append("<span></span>")
            } catch (s) {}
          } else this.options.onlyBBmode = this.options.bbmode = !0;
          this.txtArea.value.length > 0 && this.txtAreaInitContent(), this.$body.bind("keydown", t.proxy(function(e) {
            return 86 == e.which && (1 == e.ctrlKey || 1 == e.metaKey) || 45 == e.which && (1 == e.shiftKey || 1 == e.metaKey) ? (this.$pasteBlock || (this.saveRange(), this.$pasteBlock = t(this.elFromString('<div style="opacity:0;" contenteditable="true">﻿</div>')), this.$pasteBlock.appendTo(this.body), setTimeout(t.proxy(function() {
              this.clearPaste(this.$pasteBlock);
              var e = "<span>" + this.$pasteBlock.html() + "</span>";
              this.$body.attr("contentEditable", "true"), this.$pasteBlock.blur().remove(), this.body.focus(), this.cleartext && (t.log("Check if paste to clearText Block"), this.isInClearTextBlock() && (e = this.toBB(e).replace(/\n/g, "<br/>").replace(/\s{3}/g, '<span class="wbbtab"></span>'))), e = e.replace(/\t/g, '<span class="wbbtab"></span>'), this.selectRange(this.lastRange), this.insertAtCursor(e, !1), this.lastRange = !1, this.$pasteBlock = !1
            }, this), 1), this.selectNode(this.$pasteBlock[0])), !0) : void 0
          }, this)), this.$body.bind("keydown", t.proxy(function(t) {
            if (13 == t.which) {
              var e = this.isContain(this.getSelectNode(), "li");
              e || (t.preventDefault && t.preventDefault(), this.checkForLastBR(this.getSelectNode()), this.insertAtCursor("<br/>", !1))
            }
          }, this)), this.options.tabInsert === !0 && this.$body.bind("keydown", t.proxy(this.pressTab, this)), this.$body.bind("mouseup keyup", t.proxy(this.updateUI, this)), this.$body.bind("mousedown", t.proxy(function(t) {
            this.clearLastRange(), this.checkForLastBR(t.target)
          }, this)), this.options.traceTextarea === !0 && (t(document).bind("mousedown", t.proxy(this.traceTextareaEvent, this)), this.$txtArea.val("")), this.options.hotkeys === !0 && this.$body.bind("keydown", t.proxy(this.presskey, this)), this.options.smileConversion === !0 && this.$body.bind("keyup", t.proxy(this.smileConversion, this)), this.inited = !0, this.options.autoresize === !0 && (this.$bresize = t(this.elFromString('<div class="bottom-resize-line"></div>')).appendTo(this.$editor).wdrag({
            scope: this,
            axisY: !0,
            height: e
          })), this.imgListeners()
        }
        this.$txtArea.bind("mouseup keyup", t.proxy(function() {
          clearTimeout(this.uitimer), this.uitimer = setTimeout(t.proxy(this.updateUI, this), 100)
        }, this)), this.options.hotkeys === !0 && t(document).bind("keydown", t.proxy(this.presskey, this))
      },
      buildToolbar: function() {
        if (this.options.toolbar === !1) return !1;
        this.$toolbar = t("<div>").addClass("wysibb-toolbar").prependTo(this.$editor);
        var e;
        t.each(this.options.buttons, t.proxy(function(i, s) {
          var o = this.options.allButtons[s];
          (0 == i || "|" == s || "-" == s) && ("-" == s && this.$toolbar.append("<div>"), e = t('<div class="wysibb-toolbar-container">').appendTo(this.$toolbar)), o && ("colorpicker" == o.type ? this.buildColorpicker(e, s, o) : "table" == o.type ? this.buildTablepicker(e, s, o) : "select" == o.type ? this.buildSelect(e, s, o) : "smilebox" == o.type ? this.buildSmilebox(e, s, o) : this.buildButton(e, s, o))
        }, this)), this.$toolbar.find(".btn-tooltip").hover(function() {
          t(this).parent().css("overflow", "hidden")
        }, function() {
          t(this).parent().css("overflow", "visible")
        });
        var i = t(document.createElement("div")).addClass("wysibb-toolbar-container modeSwitch").html('<div class="wysibb-toolbar-btn mswitch" unselectable="on"><span class="btn-inner modesw" unselectable="on"><i class="fa fa-file-text-o"></i></span><span class="btn-tooltip">Chuyển sang BBcode<ins></ins></span></div>').appendTo(this.$toolbar);
        1 == this.options.bbmode && i.children(".wysibb-toolbar-btn").addClass("on"), this.options.onlyBBmode === !1 && i.children(".wysibb-toolbar-btn").click(t.proxy(function(e) {
          t(e.currentTarget).toggleClass("on"), this.modeSwitch()
        }, this))
      },
      buildButton: function(e, i, s) {
        "object" != typeof e && (e = this.$toolbar);
        var o = s.buttonHTML ? t(this.strf(s.buttonHTML, this.options)).addClass("btn-inner") : this.strf('<span class="btn-inner btn-text">{text}</span>', {
            text: s.buttonText.replace(/</g, "&lt;")
          }),
          n = this.options.hotkeys === !0 && this.options.showHotkeys === !0 && s.hotkey ? ' <span class="tthotkey">[' + s.hotkey + "]</span>" : "",
          a = t('<div class="wysibb-toolbar-btn wbb-' + i + '">').appendTo(e).append(o).append(this.strf('<span class="btn-tooltip">{title}<ins/>{hotkey}</span>', {
            title: s.title,
            hotkey: n
          }));
        this.controllers.push(a), a.bind("queryState", t.proxy(function(e) {
          this.queryState(i) ? t(e.currentTarget).addClass("on") : t(e.currentTarget).removeClass("on")
        }, this)), a.mousedown(t.proxy(function(e) {
          e.preventDefault(), this.execCommand(i, s.exvalue || !1), t(e.currentTarget).trigger("queryState")
        }, this))
      },
      buildColorpicker: function(e, i, s) {
        var o = t('<div class="wysibb-toolbar-btn wbb-dropdown wbb-cp">').appendTo(e).append('<div class="ve-tlb-colorpick"><span class="fonticon"></span><span class="cp-line"></span></div><ins class="fonticon ar"></ins>').append(this.strf('<span class="btn-tooltip">{title}<ins/></span>', {
            title: s.title
          })),
          n = o.find(".cp-line"),
          a = t('<div class="wbb-list">').appendTo(o);
        a.append('<div class="nc">' + CURLANG.auto + "</div>");
        for (var r = s.colors ? s.colors.split(",") : [], l = 0; l < r.length; l++) r[l] = t.trim(r[l]), a.append("-" == r[l] ? '<span class="pl"></span>' : this.strf('<div class="sc" style="background:{color}" title="{color}"></div>', {
          color: r[l]
        }));
        var h = t(document.body).css("color");
        this.controllers.push(o), o.bind("queryState", t.proxy(function() {
          n.css("background-color", h);
          var t = this.queryState(i, !0);
          t && (n.css("background-color", this.options.bbmode ? t.color : t), o.find(".ve-tlb-colorpick span.fonticon").css("color", this.options.bbmode ? t.color : t))
        }, this)), o.mousedown(t.proxy(function(t) {
          t.preventDefault(), this.dropdownclick(".wbb-cp", ".wbb-list", t)
        }, this)), o.find(".sc").mousedown(t.proxy(function(e) {
          e.preventDefault(), this.selectLastRange();
          var s = t(e.currentTarget).attr("title");
          this.execCommand(i, s), o.trigger("queryState")
        }, this)), o.find(".nc").mousedown(t.proxy(function(t) {
          t.preventDefault(), this.selectLastRange(), this.execCommand(i, h), o.trigger("queryState")
        }, this)), o.mousedown(function(t) {
          t.preventDefault && t.preventDefault()
        })
      },
      buildTablepicker: function(e, i, s) {
        var o = t('<div class="wysibb-toolbar-btn wbb-dropdown wbb-tbl">').appendTo(e).append('<span class="btn-inner fonticon ve-tlb-table1"></span><ins class="fonticon ar"></ins>').append(this.strf('<span class="btn-tooltip">{title}<ins/></span>', {
            title: s.title
          })),
          n = t('<div class="wbb-list">').appendTo(o),
          a = t("<div>").css({
            position: "relative",
            "box-sizing": "border-box"
          }).appendTo(n),
          r = s.rows || 10,
          l = s.cols || 10,
          h = r * l;
        a.css("height", r * s.cellwidth + 2 + "px");
        for (var d = 1; l >= d; d++)
          for (var c = 1; r >= c; c++) {
            var u = '<div class="tbl-sel" style="width:' + 100 * d / l + "%;height:" + 100 * c / r + "%;z-index:" + --h + '" title="' + c + "," + d + '"></div>';
            a.append(u)
          }
        o.find(".tbl-sel").mousedown(t.proxy(function(e) {
          e.preventDefault();
          for (var i = t(e.currentTarget).attr("title"), s = i.split(","), o = this.options.bbmode ? "[table]" : '<table class="wbb-table" cellspacing="5" cellpadding="0">', n = 1; n <= s[0]; n++) {
            o += this.options.bbmode ? " [tr]\n" : "<tr>";
            for (var a = 1; a <= s[1]; a++) o += this.options.bbmode ? "  [td][/td]\n" : "<td>﻿</td>";
            o += this.options.bbmode ? "[/tr]\n" : "</tr>"
          }
          o += this.options.bbmode ? "[/table]" : "</table>", this.insertAtCursor(o)
        }, this)), o.mousedown(t.proxy(function(t) {
          t.preventDefault(), this.dropdownclick(".wbb-tbl", ".wbb-list", t)
        }, this))
      },
      buildSelect: function(e, i, s) {
        for (var o = t('<div class="wysibb-toolbar-btn wbb-select wbb-' + i + '">').appendTo(e).append(this.strf('<span class="val">{title}</span><ins class="fonticon sar"></ins>', s)).append(this.strf('<span class="btn-tooltip">{title}<ins/></span>', {
            title: s.title
          })), n = t('<div class="wbb-list">').appendTo(o), a = o.find(".val"), r = t.isArray(s.options) ? s.options : s.options.split(","), l = this.isMobile ? t("<select>").addClass("wbb-selectbox") : "", h = 0; h < r.length; h++) {
          var d = r[h];
          if ("string" == typeof d) {
            var c = this.options.allButtons[d];
            c && (c.html ? t("<span>").addClass("option").attr("oid", d).attr("cmdvalue", c.exvalue).appendTo(n).append(this.strf(c.html, {
              seltext: c.title
            })) : n.append(this.strf('<span class="option" oid="' + d + '" cmdvalue="' + c.exvalue + '">{title}</span>', c)), this.isMobile && l.append(t("<option>").attr("oid", d).attr("cmdvalue", c.exvalue).append(c.title)))
          } else {
            var u = {
              seltext: d.title
            };
            u[s.valueBBname] = d.exvalue, t("<span>").addClass("option").attr("oid", i).attr("cmdvalue", d.exvalue).appendTo(n).append(this.strf(s.html, u)), this.isMobile && l.append(t("<option>").attr("oid", i).attr("cmdvalue", d.exvalue).append(d.exvalue))
          }
        }
        this.isMobile && (l.appendTo(e), this.controllers.push(l), l.bind("queryState", t.proxy(function() {
          l.find("option").each(t.proxy(function(e, i) {
            var s = t(i),
              o = this.queryState(s.attr("oid"), !0),
              n = s.attr("cmdvalue");
            return n && o == s.attr("cmdvalue") || !n && o ? (s.prop("selected", !0), !1) : void 0
          }, this))
        }, this)), l.change(t.proxy(function(e) {
          e.preventDefault();
          var i = t(e.currentTarget).find(":selected"),
            s = i.attr("oid"),
            o = i.attr("cmdvalue"),
            n = this.options.allButtons[s];
          this.execCommand(s, n.exvalue || o || !1), t(e.currentTarget).trigger("queryState")
        }, this))), this.controllers.push(o), o.bind("queryState", t.proxy(function() {
          a.html(s.title), o.find(".option.selected").removeClass("selected"), o.find(".option").each(t.proxy(function(e, i) {
            var s = t(i),
              o = this.queryState(s.attr("oid"), !0),
              n = s.attr("cmdvalue");
            return n && o == s.attr("cmdvalue") || !n && o ? (a.html(s.text()), s.addClass("selected"), !1) : void 0
          }, this))
        }, this)), o.mousedown(t.proxy(function(t) {
          t.preventDefault(), this.dropdownclick(".wbb-select", ".wbb-list", t)
        }, this)), o.find(".option").mousedown(t.proxy(function(e) {
          e.preventDefault();
          var i = t(e.currentTarget).attr("oid"),
            s = t(e.currentTarget).attr("cmdvalue"),
            o = this.options.allButtons[i];
          this.execCommand(i, o.exvalue || s || !1), t(e.currentTarget).trigger("queryState")
        }, this))
      },
      buildSmilebox: function(e, i, s) {
        if (this.options.smileList && this.options.smileList.length > 0) {
          var o = t(this.strf(s.buttonHTML, s)).addClass("btn-inner"),
            n = t('<div class="wysibb-toolbar-btn wbb-smilebox wbb-' + i + '">').appendTo(e).append(o).append(this.strf('<span class="btn-tooltip">{title}<ins/></span>', {
              title: s.title
            })),
            a = t('<div class="wbb-list">').appendTo(n);
          t.isArray(this.options.smileList) && t.each(this.options.smileList, t.proxy(function(e, i) {
            t("<span>").addClass("smile").appendTo(a).append(t(this.strf(i.img, this.options)).attr("title", i.title))
          }, this)), n.mousedown(t.proxy(function(t) {
            t.preventDefault(), this.dropdownclick(".wbb-smilebox", ".wbb-list", t)
          }, this)), n.find(".smile").mousedown(t.proxy(function(e) {
            e.preventDefault(), this.insertAtCursor(this.options.bbmode ? this.toBB(t(e.currentTarget).html()) : t(t(e.currentTarget).html()))
          }, this))
        }
      },
      updateUI: function(e) {
        (!e || e.which >= 8 && e.which <= 46 || e.which > 90 || "mouseup" == e.type) && t.each(this.controllers, t.proxy(function(t, e) {
          e.trigger("queryState")
        }, this)), this.disNonActiveButtons()
      },
      initModal: function() {
        this.$modal = t("#wbbmodal"), 0 == this.$modal.size() && (t.log("Init modal"), this.$modal = t("<div>").attr("id", "wbbmodal").prependTo(document.body).html('<div class="wbbm"><div class="wbbm-title"><span class="wbbm-title-text"></span><span class="wbbclose" title="' + CURLANG.close + '">×</span></div><div class="wbbm-content"></div><div class="wbbm-bottom"><button id="wbbm-submit" class="wbb-button">' + CURLANG.save + '</button><button id="wbbm-cancel" class="wbb-cancel-button">' + CURLANG.cancel + '</button><button id="wbbm-remove" class="wbb-remove-button">' + CURLANG.remove + "</button></div></div>").hide(), this.$modal.find("#wbbm-cancel,.wbbclose").click(t.proxy(this.closeModal, this)), this.$modal.bind("click", t.proxy(function(e) {
          0 == t(e.target).parents(".wbbm").size() && this.closeModal()
        }, this)), t(document).bind("keydown", t.proxy(this.escModal, this)))
      },
      initHotkeys: function() {
        t.log("initHotkeys"), this.hotkeys = [];
        var e = "0123456789       abcdefghijklmnopqrstuvwxyz";
        t.each(this.options.allButtons, t.proxy(function(i, s) {
          if (s.hotkey) {
            var o = s.hotkey.split("+");
            if (o && o.length >= 2) {
              var n = 0,
                a = o.pop();
              t.each(o, function(e, i) {
                switch (t.trim(i.toLowerCase())) {
                  case "ctrl":
                    n += 1;
                    break;
                  case "shift":
                    n += 4;
                    break;
                  case "alt":
                    n += 7
                }
              }), n > 0 && (this.hotkeys["m" + n] || (this.hotkeys["m" + n] = []), this.hotkeys["m" + n]["k" + (e.indexOf(a) + 48)] = i)
            }
          }
        }, this))
      },
      presskey: function(t) {
        if (1 == t.ctrlKey || 1 == t.shiftKey || 1 == t.altKey) {
          var e = (1 == t.ctrlKey ? 1 : 0) + (1 == t.shiftKey ? 4 : 0) + (1 == t.altKey ? 7 : 0);
          if (this.hotkeys["m" + e] && this.hotkeys["m" + e]["k" + t.which]) return this.execCommand(this.hotkeys["m" + e]["k" + t.which], !1), t.preventDefault(), !1
        }
      },
      execCommand: function(e, i) {
        t.log("execCommand: " + e);
        var s = this.options.allButtons[e];
        if (s.en !== !0) return !1;
        var o = this.queryState(e, i),
          n = this.isInClearTextBlock();
        if (!n || n == e) {
          if (s.excmd)
            if (this.options.bbmode)
              if (t.log("Native command in bbmode: " + e), o && 1 != s.subInsert) this.wbbRemoveCallback(e, i);
              else {
                var a = {};
                s.valueBBname && i && (a[s.valueBBname] = i), this.insertAtCursor(this.getBBCodeByCommand(e, a))
              } else this.execNativeCommand(s.excmd, i || !1);
          else s.cmd ? s.cmd.call(this, e, i, o) : this.wbbExecCommand.call(this, e, i, o);
          this.updateUI()
        }
      },
      queryState: function(e, i) {
        var s = this.options.allButtons[e];
        if (s.en !== !0) return !1;
        if (this.options.bbmode) {
          if (s.bbSelector)
            for (var o = 0; o < s.bbSelector.length; o++) {
              var n = this.isBBContain(s.bbSelector[o]);
              if (n) return this.getParams(n, s.bbSelector[o], n[1])
            }
          return !1
        }
        if (!s.excmd) {
          if (t.isArray(s.rootSelector))
            for (var o = 0; o < s.rootSelector.length; o++) {
              var a = this.isContain(this.getSelectNode(), s.rootSelector[o]);
              if (a) return this.getParams(a, s.rootSelector[o])
            }
          return !1
        }
        if (i) try {
          var r = (document.queryCommandValue(s.excmd) + "").replace(/\'/g, "");
          return "foreColor" == s.excmd && (r = this.rgbToHex(r)), r
        } catch (l) {
          return !1
        } else try {
          return "bold" != s.excmd && "italic" != s.excmd && "underline" != s.excmd && "strikeThrough" != s.excmd || !t(this.getSelectNode()).is("img") ? "underline" == s.excmd && t(this.getSelectNode()).closest("a").size() > 0 ? !1 : document.queryCommandState(s.excmd) : !1
        } catch (l) {
          return !1
        }
      },
      wbbExecCommand: function(e, i, s) {
        t.log("wbbExecCommand");
        var o = this.options.allButtons[e];
        if (o)
          if (o.modal) t.isFunction(o.modal) ? o.modal.call(this, e, o.modal, s) : this.showModal.call(this, e, o.modal, s);
          else if (s && 1 != o.subInsert) this.wbbRemoveCallback(e);
        else {
          if (o.groupkey) {
            var n = this.options.groups[o.groupkey];
            if (n) {
              var a = this.getSelectNode();
              t.each(n, t.proxy(function(e, i) {
                var s = this.isContain(a, i);
                if (s) {
                  var o = t("<span>").html(s.innerHTML),
                    n = this.setUID(o);
                  return t(s).replaceWith(o), this.selectNode(this.$editor.find("#" + n)[0]), !1
                }
              }, this))
            }
          }
          this.wbbInsertCallback(e, i)
        }
      },
      wbbInsertCallback: function(e, i) {
        "object" != typeof i && (i = {}), t.log("wbbInsertCallback: " + e);
        var s = this.getCodeByCommand(e, i);
        if (this.insertAtCursor(s), this.seltextID && -1 != s.indexOf(this.seltextID)) {
          var o = this.$body.find("#" + this.seltextID)[0];
          this.selectNode(o), t(o).removeAttr("id"), this.seltextID = !1
        }
      },
      wbbRemoveCallback: function(e, i) {
        t.log("wbbRemoveCallback: " + e);
        var s = this.options.allButtons[e];
        if (this.options.bbmode) {
          var o = (this.getCursorPosBB(), 0);
          t.each(s.bbSelector, t.proxy(function(e, s) {
            var n = s.match(/\{[\s\S]+?\}/g);
            t.each(n, function(t, e) {
              return "{seltext}" == e.toLowerCase() ? (o = t, !1) : void 0
            });
            var a = this.isBBContain(s);
            return a ? (this.txtArea.value = this.txtArea.value.substr(0, a[1]) + this.txtArea.value.substr(a[1], this.txtArea.value.length - a[1]).replace(a[0][0], i === !0 ? "" : a[0][o + 1]), this.setCursorPosBB(a[1]), !1) : void 0
          }, this))
        } else {
          var n = this.getSelectNode();
          t.each(s.rootSelector, t.proxy(function(o, a) {
            var r = this.isContain(n, a);
            if (!r) return !0;
            var l = t(r),
              h = this.options.rules[a][0][1];
            if (l.is("span[wbb]") || !l.is("span,font")) {
              if (i !== !0 && h && h.seltext)
                if (h && h.seltext && h.seltext.sel) {
                  var d = l.find(h.seltext.sel).html();
                  s.onlyClearText === !0 && (d = this.getHTML(d, !0, !0), d = d.replace(/\&#123;/g, "{").replace(/\&#125;/g, "}")), l.replaceWith(d)
                } else {
                  var d = l.html();
                  s.onlyClearText === !0 && (d = this.getHTML(d, !0), d = d.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/\&#123;/g, "{").replace(/\&#125;/g, "}")), l.replaceWith(d)
                } else this.setCursorByEl(l), l.remove();
              return !1
            } {
              var c = this.getRange(),
                u = this.getSelectText();
              this.getSelectNode()
            }
            u = "" == u ? "﻿" : this.clearFromSubInsert(u, e);
            var p = this.elFromString(u),
              b = window.getSelection ? c.cloneRange() : this.body.createTextRange(),
              f = window.getSelection ? c.cloneRange() : this.body.createTextRange();
            if (window.getSelection) {
              this.insertAtCursor('<span id="wbbdivide"></span>');
              var m = l.find("span#wbbdivide").get(0);
              b.setStart(r.firstChild, 0), b.setEndBefore(m), f.setStartAfter(m), f.setEndAfter(r.lastChild)
            } else b.moveToElementText(r), f.moveToElementText(r), b.setEndPoint("EndToStart", c), f.setEndPoint("StartToEnd", c);
            var g = this.getSelectText(!1, b),
              v = this.getSelectText(!1, f);
            if ("" != v) {
              var x = l.clone().html(v);
              l.after(x)
            }
            return i !== !0 && l.after(p), window.getSelection ? (l.html(g), i !== !0 && this.selectNode(p)) : l.replaceWith(g), !1
          }, this))
        }
      },
      execNativeCommand: function(e, i) {
        if (this.body.focus(), "insertHTML" != e || window.getSelection)
          if ("insertHTML" == e) {
            var s = this.getSelection(),
              o = this.elFromString(i),
              n = this.lastRange ? this.lastRange : this.getRange();
            n.deleteContents(), n.insertNode(o), n.collapse(!1), s.removeAllRanges(), s.addRange(n)
          } else "undefined" == typeof i && (i = !1), this.lastRange && (t.log("Last range select"), this.selectLastRange()), document.execCommand(e, !1, i);
        else {
          var a = this.lastRange ? this.lastRange : document.selection.createRange();
          a.pasteHTML(i);
          var r = t("<div>").html(i).text(),
            l = r.indexOf("﻿");
          l > -1 && (a.moveStart("character", -1 * (r.length - l)), a.select()), this.lastRange = !1
        }
      },
      getCodeByCommand: function(t, e) {
        return this.options.bbmode ? this.getBBCodeByCommand(t, e) : this.getHTMLByCommand(t, e)
      },
      getBBCodeByCommand: function(e, i) {
        if (!this.options.allButtons[e]) return "";
        "undefined" == typeof i && (i = {}), i = this.keysToLower(i), i.seltext || (i.seltext = this.getSelectText(!0));
        var s = this.options.allButtons[e].bbcode;
        s = s.replace(/\{(.*?)(\[.*?\])*\}/g, function(t, e, s) {
          if (s) {
            var o;
            if (s && (o = new RegExp(s + "+", "i")), "undefined" != typeof i[e.toLowerCase()] && null === i[e.toLowerCase()].toString().match(o)) return ""
          }
          return "undefined" == typeof i[e.toLowerCase()] ? "" : i[e.toLowerCase()]
        });
        var o = null,
          n = 0;
        if (this.options.allButtons[e].transform) {
          var a = [];
          t.each(this.options.allButtons[e].transform, function(t, e) {
            a.push(e)
          }), a = this.sortArray(a, -1), t.each(a, function(t, e) {
            var s = !0,
              a = 0,
              r = {};
            e = e.replace(/\{(.*?)(\[.*?\])*\}/g, function(t, e, o) {
              var n;
              return e = e.toLowerCase(), o && (n = new RegExp(o + "+", "i")), ("undefined" == typeof i[e.toLowerCase()] || o && null === i[e.toLowerCase()].toString().match(n)) && (s = !1), "undefined" == typeof i[e] || r[e] || (r[e] = 1, a++), "undefined" == typeof i[e.toLowerCase()] ? "" : i[e.toLowerCase()]
            }), s && a > n && (o = e, n = a)
          })
        }
        return o || s
      },
      getHTMLByCommand: function(e, i) {
        if (!this.options.allButtons[e]) return "";
        i = this.keysToLower(i), "undefined" == typeof i && (i = {}), i.seltext || (i.seltext = this.getSelectText(!1), "" == i.seltext ? i.seltext = "﻿" : (i.seltext = this.clearFromSubInsert(i.seltext, e), this.options.allButtons[e].onlyClearText === !0 && (i.seltext = this.toBB(i.seltext).replace(/\</g, "&lt;").replace(/\n/g, "<br/>").replace(/\s{3}/g, '<span class="wbbtab"></span>'))));
        var s = "";
        this.seltextID = "wbbid_" + ++this.lastid, "link" != e && "img" != e ? i.seltext = '<span id="' + this.seltextID + '">' + i.seltext + "</span>" : s = '<span id="' + this.seltextID + '">﻿</span>';
        var o = this.options.allButtons[e].html;
        o = o.replace(/\{(.*?)(\[.*?\])*\}/g, function(t, e, s) {
          if (s) {
            var o = new RegExp(s + "+", "i");
            if ("undefined" != typeof i[e.toLowerCase()] && null === i[e.toLowerCase()].toString().match(o)) return ""
          }
          return "undefined" == typeof i[e.toLowerCase()] ? "" : i[e.toLowerCase()]
        });
        var n = null,
          a = 0;
        if (this.options.allButtons[e].transform) {
          var r = [];
          t.each(this.options.allButtons[e].transform, function(t) {
            r.push(t)
          }), r = this.sortArray(r, -1), t.each(r, function(t, e) {
            var s = !0,
              o = 0,
              r = {};
            e = e.replace(/\{(.*?)(\[.*?\])*\}/g, function(t, e, n) {
              var a;
              return e = e.toLowerCase(), n && (a = new RegExp(n + "+", "i")), ("undefined" == typeof i[e] || n && null === i[e].toString().match(a)) && (s = !1), "undefined" == typeof i[e] || r[e] || (r[e] = 1, o++), "undefined" == typeof i[e] ? "" : i[e]
            }), s && o > a && (n = e, a = o)
          })
        }
        return (n || o) + s
      },
      getSelection: function() {
        return window.getSelection ? window.getSelection() : document.selection ? (this.options.bbmode, document.selection.createRange()) : void 0
      },
      getSelectText: function(e, i) {
        if (e) {
          if (this.txtArea.focus(), "selectionStart" in this.txtArea) {
            var s = this.txtArea.selectionEnd - this.txtArea.selectionStart;
            return this.txtArea.value.substr(this.txtArea.selectionStart, s)
          }
          var o = document.selection.createRange();
          return o.text
        }
        return this.body.focus(), i || (i = this.getRange()), window.getSelection ? i ? t("<div>").append(i.cloneContents()).html() : "" : i.htmlText
      },
      getRange: function() {
        if (!window.getSelection) return this.options.bbmode === !0, document.selection.createRange();
        var t = this.getSelection();
        if (t.getRangeAt && t.rangeCount > 0) return t.getRangeAt(0);
        if (t.anchorNode) {
          var e = (this.options.bbmode, document.createRange());
          return e.setStart(t.anchorNode, t.anchorOffset), e.setEnd(t.focusNode, t.focusOffset), e
        }
      },
      insertAtCursor: function(e, i) {
        if ("string" != typeof e && (e = t("<div>").append(e).html()), this.options.bbmode && "undefined" == typeof i || i === !0) {
          var s = e.replace(/.*(\[\/\S+?\])$/, "$1"),
            o = this.getCursorPosBB() + (-1 != e.indexOf(s) && e.match(/\[.*\]/) ? e.indexOf(s) : e.length);
          document.selection ? (this.txtArea.focus(), this.getSelection().text = e) : (this.txtArea.selectionStart || "0" == this.txtArea.selectionStart) && (this.txtArea.value = this.txtArea.value.substring(0, this.txtArea.selectionStart) + e + this.txtArea.value.substring(this.txtArea.selectionEnd, this.txtArea.value.length)), 0 > o && (o = 0), this.setCursorPosBB(o)
        } else {
          this.execNativeCommand("insertHTML", e);
          var n = this.getSelectNode();
          t(n).closest("table,tr,td") || this.splitPrevNext(n)
        }
      },
      getSelectNode: function(e) {
        if (this.body.focus(), e || (e = this.getRange()), !e) return this.$body;
        var i = window.getSelection ? e.commonAncestorContainer : e.parentElement();
        return t(i).is(".imgWrap") && (i = t(i).children("img")[0]), i
      },
      getCursorPosBB: function() {
        var t = 0;
        if ("selectionStart" in this.txtArea) t = this.txtArea.selectionStart;
        else {
          this.txtArea.focus();
          var e = this.getRange(),
            i = document.body.createTextRange();
          i.moveToElementText(this.txtArea), i.setEndPoint("EndToStart", e), t = i.text.length
        }
        return t
      },
      setCursorPosBB: function(t) {
        if (this.options.bbmode)
          if (window.getSelection) this.txtArea.selectionStart = t, this.txtArea.selectionEnd = t;
          else {
            var e = this.txtArea.createTextRange();
            e.collapse(!0), e.move("character", t), e.select()
          }
      },
      selectNode: function(t, e) {
        if (e || (e = this.getRange()), e)
          if (window.getSelection) {
            var i = this.getSelection();
            e.selectNodeContents(t), i.removeAllRanges(), i.addRange(e)
          } else e.moveToElementText(t), e.select()
      },
      selectRange: function(t) {
        if (t)
          if (window.getSelection) {
            var e = this.getSelection();
            e.removeAllRanges(), e.addRange(t)
          } else t.select()
      },
      cloneRange: function(t) {
        return t ? window.getSelection ? t.cloneRange() : t.duplicate() : void 0
      },
      getRangeClone: function() {
        return this.cloneRange(this.getRange())
      },
      saveRange: function() {
        this.setBodyFocus(), this.lastRange = this.getRangeClone()
      },
      selectLastRange: function() {
        this.lastRange && (this.body.focus(), this.selectRange(this.lastRange), this.lastRange = !1)
      },
      setBodyFocus: function() {
        t.log("Set focus to WysiBB editor"), this.options.bbmode ? this.$txtArea.is(":focus") || this.$txtArea.focus() : this.$body.is(":focus") || this.$body.focus()
      },
      clearLastRange: function() {
        this.lastRange = !1
      },
      filterByNode: function(e) {
        var i = t(e),
          s = i.get(0).tagName.toLowerCase(),
          o = s,
          n = this.getAttributeList(i.get(0));
        t.each(n, t.proxy(function(e, s) {
          var n = i.attr(s);
          if ("_" == s.substr(0, 1) && (s = s.substr(1, s.length)), n && !n.match(/\{.*?\}/))
            if ("style" == s) {
              var n = i.attr(s),
                a = n.split(";");
              t.each(a, function(e, i) {
                i && i.length > 0 && (o += "[" + s + '*="' + t.trim(i) + '"]')
              })
            } else o += "[" + s + '="' + n + '"]';
          else if (n && "style" == s) {
            var r = n.substr(0, n.indexOf("{"));
            if (r && "" != r) {
              var n = n.substr(0, n.indexOf("{")),
                a = n.split(";");
              t.each(a, function(t, e) {
                o += "[" + s + '*="' + e + '"]'
              })
            }
          } else o += "[" + s + "]"
        }, this));
        var a = i.parent().children(o).index(i);
        return a > 0 && (o += ":eq(" + i.index() + ")"), o
      },
      relFilterByNode: function(e, i) {
        var s = "";
        for (t.each(this.options.attrWrap, function(t, e) {
            i = i.replace("[" + e, "[_" + e)
          }); e && "BODY" != e.tagName && !t(e).is(i);) s = this.filterByNode(e) + " " + s, e && (e = e.parentNode);
        return s
      },
      getRegexpReplace: function(t, e) {
        return t = t.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\)/g, "\\$1").replace(/\s+/g, "\\s+").replace(e.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\)/g, "\\$1"), "(.+)").replace(/\{\S+?\}/g, ".*")
      },
      getBBCode: function() {
        return this.options.rules ? this.options.bbmode ? this.$txtArea.val() : (this.clearEmpty(), this.removeLastBodyBR(), this.toBB(this.$body.html())) : this.$txtArea.val()
      },
      toBB: function(e) {
        if (!e) return "";
        var i = "string" == typeof e ? t("<span>").html(e) : t(e);
        i.find("div,blockquote,p").each(function() {
          3 != this.nodeType && this.lastChild && "BR" == this.lastChild.tagName && t(this.lastChild).remove()
        }), i.is("div,blockquote,p") && 3 != i[0].nodeType && i[0].lastChild && "BR" == i[0].lastChild.tagName && t(i[0].lastChild).remove(), i.find("ul > br, table > br, tr > br").remove();
        var s = "";
        return t.each(this.options.srules, t.proxy(function(t, e) {
          i.find(t).replaceWith(e[0])
        }, this)), i.contents().each(t.proxy(function(e, i) {
          var o = t(i);
          if (3 === i.nodeType) s += i.data.replace(/\n+/, "").replace(/\t/g, "   ");
          else {
            for (var n = 0; n < this.rsellist.length; n++) {
              var a = this.rsellist[n];
              if (o && o.is(a))
                for (var r = this.options.rules[a], e = 0; e < r.length; e++) {
                  var l = r[e][0],
                    h = r[e][1],
                    d = !1,
                    c = !1,
                    u = !1;
                  if (o.is("br") || (l = l.replace(/\n/g, "<br>")), l = l.replace(/\{(.*?)(\[.*?\])*\}/g, t.proxy(function(e, s) {
                      var n = h[s.toLowerCase()];
                      "undefined" == typeof n && (t.log("Param: {" + s + "} not found in HTML representation."), d = !0);
                      var a = n.sel ? t(i).find(n.sel) : t(i);
                      if (n.attr && !a.attr(n.attr)) return d = !0, s;
                      var r = n.attr ? a.attr(n.attr) : a.html();
                      if ("undefined" == typeof r || null == r) return d = !0, s;
                      var l = n.rgx;
                      l && "style" == n.attr && ";" != l.substr(l.length - 1, 1) && (l += ";"), "style" == n.attr && r && ";" != r.substr(r.length - 1, 1) && (r += ";");
                      var p = l ? new RegExp(l, "") : !1;
                      if (p)
                        if (r.match(p)) {
                          var b = r.match(p);
                          b && 2 == b.length && (r = b[1])
                        } else r = "";
                      if (n.attr && d === !1)
                        if ("style" == n.attr) {
                          c = !0;
                          var f = "",
                            m = n.rgx.replace(/^\.\*\?/, "").replace(/\.\*$/, "").replace(/;$/, "");
                          t(a.attr("style").split(";")).each(function(t, e) {
                            e && "" != e && (e.match(m) || (f += e + ";"))
                          }), "" == f ? a.removeAttr("style") : a.attr("style", f)
                        } else n.rgx === !1 && (c = !0, u = !0, a.removeAttr(n.attr));
                      return o.is("table,tr,td,font") && (c = !0), r || ""
                    }, this)), !d) {
                    if (o.is("img,br,hr")) {
                      s += l, o = null;
                      break
                    }
                    if (!c || o.attr("notkeep")) {
                      o.is("iframe") ? s += l : (o.empty().html(l), s += this.toBB(o), o = null);
                      break
                    }
                    o.is("table,tr,td") ? (l = this.fixTableTransform(l), s += this.toBB(t("<span>").html(l)), o = null) : o.empty().html("<span>" + l + "</span>")
                  }
                }
            }
            if (!o || o.is("iframe,img")) return !0;
            s += this.toBB(o)
          }
        }, this)), s.replace(/\uFEFF/g, ""), s
      },
      getHTML: function(e, i, s) {
        if (!this.options.bbmode && !i) return this.$body.html();
        s || (e = e.replace(/</g, "&lt;").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;")), e = e.replace(/\[code\]([\s\S]*?)\[\/code\]/g, function(t) {
          return t = t.substr("[code]".length, t.length - "[code]".length - "[/code]".length).replace(/\[/g, "&#91;").replace(/\]/g, "&#93;"), "[code]" + t + "[/code]"
        }), t.each(this.options.btnlist, t.proxy(function(i, s) {
          if ("|" != s && "-" != s) {
            if (!this.options.allButtons[s] || !this.options.allButtons[s].transform) return !0;
            t.each(this.options.allButtons[s].transform, t.proxy(function(i, s) {
              i = i.replace(/\n/g, "");
              var o = [];
              s = s.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\|\\)/g, "\\$1"), s = s.replace(/\{(.*?)(\\\[.*?\\\])*\}/gi, t.proxy(function(t, e, i) {
                return o.push(e), i ? (i = i.replace(/\\/g, ""), "(" + i + "*?)") : "([\\s\\S]*?)"
              }, this));
              for (var n; null != (n = new RegExp(s, "mgi").exec(e));)
                if (n) {
                  var a = {};
                  t.each(o, t.proxy(function(t, e) {
                    a[e] = n[t + 1]
                  }, this));
                  var r = i;
                  r = r.replace(/\{(.*?)(\[.*?\])\}/g, "{$1}"), r = this.strf(r, a), e = e.replace(n[0], r)
                }
            }, this))
          }
        }, this)), t.each(this.options.systr, function(t, i) {
          i = i.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\|\\)/g, "\\$1").replace(" ", "\\s"), e = e.replace(new RegExp(i, "g"), t)
        });
        var o = t(this.elFromString("<div>" + e + "</div>"));
        return this.getHTMLSmiles(o), o.html()
      },
      getHTMLSmiles: function(e) {
        t(e).contents().filter(function() {
          return 3 == this.nodeType
        }).each(t.proxy(this.smileRPL, this))
      },
      smileRPL: function(e, i) {
        var s = i.data;
        t.each(this.options.smileList, t.proxy(function(e, o) {
          var n = s.indexOf(o.bbcode);
          if (-1 != n) {
            var a = s.substring(n + o.bbcode.length, s.length),
              r = document.createTextNode(a);
            return i.data = s = i.data.substr(0, n), t(i).after(r).after(this.strf(o.img, this.options)), this.getHTMLSmiles(i.parentNode), !1
          }
          this.getHTMLSmiles(i)
        }, this))
      },
      setUID: function(e, i) {
        var s = "wbbid_" + ++this.lastid;
        return e && t(e).attr(i || "id", s), s
      },
      keysToLower: function(e) {
        return t.each(e, function(t, i) {
          t != t.toLowerCase() && (delete e[t], e[t.toLowerCase()] = i)
        }), e
      },
      strf: function(e, i) {
        return i = this.keysToLower(t.extend({}, i)), e.replace(/\{([\w\.]*)\}/g, function(e, s) {
          s = s.toLowerCase();
          var o = s.split("."),
            n = i[o.shift().toLowerCase()];
          return t.each(o, function() {
            n = n[this]
          }), null === n || void 0 === n ? "" : n
        })
      },
      elFromString: function(e) {
        if (-1 != e.indexOf("<") && -1 != e.indexOf(">")) {
          var i = document.createElement("SPAN");
          return t(i).html(e), this.setUID(i, "wbb"), t(i).contents().size() > 1 ? i : i.firstChild
        }
        return document.createTextNode(e)
      },
      isContain: function(e, i) {
        for (; e && !t(e).hasClass("wysibb");) {
          if (t(e).is(i)) return e;
          if (!e) return null;
          e = e.parentNode
        }
      },
      isBBContain: function(t) {
        for (var e, i = this.getCursorPosBB(), s = this.prepareRGX(t), o = new RegExp(s, "g"), n = 0; null != (e = o.exec(this.txtArea.value));) {
          var a = this.txtArea.value.indexOf(e[0], n);
          if (i > a && i < a + e[0].length) return [e, a];
          n = a + 1
        }
      },
      prepareRGX: function(t) {
        return t.replace(/(\[|\]|\)|\(|\.|\*|\?|\:|\||\\)/g, "\\$1").replace(/\{.*?\}/g, "([\\s\\S]*?)")
      },
      checkForLastBR: function(e) {
        e || (i = this.body), 3 == e.nodeType && (e = e.parentNode);
        var i = t(e);
        if (i.is("span[id*='wbbid']") && (i = i.parent()), this.options.bbmode === !1 && i.is("div,blockquote,code") && i.contents().size() > 0) {
          var s = i[0].lastChild;
          (!s || s && "BR" != s.tagName) && i.append("<br/>")
        }
        this.$body.contents().size() > 0 && "BR" != this.body.lastChild.tagName && this.$body.append("<br/>")
      },
      getAttributeList: function(e) {
        var i = [];
        return t.each(e.attributes, function(t, e) {
          e.specified && i.push(e.name)
        }), i
      },
      clearFromSubInsert: function(e, i) {
        if (this.options.allButtons[i] && this.options.allButtons[i].rootSelector) {
          var s = t("<div>").html(e);
          return t.each(this.options.allButtons[i].rootSelector, t.proxy(function(e, i) {
            var o = !1;
            "undefined" != typeof this.options.rules[i][0][1].seltext && (o = this.options.rules[i][0][1].seltext.sel);
            var n = !0;
            return s.find("*").each(function() {
              t(this).is(i) && (t(this).replaceWith(o && o.sel ? t(this).find(o.sel.toLowerCase()).html() : t(this).html()), n = !1)
            }), n
          }, this)), s.html()
        }
        return e
      },
      splitPrevNext: function(e) {
        3 == e.nodeType && (e = e.parentNode);
        var i = this.filterByNode(e).replace(/\:eq.*$/g, "");
        t(e.nextSibling).is(i) && (t(e).append(t(e.nextSibling).html()), t(e.nextSibling).remove()), t(e.previousSibling).is(i) && (t(e).prepend(t(e.previousSibling).html()), t(e.previousSibling).remove())
      },
      modeSwitch: function() {
        this.options.bbmode ? (this.$body.html(this.getHTML(this.$txtArea.val())), this.$txtArea.hide().removeAttr("wbbsync").val(""), this.$body.css("min-height", this.$txtArea.height()).show().focus()) : (this.$txtArea.val(this.getBBCode()).css("min-height", this.$body.height()), this.$body.hide(), this.$txtArea.show().focus()), this.options.bbmode = !this.options.bbmode
      },
      clearEmpty: function() {
        function e() {
          return t(this).is("span,font,a,b,i,u,s") ? t(this).hasClass("wbbtab") || 0 != t.trim(t(this).html()).length ? t(this).children().size() > 0 && (t(this).children().filter(e).remove(), 0 == t(this).html().length && "BODY" != this.tagName) ? !0 : void 0 : !0 : !1
        }
        this.$body.children().filter(e).remove()
      },
      dropdownclick: function(e, i, s) {
        var o = t(s.currentTarget).closest(e);
        o.hasClass("dis") || (o.attr("wbbshow") ? (o.removeAttr("wbbshow"), t(document).unbind("mousedown", this.dropdownhandler), document && t(document).unbind("mousedown", this.dropdownhandler), this.lastRange = !1) : (this.saveRange(), this.$editor.find("*[wbbshow]").each(function(e, i) {
          t(i).removeClass("on").find(t(i).attr("wbbshow")).hide().end().removeAttr("wbbshow")
        }), o.attr("wbbshow", i), t(document.body).bind("mousedown", t.proxy(function(t) {
          this.dropdownhandler(o, e, i, t)
        }, this)), this.$body && this.$body.bind("mousedown", t.proxy(function(t) {
          this.dropdownhandler(o, e, i, t)
        }, this))), o.find(i).toggle(), o.toggleClass("on"))
      },
      dropdownhandler: function(e, i, s, o) {
        0 == t(o.target).parents(i).size() && (e.removeClass("on").find(s).hide(), t(document).unbind("mousedown", this.dropdownhandler), this.$body && this.$body.unbind("mousedown", this.dropdownhandler))
      },
      rgbToHex: function(t) {
        if ("#" == t.substr(0, 1)) return t;
        if (-1 == t.indexOf("rgb")) {
          var e = parseInt(t);
          return e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16, "#" + e.toString(16)
        }
        var i = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(t);
        return "#" + this.dec2hex(parseInt(i[2])) + this.dec2hex(parseInt(i[3])) + this.dec2hex(parseInt(i[4]))
      },
      dec2hex: function(t) {
        return t > 15 ? t.toString(16) : "0" + t.toString(16)
      },
      sync: function() {
        this.options.bbmode ? this.$body.html(this.getHTML(this.txtArea.value, !0)) : this.$txtArea.attr("wbbsync", 1).val(this.getBBCode())
      },
      clearPaste: function(e) {
        var i = t(e);
        t.each(this.options.rules, t.proxy(function(e, s) {
          var o = i.find(e).attr("wbbkeep", 1);
          if (o.size() > 0) {
            var n = s[0][1];
            t.each(n, function(t, e) {
              e.sel && o.find(e.sel).attr("wbbkeep", 1)
            })
          }
        }, this)), i.find("*[wbbkeep!='1']").each(t.proxy(function(e, i) {
          var s = t(i);
          !s.is("div,p") || 0 != s.children().size() && "BR" == i.lastChild.tagName || s.after("<br/>")
        }, this)), i.find("*[wbbkeep]").removeAttr("wbbkeep").removeAttr("style"), t.log(i.html()), i.html(this.getHTML(this.toBB(i), !0)), t.log(i.html())
      },
      sortArray: function(t, e) {
        return t.sort(function(t, i) {
          return (t.length - i.length) * (e || 1)
        }), t
      },
      smileFind: function() {
        if (this.options.smilefind) {
          var e = t(this.options.smilefind).find("img[alt]");
          e.size() > 0 && (this.options.smileList = [], e.each(t.proxy(function(e, i) {
            var s = t(i);
            this.options.smileList.push({
              title: s.attr("title"),
              bbcode: s.attr("alt"),
              img: s.removeAttr("alt").removeAttr("title")[0].outerHTML
            })
          }, this)))
        }
      },
      destroy: function() {
        this.$editor.replaceWith(this.$txtArea), this.$txtArea.removeClass("wysibb-texarea").show(), this.$modal.remove(), this.$txtArea.data("wbb", null)
      },
      pressTab: function(t) {
        t && 9 == t.which && (t.preventDefault && t.preventDefault(), this.options.bbmode ? this.insertAtCursor("   ", !1) : this.insertAtCursor('<span class="wbbtab">﻿</span>', !1))
      },
      removeLastBodyBR: function() {
        this.body.lastChild && 3 != this.body.lastChild.nodeType && "BR" == this.body.lastChild.tagName && (this.body.removeChild(this.body.lastChild), this.removeLastBodyBR())
      },
      traceTextareaEvent: function(e) {
        0 == t(e.target).closest("div.wysibb").size() && (t(document.activeElement).is("div.wysibb-body") && this.saveRange(), setTimeout(t.proxy(function() {
          var i = this.$txtArea.val();
          this.options.bbmode !== !1 || "" == i || 0 != t(e.target).closest("div.wysibb").size() || this.$txtArea.attr("wbbsync") || (this.selectLastRange(), this.insertAtCursor(this.getHTML(i, !0)), this.$txtArea.val("")), t(document.activeElement).is("div.wysibb-body") && (this.lastRange = !1)
        }, this), 100))
      },
      txtAreaInitContent: function() {
        this.$body.html(this.getHTML(this.txtArea.value, !0))
      },
      getValidationRGX: function(t) {
        return t.match(/\[\S+\]/) ? t.replace(/.*(\\*\[\S+\]).*/, "$1") : ""
      },
      smileConversion: function() {
        if (this.options.smileList && this.options.smileList.length > 0) {
          var e = this.getSelectNode();
          if (3 == e.nodeType) {
            var i = e.data;
            i.length >= 2 && !this.isInClearTextBlock(e) && 0 == t(e).parents("a").size() && t.each(this.options.srules, t.proxy(function(s, o) {
              var n = o[0],
                a = i.indexOf(n);
              if (-1 != a) {
                var r = i.substring(a + n.length, i.length),
                  l = document.createTextNode(r),
                  h = document.createElement("SPAN");
                return e.data = e.data.substr(0, a), t(e).after(l).after(h).after(this.strf(o[1], this.options)), this.selectNode(h), !1
              }
            }, this))
          }
        }
      },
      isInClearTextBlock: function() {
        if (this.cleartext) {
          var e = !1;
          return t.each(this.cleartext, t.proxy(function(t, i) {
            return this.queryState(i) ? (e = i, !1) : void 0
          }, this)), e
        }
        return !1
      },
      wrapAttrs: function(e) {
        return t.each(this.options.attrWrap, function(t, i) {
          e = e.replace(i + '="', "_" + i + '="')
        }), e
      },
      unwrapAttrs: function(e) {
        return t.each(this.options.attrWrap, function(t, i) {
          e = e.replace("_" + i + '="', i + '="')
        }), e
      },
      disNonActiveButtons: function() {
        this.isInClearTextBlock() ? this.$toolbar.find(".wysibb-toolbar-btn:not(.on,.mswitch)").addClass("dis") : this.$toolbar.find(".wysibb-toolbar-btn.dis").removeClass("dis")
      },
      setCursorByEl: function(e) {
        var i = document.createTextNode("﻿");
        t(e).after(i), this.selectNode(i)
      },
      imgListeners: function() {
        t(document).on("mousedown", t.proxy(this.imgEventHandler, this))
      },
      imgEventHandler: function(e) {
        var i = t(e.target);
        this.hasWrapedImage && (0 == i.closest(".wbb-img,#wbbmodal").size() || i.hasClass("wbb-cancel-button")) && (this.$body.find(".imgWrap ").each(function() {
          t.log("Removed imgWrap block"), t(this).replaceWith(t(this).find("img"))
        }), this.hasWrapedImage = !1, this.updateUI()), i.is("img") && i.closest(".wysibb-body").size() > 0 && (i.wrap("<span class='imgWrap'></span>"), this.hasWrapedImage = i, this.$body.focus(), this.selectNode(i.parent()[0]))
      },
      showModal: function(e, i, s) {
        t.log("showModal: " + e), this.saveRange();
        var o = this.$modal.find(".wbbm-content").html(""),
          n = this.$modal.find(".wbbm").removeClass("hastabs");
        if (this.$modal.find("span.wbbm-title-text").html(i.title), i.tabs && i.tabs.length > 1) {
          n.addClass("hastabs");
          var a = t('<div class="wbbm-tablist">').appendTo(o).append("<ul>").children("ul");
          t.each(i.tabs, t.proxy(function(t, e) {
            0 == t && (e.on = "on"), a.append(this.strf("<li class=\"{on}\" onClick=\"$(this).parent().find('.on').removeClass('on');$(this).addClass('on');$(this).parents('.wbbm-content').find('.tab-cont').hide();$(this).parents('.wbbm-content').find('.tab" + t + "').show()\">{title}</li>", e))
          }, this))
        }
        i.width && n.css("width", i.width);
        var r = t('<div class="wbbm-cont">').appendTo(o);
        s ? n.find("#wbbm-remove").show() : n.find("#wbbm-remove").hide(), t.each(i.tabs, t.proxy(function(e, i) {
          var o = t("<div>").addClass("tab-cont tab" + e).attr("tid", e).appendTo(r);
          e > 0 && o.hide(), i.html ? o.html(this.strf(i.html, this.options)) : t.each(i.input, t.proxy(function(e, i) {
            i.value = s[i.param.toLowerCase()], "seltext" != i.param.toLowerCase() || i.value && "" != i.value || (i.value = this.getSelectText(this.options.bbmode)), i.value && 0 == i.value.indexOf("<span id='wbbid") && t(i.value).is("span[id*='wbbid']") && (i.value = t(i.value).html()), o.append(i.type && "div" == i.type ? this.strf('<div class="wbbm-inp-row"><label>{title}</label><div class="inp-text div-modal-text" contenteditable="true" name="{param}">{value}</div></div>', i) : this.strf('<div class="wbbm-inp-row"><label>{title}</label><input class="inp-text modal-text" type="text" name="{param}" value="{value}"/></div>', i))
          }, this))
        }, this)), t.isFunction(i.onLoad) && i.onLoad.call(this, e, i, s), n.find("#wbbm-submit").click(t.proxy(function() {
          if (t.isFunction(i.onSubmit)) {
            var o = i.onSubmit.call(this, e, i, s);
            if (o === !1) return
          }
          var n = {},
            a = !0;
          this.$modal.find(".wbbm-inperr").remove(), this.$modal.find(".wbbm-brdred").removeClass("wbbm-brdred"), t.each(this.$modal.find(".tab-cont:visible .inp-text"), t.proxy(function(e, s) {
            var o = t(s).parents(".tab-cont").attr("tid"),
              r = t(s).attr("name").toLowerCase(),
              l = "";
            l = t(s).is("input,textrea,select") ? t(s).val() : t(s).html();
            var h = i.tabs[o].input[e].validation;
            "undefined" != typeof h && (l.match(new RegExp(h, "i")) || (a = !1, t(s).after('<span class="wbbm-inperr">' + CURLANG.validation_err + "</span>").addClass("wbbm-brdred"))), n[r] = l
          }, this)), a && (t.log("Last range: " + this.lastRange), this.selectLastRange(), s && this.wbbRemoveCallback(e, !0), this.wbbInsertCallback(e, n), this.closeModal(), this.updateUI())
        }, this)), n.find("#wbbm-remove").click(t.proxy(function() {
          this.selectLastRange(), this.wbbRemoveCallback(e), this.closeModal(), this.updateUI()
        }, this)), t(document.body).css("overflow", "hidden"), t("body").height() > t(window).height() && t(document.body).css("padding-right", "18px"), this.$modal.show(), this.isMobile ? n.css("margin-top", "10px") : n.css("margin-top", (t(window).height() - n.outerHeight()) / 3 + "px"), setTimeout(t.proxy(function() {
          this.$modal.find(".inp-text:visible")[0].focus()
        }, this), 10)
      },
      escModal: function(t) {
        27 == t.which && this.closeModal()
      },
      closeModal: function() {
        return t(document.body).css("overflow", "auto").css("padding-right", "0").unbind("keyup", this.escModal), this.$modal.find("#wbbm-submit,#wbbm-remove").unbind("click"), this.$modal.hide(), this.lastRange = !1, this
      },
      getParams: function(e, i, s) {
        var o = {};
        if (this.options.bbmode) {
          var n = i.match(/\{[\s\S]+?\}/g);
          i = this.prepareRGX(i);
          var a = new RegExp(i, "g"),
            r = this.txtArea.value;
          s > 0 && (r = r.substr(s, r.length - s));
          var l = a.exec(r);
          l && t.each(n, function(t, e) {
            o[e.replace(/\{|\}/g, "").replace(/"/g, "'").toLowerCase()] = l[t + 1]
          })
        } else {
          var h = this.options.rules[i][0][1];
          t.each(h, t.proxy(function(i, s) {
            var n = "",
              a = s.sel !== !1 ? n = t(e).find(s.sel) : t(e);
            if (n = s.attr !== !1 ? a.attr(s.attr) : a.html()) {
              if (s.rgx !== !1) {
                var r = n.match(new RegExp(s.rgx));
                r && 2 == r.length && (n = r[1])
              }
              o[i] = n.replace(/"/g, "'")
            }
          }, this))
        }
        return o
      },
      imgLoadModal: function() {
        t.log("imgLoadModal"), this.options.imgupload === !0 ? (this.$modal.find("#imguploader").dragfileupload({
          url: this.strf(this.options.img_uploadurl, this.options),
          extraParams: {
            maxwidth: this.options.img_maxwidth,
            maxheight: this.options.img_maxheight
          },
          themePrefix: this.options.themePrefix,
          themeName: this.options.themeName,
          success: t.proxy(function(t) {
            this.$txtArea.insertImage(t.image_link, t.thumb_link), this.closeModal(), this.updateUI()
          }, this)
        }), this.$modal.find("#fileupl").bind("change", function() {
          t("#fupform").submit()
        }), this.$modal.find("#fupform").bind("submit", t.proxy(function(e) {
          t(e.target).parents("#imguploader").hide().after('<div class="loader"><img src="' + this.options.themePrefix + "/" + this.options.themeName + '/img/loader.gif" /><br/><span>' + CURLANG.loading + "</span></div>").parent().css("text-align", "center")
        }, this))) : (this.$modal.find(".hastabs").removeClass("hastabs"), this.$modal.find("#imguploader").parents(".tab-cont").remove(), this.$modal.find(".wbbm-tablist").remove())
      },
      imgSubmitModal: function() {
        t.log("imgSubmitModal")
      },
      printObjectInIE: function(e) {
        try {
          t.log(JSON.stringify(e))
        } catch (i) {}
      },
      checkFilter: function(e, i) {
        t.log("node: " + t(e).get(0).outerHTML + " filter: " + i + " res: " + t(e).is(i.toLowerCase()))
      },
      debug: function(e) {
        if (this.options.debug === !0) {
          var i = (new Date).getTime();
          "undefined" != typeof console ? console.log(i - this.startTime + " ms: " + e) : t("#exlog").append("<p>" + (i - this.startTime) + " ms: " + e + "</p>"), this.startTime = i
        }
      },
      isChrome: function() {
        return window.chrome ? !0 : !1
      },
      fixTableTransform: function(e) {
        return e ? -1 == t.inArray("table", this.options.buttons) ? e.replace(/\<(\/*?(table|tr|td|tbody))[^>]*\>/gi, "") : e.replace(/\<(\/*?(table|tr|td))[^>]*\>/gi, "[$1]".toLowerCase()).replace(/\<\/*tbody[^>]*\>/gi, "") : ""
      }
    }, t.log = function(e) {
      "undefined" != typeof wbbdebug && wbbdebug === !0 && ("undefined" != typeof console ? console.log(e) : t("#exlog").append("<p>" + e + "</p>"))
    }, t.fn.wysibb = function(e) {
      return this.each(function() {
        var i = t(this).data("wbb");
        i || new t.wysibb(this, e)
      })
    }, t.fn.wdrag = function(e) {
      e.scope || (e.scope = this);
      var i, s = {
        x: 0,
        y: 0,
        height: 0
      };
      e.scope.drag_mousedown = function(o) {
        o.preventDefault(), s = {
          x: o.pageX,
          y: o.pageY,
          height: e.height,
          sheight: e.scope.$body.height()
        }, i = !0, t(document).bind("mousemove", t.proxy(e.scope.drag_mousemove, this)), t(this).addClass("drag")
      }, e.scope.drag_mouseup = function(s) {
        i === !0 && (s.preventDefault(), t(document).unbind("mousemove", e.scope.drag_mousemove), t(this).removeClass("drag"), i = !1)
      }, e.scope.drag_mousemove = function(t) {
        t.preventDefault();
        var i = 0,
          o = 0;
        if (e.axisX && (i = t.pageX - s.x), e.axisY && (o = t.pageY - s.y), 0 != o) {
          var n = s.sheight + o;
          n > s.height && n <= e.scope.options.resize_maxheight && (1 == e.scope.options.bbmode ? e.scope.$txtArea.css(e.scope.options.autoresize === !0 ? "min-height" : "height", n + "px") : e.scope.$body.css(e.scope.options.autoresize === !0 ? "min-height" : "height", n + "px"))
        }
      }, t(this).bind("mousedown", e.scope.drag_mousedown), t(document).bind("mouseup", t.proxy(e.scope.drag_mouseup, this))
    }, t.fn.getDoc = function() {
      return this.data("wbb").doc
    }, t.fn.getSelectText = function(t) {
      return this.data("wbb").getSelectText(t)
    }, t.fn.bbcode = function(t) {
      return "undefined" != typeof t ? (this.data("wbb").options.bbmode ? this.data("wbb").$txtArea.val(t) : this.data("wbb").$body.html(this.data("wbb").getHTML(t)), this) : this.data("wbb").getBBCode()
    }, t.fn.htmlcode = function(t) {
      return this.data("wbb").options.onlyBBMode || this.data("wbb").inited !== !0 ? void 0 : "undefined" != typeof t ? (this.data("wbb").$body.html(t), this) : this.data("wbb").getHTML(this.data("wbb").$txtArea.val())
    }, t.fn.getBBCode = function() {
      return this.data("wbb").getBBCode()
    }, t.fn.getHTML = function() {
      var t = this.data("wbb");
      return t.getHTML(t.$txtArea.val())
    }, t.fn.getHTMLByCommand = function(t, e) {
      return this.data("wbb").getHTMLByCommand(t, e)
    }, t.fn.getBBCodeByCommand = function(t, e) {
      return this.data("wbb").getBBCodeByCommand(t, e)
    }, t.fn.insertAtCursor = function(t, e) {
      return this.data("wbb").insertAtCursor(t, e), this.data("wbb")
    }, t.fn.execCommand = function(t, e) {
      return this.data("wbb").execCommand(t, e), this.data("wbb")
    }, t.fn.insertImage = function(t, e) {
      var i = this.data("wbb"),
        s = e ? i.getCodeByCommand("link", {
          url: t,
          seltext: i.getCodeByCommand("img", {
            src: e
          })
        }) : i.getCodeByCommand("img", {
          src: t
        });
      return this.insertAtCursor(s), i
    }, t.fn.sync = function() {
      return this.data("wbb").sync(), this.data("wbb")
    }, t.fn.destroy = function() {
      this.data("wbb").destroy()
    }, t.fn.queryState = function(t) {
      return this.data("wbb").queryState(t)
    }
  }(jQuery),
  function(t) {
    "use strict";

    function e(e, i) {
      this.$block = t(e), this.opt = t.extend({
        url: !1,
        success: !1,
        extraParams: !1,
        fileParam: "img",
        validation: ".(jpg|png|gif|jpeg)$",
        t1: CURLANG.fileupload_text1,
        t2: CURLANG.fileupload_text2
      }, i)
    }
    t.fn.dragfileupload = function(t) {
      return this.each(function() {
        var i = new e(this, t);
        i.init()
      })
    }, e.prototype = {
      init: function() {
        if (null != window.FormData) {
          this.$block.addClass("drag"), this.$block.prepend('<div class="p2">' + this.opt.t2 + "</div>"), this.$block.prepend('<div class="p">' + this.opt.t1 + "</div>"), this.$block.bind("dragover", function() {
            return t(this).addClass("dragover"), !1
          }), this.$block.bind("dragleave", function() {
            return t(this).removeClass("dragover"), !1
          });
          var e = t.proxy(function(t) {
              var e = parseInt(t.loaded / t.total * 100, 10);
              this.$loader.children("span").text(CURLANG.loading + ": " + e + "%")
            }, this),
            i = jQuery.ajaxSettings.xhr();
          i.upload && i.upload.addEventListener("progress", e, !1), this.$block[0].ondrop = t.proxy(function(e) {
            e.preventDefault(), this.$block.removeClass("dragover");
            var s = e.dataTransfer.files[0];
            if (this.opt.validation && !s.name.match(new RegExp(this.opt.validation))) return this.error(CURLANG.validation_err), !1;
            var o = new FormData;
            o.append(this.opt.fileParam, s), this.opt.extraParams && t.each(this.opt.extraParams, function(t, e) {
              o.append(t, e)
            }), this.$loader = t('<div class="loader"><img src="' + this.opt.themePrefix + "/" + this.opt.themeName + '/img/loader.gif" /><br/><span>' + CURLANG.loading + "</span></div>"), this.$block.html(this.$loader), t.ajax({
              type: "POST",
              url: this.opt.url,
              data: o,
              processData: !1,
              contentType: !1,
              xhr: function() {
                return i
              },
              dataType: "json",
              success: t.proxy(function(t) {
                t && 1 == t.status ? this.opt.success(t) : this.error(t.msg || CURLANG.error_onupload)
              }, this),
              error: t.proxy(function() {
                this.error(CURLANG.error_onupload)
              }, this)
            })
          }, this)
        }
      },
      error: function(t) {
        this.$block.find(".upl-error").remove().end().append('<span class="upl-error">' + t + "</span>").addClass("wbbm-brdred")
      }
    }
  }(jQuery);
