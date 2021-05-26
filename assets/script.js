var timeDisplayEl = $('#currentDay');
var saveButtons = $('.saveBtn');
var currentHour = moment().hour();


//Function to display the current time at the top of the page
function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(currentTime);
}



//Allows any user inputs to still display after page refresh

$('#9am .description').val(JSON.parse(localStorage.getItem('nineAM')));

$('#10am .description').val(JSON.parse(localStorage.getItem('tenAM')));

$('#11am .description').val(JSON.parse(localStorage.getItem('elevenAM')));

$('#12pm .description').val(JSON.parse(localStorage.getItem('twelvePM')));

$('#1pm .description').val(JSON.parse(localStorage.getItem('onePM')));

$('#2pm .description').val(JSON.parse(localStorage.getItem('twoPM')));

$('#3pm .description').val(JSON.parse(localStorage.getItem('threePM')));

$('#4pm .description').val(JSON.parse(localStorage.getItem('fourPM')));

$('#5pm .description').val(JSON.parse(localStorage.getItem('fivePM')));


//Saves user input to local storage once save button is clicked

saveButtons.on('click', function (event) {
    event.preventDefault();
    var nineAM = $('#9am .description').val();
    localStorage.setItem('nineAM', JSON.stringify(nineAM));

    var tenAM = $('#10am .description').val();
    localStorage.setItem('tenAM', JSON.stringify(tenAM));

    var elevenAM = $('#11am .description').val();
    localStorage.setItem('elevenAM', JSON.stringify(elevenAM));

    var twelvePM = $('#12pm .description').val();
    localStorage.setItem('twelvePM', JSON.stringify(twelvePM));

    var onePM = $('#1pm .description').val();
    localStorage.setItem('onePM', JSON.stringify(onePM));

    var twoPM = $('#2pm .description').val();
    localStorage.setItem('twoPM', JSON.stringify(twoPM));

    var threePM = $('#3pm .description').val();
    localStorage.setItem('threePM', JSON.stringify(threePM));

    var fourPM = $('#4pm .description').val();
    localStorage.setItem('fourPM', JSON.stringify(fourPM));

    var fivePM = $('#5pm .description').val();
    localStorage.setItem('fivePM', JSON.stringify(fivePM));
});


setInterval(displayTime, 1000);