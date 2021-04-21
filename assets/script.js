
// form
var formEl = $('.taskForm');

// hour of day fields
const nineAM = $('#09');
const tenAM = $('#10');
const elevenAM = $('#11');
const noon = $('#12');
const onePM = $('#13');
const twoPM = $('#14');
const threePM = $('#15');
const fourPM = $('#16');
const fivePM = $('#17');


function handleFormSubmit(event) {
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

// populate saved from local storage
$('#09').val(JSON.parse(localStorage.getItem('0900AM')));
$('#10').val(JSON.parse(localStorage.getItem('1000AM')));
$('#11').val(JSON.parse(localStorage.getItem('1100AM')));
$('#12').val(JSON.parse(localStorage.getItem('1200PM')));
$('#13').val(JSON.parse(localStorage.getItem('0100PM')));
$('#14').val(JSON.parse(localStorage.getItem('0200PM')));
$('#15').val(JSON.parse(localStorage.getItem('0300PM')));
$('#16').val(JSON.parse(localStorage.getItem('0400PM')));
$('#17').val(JSON.parse(localStorage.getItem('0500PM')));

// moment 
(function theTime() {
	let timer = moment().format("dddd, MMMM Do, YYYY  |  h:mm a");
	$("#currentDay").text(timer);
	setInterval(theTime, 60000);
})();


// dynamic text field highlighting
const today = moment();
const hour = parseInt(today.format("HH"))
// const hour = 15;

// all inputs are grey on default . . 
$('input').addClass('past');
// current hour is red
$($(`#${hour}`)).addClass('present');
// all after the current hour is future
$(`input:gt(${maker()})`).addClass('future');
// function for dynamic indexing
function maker() {
	return hour - 9;
};