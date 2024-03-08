import { v4 as uuidv4 } from 'uuid';
import { appendFileSync } from 'node:fs';
import isEmail from 'validator/lib/isEmail.js';

function generateUniqueID(fname, lname){
  let converted = fname[0].toLowerCase();
  let initial_name = converted.concat(lname.toLowerCase());
  let randomized = uuidv4();
  for(let i = 0; i < 8; i++){
    initial_name = initial_name.concat(randomized[i]);
  }
  return initial_name
}

function addAccount(array){
  if(array.length == 4 && array[0] != null && array[1] != null && array[2] != null && array[3] >= 18 && isEmail(array[2])){
    let new_string = array[0];
    new_string = new_string.concat(","+array[1]);
    new_string = new_string.concat(","+array[2]);
    new_string = new_string.concat(","+array[3]);
    new_string = new_string.concat(","+generateUniqueID(array[0], array[1]));
    try {
      appendFileSync('users.txt', new_string+"\n");
      console.log('Data successfully saved in users.txt');
      return true;
    } catch (err) {
      console.log("Failed to save data!");
      return false;
    } 
  }
  return false;
}

export default {generateUniqueID, addAccount};