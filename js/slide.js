$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        
       
      });
      $(".regular").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
      });
    
    })