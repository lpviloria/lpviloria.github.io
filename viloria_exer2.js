function checker(str1, str2){ //Function to check if a password is valid (at least 8 characters and contains at least 1 number, 1 uppercase letter, and 1 lowercase letter)
  let num_flag = 0; //Flags to check if the current character being assessed fits any of the validation criteria
  let upper_flag = 0;
  let lower_flag = 0;

  for(let i = 0; i < str1.length; i++){ //For loop to iterate through the entire string
    if(str1[i] != str2[i] || str1.length < 8){ //If password is less than 8 characters or both strings don't match, return false immediately
      return false;
    }
    else { //Otherwise, assess if the character fits any of the validation criteria
      if (str1[i].toUpperCase() === str1[i] && isNaN(parseInt(str1[i]))){
        upper_flag += 1; //If it is uppercase, increment upper_flag
      }
      else if(parseInt(str1[i])){
        num_flag += 1; //If it is a number, increment num_flag
      }
      else if(str1[i].toLowerCase() === str1[i] && isNaN(parseInt(str1[i]))){
        lower_flag += 1; //If it is lowercase, increment lower_flag
      }
    }
  }
  if(num_flag >= 1 && upper_flag >= 1 && lower_flag >= 1){ //If the password fits all three of the criteria, return true
    return true;
  }
  else {
    return false;
  }
  
}

function reverse_password(str1){ //Reverse for loop to reverse password
  reversed_string = "";
  for(let i = str1.length - 1; i >= 0; i--){ //Start at the end of the password and store the character in new string
    reversed_string += str1[i];    
  }
  return reversed_string;
}

function store_password(name, pass1, pass2){ //Function to store password
  if(checker(pass1, pass2)){ //If the password is valid, return the reversed password as new password
    return {"name": name, "newpassword": reverse_password(pass1)}
  }
  else{ //Otherwise, return the same password as new password
    return {"name": name, "newpassword": pass1}
  }
}


console.log(store_password("John", "Pass1234", "Pass1234"));
console.log(store_password("John", "Pass123", "Pass12345"))

