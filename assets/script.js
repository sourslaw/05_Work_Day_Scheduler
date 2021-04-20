// moment
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY  |  h:mm a"));

const scheduleField = $('#scheduleField');

// creating the fields
for (let hour = 1; hour <= 9; hour++) {
	// the row
	let hourBlock = $('<div>');
	hourBlock.attr('class','row')

	// first column for time
	let colEl1 = $('<div>');
	colEl1.attr('class','col-lg-2')

	let pee = $('<p>')
	pee.text(hour)
	let top = colEl1.append(pee)

	// second column for field and save button
	let colEl2 = $('<div>');
	colEl2.attr('class','col-lg-10')

	let inputClass = $('<div>');
	inputClass.attr('class', 'input-group mb-3')

	let inputEl = $('<input>');
	inputEl.attr('type', 'text');
	inputEl.attr('class', 'form-control');

	let buttonEl = $('<button>');
	buttonEl.attr('class', 'btn btn-outline-secondary');
	buttonEl.attr('type', 'button');
	buttonEl.attr('id', '');
	buttonEl.text("save");

	// appending to field
	let bottom = colEl2.append(inputClass.append(inputEl, buttonEl))

	hourBlock.append(top, colEl2)

	scheduleField.append(hourBlock);
};