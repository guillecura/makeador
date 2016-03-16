(function($) {
  'use strict';

  $(document).ready(function _onbodyready(){

    $("body").pullToRefresh({
      sensibility: 100,
      refresh: 100,
      resetSpeed: '150ms'
    });

    $("body").on("start.pulltorefresh", function (e){
      e.preventDefault();

      $('.header').text("makea or doesn't makea?");
      $('.makea-text').text('keep pulling...');
      $('.footer').text('pull to find out!');
      $('body').attr("class", null);

    });

    $("body").on("refresh.pulltorefresh", function (e){
      e.preventDefault();

      console.log($('body').css('transform', 'translateY'));

      var makeaObj = {
        'makea': 'Makea',
        'no-makea': 'No Makea',
        'not-sure': 'Not Sure If Makea'
      };

      var keys = Object.keys(makeaObj);
      var makeaKey = keys[Math.floor(Math.random() * keys.length)];
      var makeaValue = makeaObj[makeaKey];

      $('.header').text('');
      $('.makea-text').text(makeaValue);
      $('.footer').text('pull to try again..');
      $('body').attr("class", makeaKey);

    });
  });

})(jQuery);
