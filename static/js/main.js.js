$('.question').click(function(){
    $('.QuestionPop').fadeIn();
})

$('.popbutton').click(function(){
    $('.QuestionPop').fadeOut();
})

$('.resultbt').click(function(){
    $('.resultbox').fadeIn(1000);
})

$('.main').click(function(){
    $('.list').css('background','white')
    $('.main').css('background','rgb(231, 231, 231')
    $('.listbox').hide()
    $('.back').hide()
})

$('.list').click(function(){
    $('.main').css('background','white')
    $('.list').css('background','rgb(231, 231, 231')
    $('.listbox').show()   
    $('.back').show()   
})