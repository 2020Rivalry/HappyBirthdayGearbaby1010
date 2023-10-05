var listWidth;

$(function(){
    if(window.innerWidth<=1000){
        listWidth = '100%';
    }
    else listWidth = '70%';

    $('#dialog1').hide(0);

    $('#imgP1').attr({src: 'image/priceImg/i15.png'});
    $('#imgP2').attr({src: 'image/priceImg/PS5.png'});
    $('#imgP3').attr({src: 'image/priceImg/Switch.png'});
    $('#imgP4').attr({src: 'image/priceImg/chair.png'});
    $('#imgP5').attr({src: 'image/priceImg/desk.png'});
    $('#imgP6').attr({src: 'image/priceImg/bear.png'});
    $('#imgP7').attr({src: 'image/priceImg/pillow.png'});
    $('#imgP8').attr({src: 'image/priceImg/bag.png'});
    $('#imgP9').attr({src: 'image/priceImg/headset.png'});
    $('#imgP10').attr({src: 'image/priceImg/keyboard.png'});
    $('#imgP11').attr({src: 'image/priceImg/mic.png'});
    $('#imgP12').attr({src: 'image/priceImg/gearpillow.png'});

    $('#listBox').dialog({
        autoOpen:false,
        show: {
            effect: 'fade',
            duration: 300
        },
        hide: {
            effect: 'fade',
            duration: 300
        },
        width:listWidth,
        modal:true,
        draggable:false,
        resizable:false
    });
});

//2020買俗頭
$('#shop2020').on('mouseover', function(){
    $('#dialog1').show(300);
});

$('#shop2020').on('mouseout', function(){
    $('#dialog1').hide(300);
});


//抽
$('#gacha1').on('click', function(){
    $(this).css('backgroundColor', 'yellow');
});

$('#gacha10').on('click', function(){
    $(this).css('backgroundColor', 'yellow');
});


//獎品清單
$('#prizeList').on('click', function(){
    $('#listBox').dialog('open');
});