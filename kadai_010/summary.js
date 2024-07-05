$(function(){
  // 文字色変更
  $('#change-color').on('click', function(){
    $('#target').css('color', 'pink');
  });

  // 文字内容変更
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });

  // フェードアウト
  $('#fade-out').on('click', function(){
    $('#target').fadeOut(3500);
  })

  // フェードイン
  $('#fade-in').on('click', function(){
    $('#target').fadeIn(3500);
  });

});