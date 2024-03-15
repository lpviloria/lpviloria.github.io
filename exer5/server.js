import express from 'express';
import { appendFileSync } from 'node:fs';
import { readFile } from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-book', (req, res) => {
  const objValues = Object.values(req.body);
  if(objValues.length == 4 && objValues[0] != null && objValues[1] != null && objValues[2] != null && objValues[3] != null){
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

app.get('/find-by-isbn-author', (req, res) => {
  res.send("Request successfully received.");
  readFile("books.txt", function(err, cont) {
    if (err)
        throw err;
    console.log("String"+(cont.indexOf(req.query.author)>-1 ? " " : " not ")+"found");
  });
});

app.listen(3000, () => {
  console.log('Server started at port 3000');
})