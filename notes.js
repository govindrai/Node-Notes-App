'use strict';

const fs = require('fs');

function read_notes() {
	var file = fs.readFileSync('notesdb.json');
	return JSON.parse(file);
}

function create_file() {
	console.log("the file doesn't exist my man. Let's create the file");
	fs.openSync('notesdb.json','w');
	return [];
}

function write_file(notes) {
	fs.writeFileSync('notesdb.json', JSON.stringify(notes));
}

function add_note(title, description) {
	var note = {
		title: title,
		description: description
	};
	
	try {
		var notes = read_notes();
	} catch(e) {
		var notes = create_file();
	}

	notes.push(note);

	write_file(notes);

}

// can you hear me? yes damnit i can't hear you one moment

function delete_note(title) {
	try {
		var notes = read_notes();
		var deletedDescription;
		var new_notes = notes.filter((note) => {
			if (note.title != title) {
				return true;
			} else {
				deletedDescription = note.description;
			}
		}); 
		write_file(new_notes);
		if (new_notes.length == notes.length){
			console.log("There's no note in our system with title " + title);
		} else {
			console.log("We deleted the note with the following description: " + deletedDescription);
		}
	} catch (e) {
		// console.log(e);
		console.log("There are no notes in this system. You need to create a note before you can delete.")
	}
}

function list_notes() {

}

function say_hello() {

}

module.exports = {
	add_note,
	delete_note,
	list_notes
}

