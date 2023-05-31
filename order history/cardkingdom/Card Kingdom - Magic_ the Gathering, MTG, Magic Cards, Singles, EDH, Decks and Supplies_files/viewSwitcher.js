//event listeners for viewSwitcher
$(function () {
  //view is set onload cookie check in php
  $(document).on('touchend click','.showGalleryView',function(){
    //ck.displayHiddenCards();
    $('body').removeClass('textOnlyList');
    $('body').addClass('listShowCart listShowDetails');
    $('.expandAllCards').removeClass('toggled');
    $('.zoomedWrapper').removeClass('zoomedWrapper').find('.cardLink').removeClass('zoomed').find('.catalogItemMag').remove('.catalogItemMag');
    $('.zoomItem').removeClass('zoomItem');
    ck.setCookie('viewType', 'listShowCart listShowDetails',365);
  });
  $(document).on('touchend click','.showDetailView',function(){
    //ck.displayHiddenCards();
    $('body').removeClass('listShowCart listShowDetails textOnlyList');
    $('.expandAllCards').removeClass('toggled');
    $('.zoomedWrapper').removeClass('zoomedWrapper').find('.cardLink').removeClass('zoomed').find('.catalogItemMag').remove('.catalogItemMag');
    ck.setCookie('viewType', '',365);
  });
  $(document).on('touchend click','.showTextView',function(){
    $('body').removeClass('listShowCart listShowDetails');
    $('.expandAllCards').removeClass('toggled');
    $('.zoomedWrapper').removeClass('zoomedWrapper').find('.cardLink').removeClass('zoomed').find('.catalogItemMag').remove('.catalogItemMag');
    $('.zoomItem').removeClass('zoomItem');
    $('body').addClass('textOnlyList');
    ck.setCookie('viewType', 'textOnlyList',365);
  });

});