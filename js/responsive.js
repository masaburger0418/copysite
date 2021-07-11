/* ハンバーガーメニューウィンドウサイズ変更したら閉じる */

$(function () {
  $(window).resize(
    function () {
      //outerWidth()でpaddingとborderを含めた幅を取得。window幅が1200以下の時に処理発動
      if ($(window).outerWidth() < 1200) {
        $('.p-hamburger').removeClass('is-open');
        $('.p-header__nav').slideUp(); 
      } else {
        //window幅1201以上はナビゲーションを表示しておく
        $('.p-header__nav').show();
      }

    });
});