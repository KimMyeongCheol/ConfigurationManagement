$(function(){

$("#mainMenu li").mouseover(function()
{$(".subMenu").stop().slideDown(500)});

$("#mainMenu li").mouseout(function(){
            $(".subMenu").stop().slideUp(500)

 $("#shuttleFrame").animate(
            {"margin-left":"-1250px"}
            ,3000, 
            function(){
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
                $("shuttleFrame").css({"margin-left": "0"}); });
            
});


 $("#.subLi").mouseout(function(){
   $(".subLi").css({"background-color":"#0f8"})

 
});





});


$(function(){

    
$("div#layerPopup").css({"display": "none"});

$(".tabContents a").click(function(){

$("div#layerPopup").css({"display": "block"});



$(".tabContents a").click(function(){

$("div#layerPopup").css({"display": "none"});
});

});


});


 