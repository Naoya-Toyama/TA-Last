/* globals $ */

document.querySelectorAll('*').forEach(el => el.clientWidth > document.body.clientWidth ? console.log(el) : null);

/*----------------------------------
スクロール管理
----------------------------------*/
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

/*----------------------------------
キャンペーンページ  下からふわっと
----------------------------------*/
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.cv__flex-left--fadein').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("cv__flex-left--fadein-01");
      }
    });
  });
});

/*----------------------------------
左右からフェードイン
「これらの原因はシャンプーにありました」,
「プレミアムbioシャンプーのこだわりポイント」
----------------------------------*/
$('.cause__top-flex--img,.point__flex-img').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '100%',
});

$('.cause__bottom-flex--img,.point__flex-re-img').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '100%',
});

//入力チェック
$('#contact_form').on('submit', function (e) {
  
  var name = $('#name').val(); /* お名前のinput内容を取得 */
  var kana = $('#kana').val(); /* フリガナお名前のinput内容を取得 */
  var post = $('#post').val();/* 郵便番号のinput内容を取得 */
  var prefecture = $('#prefecture').val();/* 都道府県の内容を取得 */
  var municipalities = $('#municipalities').val();/* 市区町村のinput内容を取得 */
  var tel = $('#tel').val();/* 電話番号のinput内容を取得 */
  var mail = $('#mail').val();/* メールアドレスのinput内容を取得 */
  var pass = $('#password').val();/* パスワードのinput内容を取得 */
  var payment = $('input[name="payment"]:checked').val();/* 都道府県の内容を取得 */
  var error = $('[id^=error_]');/* エラーメッセージの有無を取得 */
  
  $('[id^=error_]').text('');/* エラーメッセージ初期化 */
  
  //お名前入力チェック
  if (name.trim() === '') {/* input id="name"が未入力ならtrue */
    $('#error_name').text('お名前を入力してください');
  }
    
  //フリガナ入力チェック  
  if (kana.trim() === '') {/* input id="kana"が未入力ならtrue */
    $('#error_kana').text('フリガナを入力してください');
    } else if (!kana.match(/^[ァ-ヴ　]+$/)) {/* 入力されているが正規表現とマッチしなければtrue */
    $('#error_kana').text('全角カタカナとスペースで入力してください');
  }
  
  //郵便番号入力チェック
  if (post.trim() === '') {/* input id="post"が未入力なら */
    $('#error_post').text('郵便番号を入力してください');
    } else if (!post.match(/^\d{7}$/)) {/* 入力されているが正規表現とマッチしなければtrue */
    $('#error_post').text('7桁のハイフン無しで入力してください');
  }
  
  //都道府県入力チェック
  if (prefecture.trim() === '') {/* input id="prefecture"が未入力ならtrue */
    $('#error_prefecture').text('都道府県を選択してください');
  }
  
  //市区町村入力チェック
  if (municipalities.trim() === '') {/* input id="municipalities"が未入力なら */
    $('#error_municipalities').text('市区町村を入力してください');
    } else if (!municipalities.match(/^[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠０-９]*$/)) {/* 入力されているが正規表現とマッチしなければtrue */
    $('#error_municipalities').text('全角で入力してください');
  }
  
  //電話番号入力チェック
  if (tel.trim() === '') {/* input id="tel"が未入力なら */
    $('#error_tel').text('電話番号を入力してください');
    } else if (!tel.match(/^\d{10,11}$/)) {/* 入力されているが正規表現とマッチしなければtrue */
    $('#error_tel').text('ハイフン無しで入力してください');
  }
  
  //メールアドレス入力チェック
  if (mail.trim() === '') {/* input id="mail"が未入力なら */
    $('#error_mail').text('メールアドレスを入力してください');
    } else if (!mail.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {/* 入力されているが正規表現とマッチしなければtrue */
    $('#error_mail').text('正しく入力してください');
  }
  
  //パスワード入力チェック
  if (pass.trim() === '') {/* input id="password"が未入力なら */
    $('#error_password').text('パスワードを入力してください');
    } else if (!pass.match(/^([a-zA-Z0-9]{4,})$/)) {/* 入力されているが正規表現とマッチしなければtrue */
    $('#error_password').text('4文字以上の英数字で入力してください');
  }
  
  //ラジオボタン入力チェック
  if (payment === undefined) {/* input id="password"が未入力なら */
    $('#error_payment').text('お支払方法を選択してください');
  }
  
  // エラーがあった場合はページ遷移を止める
  if (error.text() !== '') {
    e.preventDefault();
  } else {
    // エラーがない場合はアラートを表示する(ページ遷移は自動で行われる)

    // 今回はサーバーにデータを送らないのでページ遷移を止める
    e.preventDefault();
    alert('入力OKです');
  }
});

