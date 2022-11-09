$(document).ready((function(){
    $(".loader").css('display','none')
    $(".spinner").css('display','none')
    $('body').css('overflow','unset')
}))
$(window).scroll(function(){
  let t = $(window).scrollTop();
  let bioSec = $('.bio').offset().top
  if(t >= 300){
    $('.navbar').addClass('bg-white')
    $('.navbar').removeClass('bg-transparent')
    $('.navbar').css('tranisition','5s')
    $('.btnTop').css('display','block')
    }else{
        $('.navbar').addClass('bg-transparent')
        $('.navbar').removeClass('bg-white')  
        $('.btnTop').css('display','none')
    }
    if(t >= bioSec){
        $('.navbar').addClass('bg-danger')
        $('.navbar').removeClass('bg-white')
    }
})
$('.btnTop').click(function(){
    $(window).scrollTop(0)
})
$('.nav-link').click(function(e){
    let attr = $(e.target).attr('href')
    let secOff = $(attr).offset().top
    $('html, body').animate({scrollTop: secOff},400)
})