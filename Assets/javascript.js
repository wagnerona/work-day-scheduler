// function to display the time 
setInterval(function displayTime() {
    let currentTime = moment().format('[Today is] dddd, MMMM Do YYYY, h:mm a');
    $('#currentDay').text(currentTime);
}, 1000);


//function to save text input
$(document).ready(function () {
    $('.saveBtn').on('click', function ()
    // .ready runs a function as soon as document is ready (fully loaded). As soon as save button is clicked we trigger a click event with a second function
    {
        let textInput = $(this).siblings('.description').val();
        //The $(this) selectors targets the element with class saveBtn that was clicked

        //Then, the method .siblings selects all elements with class of 'description' that are siblings of the saveBtn element which was clicked. 

        let time = $(this).parent().attr('id');
        // $(this) selector = element with class saveBtn that was clicked, then parent method selects the parent of the element clicked. 

        //.attr then returns the value of "id". We can also use this to set attributes but with (attribute, value)

        localStorage.setItem(time, textInput)
        // using the setItem here we store the value of textInput in the local storage with a Key-value pair. Where time is the Key and textInput is the value 
    })
    // What this whole functions does is allow the user to save the value of our description textarea with the saveBtn once it is clicked. 
});

//function to change blocks of color depending on time
function checkTime() {
    let currentTime = parseInt(moment().format('H'));
    //turns current time into an Integer for later use

    // let currentTime = parseInt(10);
    // console.log(currentTime);
    // Used for debugging and making sure timeboxes display properly

    $('.time-block').each(function () {
        let hourStamp = parseInt($(this).attr('id'));
        //each methods targets the .time-block element, hourStamp converts the ID of the element into an integer. To  later compare with currentTime.

        if (hourStamp === currentTime) {

            $(this).addClass('present');

        } else if (hourStamp < currentTime) {
            $(this).addClass('past');

        } else if (hourStamp > currentTime) {
            $(this).addClass('future');
        }
    });
    // If statement adds a class to the time block $(this) element depending on wether its past, present or future in relation to current time. Each class has a different color block. 

}
checkTime();

// Get previous item from local storage 
$('.time-block').each(function () {
    // $(this.description).val(localStorage.getItem($(this.description))
    // )
    $(this).find('.description').val(localStorage.getItem($(this).attr('id')));
});
// Could have used getItem for each hour ID but decided to use .each method

// .find() jquery method searches for an element with class .description within  $(this) element which is time-block

// .val(localStorage.getItem($(this).attr('id'))) sets the value of .description element into the "value" (key,value) stored in local storage using getItem.

// The "key" for the item is the ID of the current .time-block which is obtained by the $(this).attr(ID). 

// The result of "localStorage.getItem($(this).attr('id'))" is the value (.description) stored in the local storage for the given key 


//on click function to reset descriptions 
$('.resetBtn').on('click', function () {
    localStorage.clear();
    location.reload();
})