// we want to make a notes app
// we want to be able to add notes, delete notes, list all our notes
// we want to do this all in the command line, so we need to use ARGV
// since we wont have a database we want to store our notes in a json file

console.log("Inside App.js")

var fs = require('fs')

try {
	var notes = fs.readFileSync('notesdb.json')
	console.log(notes)
} catch(e) {
	fs.openSync('notesdb.json', 'w')
	console.log("sorry I couldn't read the file!")
}

console.log(process.argv)