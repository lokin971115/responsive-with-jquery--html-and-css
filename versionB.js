$(document).ready(function(){
    var x=0;

    $("body").hide();

    $("body").fadeIn("slow");

    $( "#special" ).click(function() {
        $("#buttongroup").show();
    });
    
    $( "#t1" ).click(function() {
        switch (x) {
            case 0:
                $("section > h2").css('text-align','right');
                x=1;
              break;
            case 1:
                $("section > h2").css('text-align','center');
                x=2;
                break;
            case 2:                
                $("section > h2").css('text-align','left');
                x=0;
              break;
          }
    });

    $( "#t2" ).click(function() {
        var hobby = prompt("Please enter a hobby");
        if(hobby==""){}
        else{
            $( "#hobbies" ).append("<div>",hobby,"</div>");
        }
    });

    $( "#t3" ).click(function() {
        $("#bar").show();
    });

    $( "#t4" ).click(function() {
        alert("img change every 0.25s by using setInterval function of jquery (Not gif).After 1.5s 3rd img will also be shown.")
        $("#bg").show();
        $("#1").show();
        var x=1;
        setInterval(function () {
        $("#1").hide();
        $("#2").hide();
        $("#3").hide();
        if(x<6){
        if (x % 2 == 0)
        $("#1").show();
        else 
        $("#2").show();
        }
        else{
            if (x % 3 == 1)
            $("#1").show();
            else  if (x % 3 == 2)
            $("#2").show();
            else if (x % 3 == 0)
            $("#3").show();
        }
        x++;
        },250);
    });

});

$( window ).scroll(function() {
    var current_progress = ($(window).scrollTop()/ ($(document).height()-$(window).height()))*100;
    $("#dynamic").css("width", current_progress + "%").attr("aria-valuenow", current_progress);
});

