
$(window).scroll(function(){
  
    var wScroll=$(this).scrollTop();
    
    var wHight=$(this).height();
  

    if(wScroll > $('.about-section').offset().top){
        $('.navbar').addClass('bg-secondary');
    }
    else{
        $('.navbar').removeClass('bg-secondary');
    }
    if(wScroll > $('#why').offset()
    .top-wHight/2

){
        $('.business').addClass('animated zoomIn');
    }
});

$(document).ready(function(){
    $('#navButton').click(function(){
        $('.navbar').addClass('bg-secondary');
    })
 });


