/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  $('#login-box .close, #login-box .cover').click (function () { $('#login-box').removeClass ('show');});
  $('#forget-box .close, #forget-box .cover').click (function () { $('#forget-box').removeClass ('show');});
  $('#forget-submit-box .close, #forget-submit-box .cover').click (function () { $('#forget-submit-box').removeClass ('show');});

  // Login box feature
  $('#login').click (function () { $('#login-box').addClass ('show'); });
  $('#login-box .forget').click (function () { $('#login-box').removeClass ('show'); $('#forget-box').addClass ('show'); });
  $('#login-box .submit').click (function () {
    var account = $('#login-box input[name="account"]').val ();
    var password = $('#login-box input[name="password"]').val ();
    var remember = $('#login-box input[name="remember"]').is (":checked");
    // ajax...
      // ajax error
      $('#login-box .tip').addClass ('show');
  });

  // Forget box feature
  $('#forget-box .submit').click (function () {
    // ajax...
    $('#forget-box').removeClass ('show');
    $('#forget-submit-box').addClass ('show');
  });
});