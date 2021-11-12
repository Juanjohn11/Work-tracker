var currentTime = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentTime);


$(document).ready(function(){
    $(".saveBtn").on("click",  function (){
        var text = $(this).siblings(".description").val();
        var hourTask = $(this).parent().attr("id");

        localStorage.setItem(hourTask, text);

    })

    function colorTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {

            var timeBl = parseInt($(this).attr("id"));

            console.log(timeBl)


            if (timeBl < currentHour){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
            }
            else if (timeBl === currentHour){
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
            }
            else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    
    }

   

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));    
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));    
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    colorTracker();
})

