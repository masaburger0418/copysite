/* ヘッダーナビ ドロップダウン */
  $(function(){
    $(".p-header__nav_item").hover(
      function () {
      $(this).children('ul').slideDown(200); //(200) = 0.2秒
    },function(){
      $(this).children('ul').hide();
      }
    );
  });


/* ハンバーガーメニューボタン 切替え*/
  $(function(){
    $(".p-hamburger").on("click",function () {
      $(this).toggleClass("is-open");//p-hamburgerにis-openクラスを追加
      $('.p-header__nav').slideToggle(300);//ハンバーガーボタンクリック後、p-header__navを表示
    });
  });


/* ハンバーガーメニュー『＋』を『－』に切り替え  */
$(function () {
  $('.c-btn--plus').hover(
    function () {
      $(this).toggleClass('is-open');
    });
});

