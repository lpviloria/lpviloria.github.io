import needle from "needle";

needle.post("http://localhost:3000/save-student", {stdnum: 202168380, fname: "Mary Jane", lname: "Watson", age: 20}, (err, resp, body) => {
    if(err){
        console.log(err);
    }
    console.log(body);
});

needle.post("http://localhost:3000/save-student", {stdnum: 202312345, fname: "Miles", lname: "Morales", age: 18}, (err, resp, body) => {
    if(err){
        console.log(err);
    }
    console.log(body);
});

needle.post("http://localhost:3000/save-student", {stdnum: 202011192, fname: "Gwen", lname: "Stacy", age: 19}, (err, resp, body) => {
    if(err){
        console.log(err);
    }
    console.log(body);
});

needle.post("http://localhost:3000/save-student", {stdnum: 202289899, fname: "Peter", lname: "Parker", age: 20}, (err, resp, body) => {
    if(err){
        console.log(err);
    }
    console.log(body);
});

needle.post("http://localhost:3000/save-student", {stdnum: 201901231, fname: "Ben", lname: "Parker", age: 18}, (err, resp, body) => {
    if(err){
        console.log(err);
    }
    console.log(body);
});

// The five save-students POST requests above will add five students in the database.

needle.post("http://localhost:3000/update", {fname: "Mary Jane"}, (err, resp, body) => { // This will update the first name of the student with the first name "Mary Jane" to "MJ".
    if(err){
        console.log(err);
    }
    console.log(body);
});


needle.post("http://localhost:3000/remove-user", {stdnum: 202168380}, (err, resp, body) => { // This will remove the user with the student number 202168380.
    if(err){
        console.log(err);
    }
    console.log(body);
});

needle.post("http://localhost:3000/remove-all-user", {}, (err, resp, body) => { // This will remove all users in the database.
    if(err){
        console.log(err);
    }
    console.log(body);
});