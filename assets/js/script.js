var currentTime = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentTime);
var currentHour= moment().hour();
$(".description").each(function(index){
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
var saveTask = function () {
    tasks = 

    
}
console.log(currentHour);