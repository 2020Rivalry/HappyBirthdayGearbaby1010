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

    $('#rst1').dialog({
        autoOpen:false,
        show: {
            effect: 'fade',
            duration: 300
        },
        hide: {
            effect: 'fade',
            duration: 300
        },
        width:'40%',
        modal:true,
        draggable:false,
        resizable:false
    });

    $('#rstBox').dialog({
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





//獎品清單
$('#prizeList').on('click', function(){
    $('#listBox').dialog('open');
});


//抽獎結果
var playVideo = document.getElementById('drawVideo');
var videoBox = document.getElementById('videoBox');

function playVdo(){
    var wid = 0.993*window.innerWidth;
    videoBox.style.display = 'block';
    playVideo.setAttribute('width',wid);
    playVideo.setAttribute('src','image/gachaVideo.mp4');
    playVideo.setAttribute('autoplay','true');
}

function OffVdo(){
    videoBox.style.display = 'none';
    playVideo.removeAttribute('src','image/gachaVideo.mp4');
    playVideo.removeAttribute('width');
    playVideo.removeAttribute('autoplay','true');
}






$('#gacha1').on('click', function(){
    var drawNum = Math.floor(100*Math.random());
    var rstName = document.getElementById('rstName');
    console.log(drawNum);
    playVdo();
    window.setTimeout('OffVdo()',6100);



    if(drawNum==20){
        rstName.textContent ='可愛2020';
        $('#rstImg').attr({src:'image/2020.png'});
    }
    else if(drawNum<2){
        rstName.textContent ='Apple iPhone 15 Pro';
        $('#rstImg').attr({src:'image/priceImg/i15.png'});
    }
    else if(drawNum<4){
        rstName.textContent ='SONY PS5';
        $('#rstImg').attr({src:'image/priceImg/PS5.png'});
    }
    else if(drawNum<7){
        rstName.textContent ='Nintendo Switch';
        $('#rstImg').attr({src:'image/priceImg/Switch.png'});
    }
    else if(drawNum<11){
        rstName.textContent ='iRocks T07 NEO';
        $('#rstImg').attr({src:'image/priceImg/chair.png'});
    }
    else if(drawNum<15){
        rstName.textContent ='iRocks D01電動升降桌';
        $('#rstImg').attr({src:'image/priceImg/desk.png'});
    }
    else if(drawNum<28){
        rstName.textContent ='圖奇熊怪布偶';
        $('#rstImg').attr({src:'image/priceImg/bear.png'});
    }
    else if(drawNum<40){
        rstName.textContent ='圖奇抱枕';
        $('#rstImg').attr({src:'image/priceImg/pillow.png'});
    }
    else if(drawNum<52){
        rstName.textContent ='圖奇背包';
        $('#rstImg').attr({src:'image/priceImg/bag.png'});
    }
    else if(drawNum<64){
        rstName.textContent ='HyperX Cloud Alpha Wireless';
        $('#rstImg').attr({src:'image/priceImg/headset.png'});
    }
    else if(drawNum<76){
        rstName.textContent ='HyperX Alloy Origins';
        $('#rstImg').attr({src:'image/priceImg/keyboard.png'});
    }
    else if(drawNum<88){
        rstName.textContent ='HyperX Solo Cast';
        $('#rstImg').attr({src:'image/priceImg/mic.png'});
    }
    else{
        rstName.textContent ='花輪抱枕';
        $('#rstImg').attr({src:'image/priceImg/gearpillow.png'});
    }

    window.setTimeout('showRst()',6100);

    //$('#rst1').dialog('open');
});

function showRst(){
    $('#rst1').dialog('open');
}

$('#gacha10').on('click', function(){
    var drawNum = Math.floor(100*Math.random());
    var rstNameArray = document.getElementsByClassName('rstName2');
    var rstImg2 = document.getElementsByClassName('rstImg2');

    playVdo();
    window.setTimeout('OffVdo()',6100);

    for(var i=0;i<10;i++){
        var drawNum = Math.floor(100*Math.random());
        console.log(drawNum);

        if(drawNum==20){
            rstNameArray.item(i).textContent ='可愛2020';
            rstImg2.item(i).src ='image/2020.png'
        }
        else if(drawNum<2){
            rstNameArray.item(i).textContent ='Apple iPhone 15 Pro';
            rstImg2.item(i).src = 'image/priceImg/i15.png';
        }
        else if(drawNum<4){
            rstNameArray.item(i).textContent ='SONY PS5';
            rstImg2.item(i).src = 'image/priceImg/PS5.png';
        }
        else if(drawNum<7){
            rstNameArray.item(i).textContent ='Nintendo Switch';
            rstImg2.item(i).src = 'image/priceImg/Switch.png';
        }
        else if(drawNum<11){
            rstNameArray.item(i).textContent ='iRocks T07 NEO';
            rstImg2.item(i).src = 'image/priceImg/chair.png';
        }
        else if(drawNum<15){
            rstNameArray.item(i).textContent ='iRocks D01電動升降桌';
            rstImg2.item(i).src= 'image/priceImg/desk.png';
        }
        else if(drawNum<28){
            rstNameArray.item(i).textContent ='圖奇熊怪布偶';
            rstImg2.item(i).src = 'image/priceImg/bear.png';
        }
        else if(drawNum<40){
            rstNameArray.item(i).textContent ='圖奇抱枕';
            rstImg2.item(i).src = 'image/priceImg/pillow.png';
        }
        else if(drawNum<52){
            rstNameArray.item(i).textContent ='圖奇背包';
            rstImg2.item(i).src = 'image/priceImg/bag.png';
        }
        else if(drawNum<64){
            rstNameArray.item(i).textContent ='HyperX Cloud Alpha Wireless';
            rstImg2.item(i).src = 'image/priceImg/headset.png';
        }
        else if(drawNum<76){
            rstNameArray.item(i).textContent ='HyperX Alloy Origins';
            rstImg2.item(i).src = 'image/priceImg/keyboard.png';
        }
        else if(drawNum<88){
            rstNameArray.item(i).textContent ='HyperX Solo Cast';
            rstImg2.item(i).src = 'image/priceImg/mic.png';
        }
        else{
            rstNameArray.item(i).textContent ='花輪抱枕';
            rstImg2.item(i).src = 'image/priceImg/gearpillow.png';
        }

    }

    window.setTimeout('showRst2()',6100);
    //$('#rstBox').dialog('open');
});

function showRst2(){
    $('#rstBox').dialog('open');
}
