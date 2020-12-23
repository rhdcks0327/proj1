$(function(){
    $('#left a').each(function(){
        var find_img = $(this).find('img');
        var src_off = find_img.attr('src');  images/lastoff1_off.jpg
        var src_on = src_off.replace('_off','_on')   //src_off 안에 있는 off --> on 바꿈
                                             //images/lastoff1_on.jpg
      $(this).hover(function(){
        find_img.attr('src', src_on);
      },function(){
        find_img.attr('src', src_off);
      })
     })
    
    })