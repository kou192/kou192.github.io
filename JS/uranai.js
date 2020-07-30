$('#question-1').hide();
$('#question-2').hide();
$('#another-question-2').hide();
$('#question-2-2').hide();
$('#question-3').hide();
$('#question-3-2').hide();
$('#question-3-3').hide();
$('#ans1').hide();
$('#ans2').hide();
$('#ans3').hide();
$('#ans4').hide();
$('#ans5').hide();
$('#ans6').hide();

$('#start').click(function(){
    $('#question-1').show();
     $('#start').hide();
});

//２問目
$('#go2').click(function(){
    $('#question-2').show();
     $('#question-1').hide();
});

$('#go2-2').click(function(){
    $('#question-2-2').show();
     $('#question-1').hide();
});
//タンバリン
$('#go-ans6').click(function(){
    $('#ans6').show();
     $('#question-2').hide();
});


//３問目 2つ以上の
$('#go3').click(function(){
    $('#question-3').show();
     $('#question-2').hide();
});
$('#go-ans1').click(function(){
    $('#ans1').show();
     $('#question-3').hide();
});
$('#go-ans2').click(function(){
    $('#ans2').show();
     $('#question-3').hide();
});
//3問目　体力に自信はあるか？
$('#go-3-2').click(function(){
    $('#question-3-2').show();
     $('#question-2-2').hide();
});
$('#go-3-3').click(function(){
    $('#question-3-3').show();
     $('#question-2-2').hide();
});

$('#go-ans3').click(function(){
    $('#ans3').show();
     $('#question-3-2').hide();
});

$('#go-ans4').click(function(){
    $('#ans4').show();
     $('#question-3-2').hide();
});

$('#go-ans5').click(function(){
    $('#ans5').show();
     $('#question-3-3').hide();
});

$('#go-ans6-2').click(function(){
    $('#ans6').show();
     $('#question-3-3').hide();
});

$('.back').click(function(){
    $('#start').show();
    $('#ans1').hide(); 
    $('#ans2').hide();
    $('#ans3').hide();
    $('#ans4').hide();
    $('#ans5').hide();
    $('#ans6').hide();
});


