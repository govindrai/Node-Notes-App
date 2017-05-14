'use strict';

console.log("Inside App.js");

// system modules
const fs = require('fs');

// npm modules
const args = require('yargs')
	.command('list', 'list all notes in the database')
	.command('remove', 'remove a note from the database')
	.alias('title', 't')
	.describe('title', "The title of a note")
	.demandCommand(1)
	.alias('help', 'h')
	.help()
	.argv;

// user modules
const notes = require('./notes');

// console.log(args)
var command = args._[0]
switch (command) {
	case 'delete':
		console.log("Okay let's remove a note!");
		notes.delete_note(args.title);
		break;
	case 'add':
		console.log("Okay let's add a note!");
		notes.add_note(args.title, args.description)
		break;
	case 'list':
		console.log("Okay let's list the notes!");
		notes.list_notes()
		break; 
	default:
		console.log("What the french you talking about");
}
