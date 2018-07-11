
 

    
$(window).scroll(function(){
  
    let wScroll=$(this).scrollTop();

    if(wScroll > $('.about-section').offset().top){
        $('.navbar').addClass('bg-secondary');
        $('footer').show();
    }
    else{
        $('.navbar').removeClass('bg-secondary');
        $('footer').hide();
    }

    if(wScroll>$('.why-section').offset().top-400){
        $('.form-field').hide();
    }
    else{
        $('.form-field').show();
    }
    if(wScroll>$('.perfe-section').offset().top-100){
        $('.form-field').show();
    }
// number counter 


});
$(document).ready(function(){
    $('.formMobile').click(function(){
        $('.form-field').toggle();
    })
})



function onTop(){
window.scroll({
    top: 0,
    behavior: "smooth",
    
  });
}

// header shows on mobile
$(document).ready(function(){
    $('#navButton').click(function(){
    
        $('.navbar').addClass('bg-secondary');
    })
var wScroll=$(window).scrollTop();
    if(wScroll>$('.story-section').offset().top) {
       
        $('.count').each(function() {
           $(this).prop('Counter',0).animate({
               Counter: $(this).text()
           }, {
               duration: 4000,
               easing: 'swing',
               step: function (now) {
                   $(this).text(Math.ceil(now));
               }
           });
       });
     
 }
 });

 

