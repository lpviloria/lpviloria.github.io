import express from 'express';
const app = express();


import router from './router.js';   // import the router function

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req,res,next)=> {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Access-Control-Allow-Methods,Origin,Accept,Content-Type");
    res.setHeader("Access-Control-Allow-Credentials","true");
    next();
}
)

router(app);


app.listen(3000, (err) => {
    if(err){
        console.log(err);
    }
    console.log('Server is running on port 3000');
});