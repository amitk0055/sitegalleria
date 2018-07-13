
 
wWidth=$( window ).width();

if(wWidth<600){
    var modal=document.getElementById('form-field');
    window.onclick = function(event) {
        if (event.target =modal) {
            modal.style.display = "none";
        }
    }
}
  
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
    if(wWidth< 600){
        $('.form-field').hide();
    }
    if(wScroll>$('.perfe-section').offset().top-100){
        if(wWidth <600){
            $('.form-field').hide();
        } 
        else{
        $('.form-field').show();
        }
    }
// number counter 


});

$(document).ready(function(){
    $('.formMobile').click(function(){
        $('.form-field').toggle(function(){
            $('.form-field').css({"right" : "10px"})
        }
        
    )
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

    // number counter  
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

 

