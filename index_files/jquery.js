$(function(){
    $('.nav').hover(function(){
        var nav = $(this).find('li').length;
        $(this).animate({'height':24 * nav + 'px'},'fast');
    },function(){
        $(this).animate({'height':'24px'},'fast');
    });
});