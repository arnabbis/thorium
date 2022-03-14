
const express = require('express');
const bodyParser = require('body-parser');
const route = require("./routes/route");
const {default:mongoose} = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/chandresh98-DB?retryWrites=true&w=majority" , {
    useNewUrlParser:true
})

.then( () =>console.log(" MONGO DB IS CONNECTED "))
.catch( err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log(" EXPRESS APP RUNNING ON PORT " +  (process.env.PORT || 3000));
});