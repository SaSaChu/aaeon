/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  $('#year_tab').each (function () {

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
});