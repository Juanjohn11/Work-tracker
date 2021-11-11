var currentTime = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentTime);

var currentHour= moment().hour();
$(".time-block").each(function(index){
    var time= parseInt($(this).siblings(".hour").attr("id"))
    console.log(time)
    if(currentHour > time ){
        $(this).addClass("past")
    }
    else if (currentHour < time){
        $(this).addClass("future")
    }
    else {
        $(this).addClass("present")
    }
})

$(document).ready(function(){
    $(".saveBtn").on("click",  function (){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);

    })

    $("#9 .description").val(localStorage.getItem("9"));
    //debugger;
})

    



