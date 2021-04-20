


// form
var formEl = $('.taskForm');
// button
const buttonEl = $('.btn');
// hour of day fields
const nineAM = $('#0900AM');
const tenAM = $('#1000AM');
const elevenAM = $('#1100AM');
const noon = $('#1200AM');
const onePM = $('#0100PM');
const twoPM = $('#0200PM');
const threePM = $('#0300PM');
const fourPM = $('#0400PM');
const fivePM = $('#0500PM');


function handleFormSubmit(event) {
    // Prevent the default behavior
	event.preventDefault();

	localStorage.setItem('0900AM', JSON.stringify(`${nineAM.val()}`));
	localStorage.setItem('1000AM', JSON.stringify(`${tenAM.val()}`));
	localStorage.setItem('1100AM', JSON.stringify(`${elevenAM.val()}`));
	localStorage.setItem('1200PM', JSON.stringify(`${noon.val()}`));
	localStorage.setItem('0100PM', JSON.stringify(`${onePM.val()}`));
	localStorage.setItem('0200PM', JSON.stringify(`${twoPM.val()}`));
	localStorage.setItem('0300PM', JSON.stringify(`${threePM.val()}`));
	localStorage.setItem('0400PM', JSON.stringify(`${fourPM.val()}`));
	localStorage.setItem('0500PM', JSON.stringify(`${fivePM.val()}`));
};

// Submit event on the form
formEl.on('submit', handleFormSubmit);




// moment
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY  |  h:mm a"));