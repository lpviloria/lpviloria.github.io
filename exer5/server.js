import express from 'express';
import { appendFileSync } from 'node:fs';
import { readFile } from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let books = []; //Empty array initializations to store data for searching purposes
let authors = [];
let isbns = [];
let dates = [];

app.post('/add-book', (req, res) => { //Post request to add a book
  const objValues = Object.values(req.body); //Convert object data to array
  books.push(objValues[0]); //Append information to their respective arrays
  authors.push(objValues[2]);
  isbns.push(objValues[1]);
  dates.push(objValues[3]);
  if(objValues.length == 4 && objValues[0] != null && objValues[1] != null && objValues[2] != null && objValues[3] != null){ //If all fields are filled out, create string to store in books.txt
    let new_string = objValues[0];
    new_string = new_string.concat(","+objValues[1]);
    new_string = new_string.concat(","+objValues[2])
    new_string = new_string.concat(","+objValues[3])
    try {
      appendFileSync('books.txt', new_string+"\n"); //Save new_string to books.txt and make a newline
      console.log('Data successfully saved in books.txt'); //Success message
      res.json({success: true});
    } catch (err) {
      console.log("Failed to save data!");
      res.json({success: false});
    } 
  }
  else{
    res.json({success: false});
  }
  
  })

app.get('/find-by-isbn-author', (req, res) => { //Get request to find a book by ISBN and author
  for (let i = 0; i < authors.length; i++) {
    if(authors[i] == req.query.author && isbns[i] == req.query.isbn){
      console.log("Author: " + authors[i] + " ISBN: " + isbns[i] + " Book: " + books[i] + " Date: " + dates[i]);
      break;
    }
  }

  res.send("");

});

app.get('/find-by-author', (req, res) => { //Get request to find a book by author
  for (let i = 0; i < authors.length; i++) {
    if(authors[i] == req.query.author){
      console.log("Author: " + authors[i] + " ISBN: " + isbns[i] + " Book: " + books[i] + " Date: " + dates[i]);
    }
  }

  res.send("");

});

app.listen(3000, () => {
  console.log('Server started at port 3000');
})