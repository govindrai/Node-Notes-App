'use strict';
// we want to make a notes app
// we want to be able to add notes, delete notes, list all our notes
// we want to do this all in the command line, so we need to use ARGV
// since we wont have a database we want to store our notes in a json file

console.log("Inside App.js");

// system modules
const fs = require('fs');

// npm modules
const yargs = require('yargs');

// user modules
const notes = require('./notes');

// notes.add_note("Our second note", "This is a description of our second note")

// try {
// 	var notes = fs.readFileSync('notesdb.json');
// 	console.log(notes);
// } catch(e) {
// 	fs.openSync('notesdb.json', 'w');
// 	console.log("sorry I couldn't read the file!");
// }

var args = yargs.argv;
console.log(args)
console.log("COMMAND IS :", args._[0]); 
var command = args._[0];


switch (command) {
	case 'delete':
		console.log("Okay let's remove a note!");
		notes.delete_note(args.title);
		break;
	case 'add':
		console.log("Okay let's add a note!");
		notes.add_note(args.title, args.description)
		break;
	default:
		console.log("What the french you talking about");
}
