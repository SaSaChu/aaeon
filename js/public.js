/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  if ($(window).width () < 960) {
    $('.lb').click (function () {
      if (!$(this).hasClass ('s')) {
        $(this).addClass ('s');
        return false;
      }
    });

    $('.stwo').click (function () {
      $(this).toggleClass ('s').siblings ().removeClass ('s');
    });
  }


  $('.year_tab').each (function () {

    var $a = $(this).find ('> a');
    var $c = $(this).find ('> div > div');

    $(this).data ('i', $c.find ('a.a').index ());
    $c.attr ('class', 'p' + $c.find ('a.a').index ());

    $a.first ().click (function () {
      if ($(this).data ('i') + 1 < $c.find ('a').length)
        $(this).data ('i', $(this).data ('i') + 1);
      $c.attr ('class', 'p' + $(this).data ('i'));
    }.bind ($(this)));
    $a.last ().click (function () {
      if ($(this).data ('i') > 0)
        $(this).data ('i', $(this).data ('i') - 1);
      $c.attr ('class', 'p' + $(this).data ('i'));
    }.bind ($(this)));
  });

  $('.select').each (function () {
    $(this).find ('> span').append (
        $('<a />').text ($(this).find ('> div a.a').text ())
      );
    $(this).click (function () {
      $(this).toggleClass ('s');
    });
    // var $that = $(this);
    // $(this).find ('> div a').click (function () {

    //     $that.find ('> span a').text ($(this).text ())
    // })
  });
});