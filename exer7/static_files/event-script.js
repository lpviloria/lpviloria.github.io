const submitButton = document.getElementById("add-item") // Get the submit button

let foodItems = []; // Declare an empty array to store the food items being added

const removeFood = (event) => { // Function declaration to remove food items
  const button = event.target;
  const container = button.parentElement;

  foodItems = foodItems.filter(item => item.element !== container); // Remove the food item from the array first so that it does not get added again in the submitFood function

  container.parentElement.removeChild(container); // Remove the container from the DOM afterwards
}

const submitFood = () => {
  const fields = document.getElementsByClassName("forms") // Get the values in the form fields
  
  let inputValues = [];

  for(let i = 0; i < 4; i++){ // Check if all fields have valid values
    if(fields[0][i].value != null && fields[0][i].value.trim() !== ""){
      inputValues[i] = fields[0][i].value;
    } else {
      alert("All fields must have a value.");
      return;
    }
  }
  
  const foodName = inputValues[0]; // Get the values from the form fields and put them in individual variables
  const foodDesc = inputValues[1];
  const foodImg = inputValues[2];
  const foodRank = inputValues[3];

  const container = document.createElement('div'); // Create a new div element to store the food item being added
  container.className = foodName;

  const newImage = document.createElement("h1") // Create a new image element to store the image link of the food item then add it to the new div element created earlier
  newImage.innerHTML = "<img src=" + foodImg + ">";
  container.appendChild(newImage)

  const newElement = document.createElement("h1") // Create a new h1 element to store the food name, description, and rank then add it to the new div element created earlier
  newElement.innerText = foodName + "\n" + foodDesc + "\n" + foodRank;
  container.appendChild(newElement)
  
  const newButton = document.createElement("button") // Create a new button which allows the removal of that element then add it to the new div element created earlier
  newButton.innerText = "Remove"
  newButton.addEventListener("click", removeFood)
  container.appendChild(newButton)

  foodItems.push({rank: foodRank, element: container}); // Store the food item and its rank in the array

  foodItems.sort((a, b) => a.rank - b.rank); // Sort the array by rank

  for (const item of foodItems) { // Add the items in their sorted order
    document.getElementsByClassName('flex-container2')[0].appendChild(item.element);
  alert("Success!")
}
}


submitButton.addEventListener("click", submitFood) // Submit button event listener