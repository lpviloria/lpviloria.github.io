import mongoose from 'mongoose';

await mongoose.connect("mongodb://localhost:27017/StudentDatabase",{
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database');
})
.catch((err) => {
    console.log(err);
});

const Student = mongoose.model('Student',{ //Mongoose schema definition
    stdnum : String,
    fname: String,
    lname: String,
    age: Number
}, 'studentData');

const homepage = (req,res) => { // Homepage function
    res.send('Welcome to the Homepage');
}

const getUser = async (req,res) => { // This function will get the user with the first name specified in the query.
    res.send(await Student.find({fname: req.query.fname }));
}

const getAllUsers = async (req,res) => { // This function will return all the users in the database.
    res.send(await Student.find());
}

const saveStudent = async (req,res) => { // This function adds a new student to the database using the information provided in the request body. It must follow the schema defined in the Mongoose model.
    const newStudent = new Student({
        stdnum: req.body.stdnum,
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age
    });

    await newStudent.save();
}

const editStudent = async (req,res) => { // This function finds the student with the first name specified in the request body and changes the last name to "Parker". It then updates the first name to "MJ".
    let editHolder = await Student.findOne({fname: req.body.fname});
    editHolder.lname = "Parker";
    await editHolder.save();
    
    await Student.updateOne(
        { fname: req.body.fname },
        {$set: {fname: "MJ"}}
      );
    res.send("Student information has been successfully edited!");
}

const removeStudent = async (req,res) => { // This function removes the student with the student number specified in the request body.
   res.send(await Student.deleteOne({stdnum: req.body.stdnum}));
   console.log("Student has been successfully removed!");
}

const removeAllStudents = async (req,res) => { // This function removes all students in the database.
    try {
        await Student.deleteMany();
        res.json({success: true});
      } catch (err) {
        res.json({success: false});
      } 
}

export {homepage, getUser, getAllUsers, saveStudent, editStudent, removeStudent, removeAllStudents}