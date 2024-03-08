import { v4 as uuidv4 } from 'uuid';
import { appendFileSync } from 'node:fs';
import isEmail from 'validator/lib/isEmail.js';

function generateUniqueID(fname, lname){
  let converted = fname[0].toLowerCase(); //Puts the first character of the first name to lowercase
  let initial_name = converted.concat(lname.toLowerCase()); //Concatenates the lowercase first character with the last name that has been converted to lowercase
  let randomized = uuidv4(); //Utilize uuidv4 to generate a random string
  for(let i = 0; i < 8; i++){ //For loop to get the first 8 characters of the random uuidv4 string
    initial_name = initial_name.concat(randomized[i]); //Concatenate the current letter to the initial_name string
  }
  return initial_name //Return initial_name
}

function addAccount(array){
  if(array.length == 4 && array[0] != null && array[1] != null && array[2] != null && array[3] >= 18 && isEmail(array[2])){ //Checker if all values exist, they are not equal to null, the email is valid, and the age is at least 18
    let new_string = array[0]; //Get the first name
    new_string = new_string.concat(","+array[1]); //Get the second name
    new_string = new_string.concat(","+array[2]); //Get the email
    new_string = new_string.concat(","+array[3]); //Get the age
    new_string = new_string.concat(","+generateUniqueID(array[0], array[1])); //Generate the unique ID through the function
    try {
      appendFileSync('users.txt', new_string+"\n"); //Save new_string to users.txt and make a newline
      console.log('Data successfully saved in users.txt'); //Success message
      return true;
    } catch (err) {
      console.log("Failed to save data!");
      return false;
    } 
  }
  return false;
}

export default {generateUniqueID, addAccount}; //Exports the functions so that we can use them in test.js