var timeDisplayEl = $('#currentDay');
var saveButtons = $('.saveBtn');
var rows = $('.time-block');

//Function to display the current time at the top of the page
function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(currentTime);
}



//Allows any user inputs to still display after page refresh

$('#9 .description').val(JSON.parse(localStorage.getItem('9')));

$('#10 .description').val(JSON.parse(localStorage.getItem('10')));

$('#11 .description').val(JSON.parse(localStorage.getItem('11')));

$('#12 .description').val(JSON.parse(localStorage.getItem('12')));

$('#13 .description').val(JSON.parse(localStorage.getItem('13')));

$('#14 .description').val(JSON.parse(localStorage.getItem('14')));

$('#15 .description').val(JSON.parse(localStorage.getItem('15')));

$('#16 .description').val(JSON.parse(localStorage.getItem('16')));

$('#17 .description').val(JSON.parse(localStorage.getItem('17')));


//Saves user input to local storage once save button is clicked

$('.container').on('click','.saveBtn', function (event) {
    var textArea = $(this).prev().val();
    var hour = $(this).closest('.time-block').attr('id');
    localStorage.setItem(hour, JSON.stringify(textArea));

});

var currentHour = moment().hour();

//Applies color-coding to time blocks based on current time
$('.time-block').each(function(){
    var timeCheck = parseInt($(this).attr("id"));
    if (timeCheck < currentHour){
        $(this).addClass("past");
    } else if (timeCheck === currentHour){
        $(this).addClass("present");
        $(this).removeClass("past");
    } else {$(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
    }
})

setInterval(displayTime, 1000);