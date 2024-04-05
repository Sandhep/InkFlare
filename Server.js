import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import path from "path";

const __dirname=dirname(fileURLToPath(import.meta.url));
 
const app=express();
const port=3000;   

let submittedCards = []; 

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views')); 

app.use('/Blog/public', express.static(__dirname + '/public'));

app.post("/submit", (req,res)=>{
    const title=req.body.title;
    const author= req.body.author;
    const content=req.body.content;
    const option=req.body.gridRadios;

    const newCard = { title, author, content , option};
    submittedCards.push(newCard);
    res.render('index',{title:title, author:author, imagePath: '/Blog/public/images/andrew-neel-cckf4TsHAuw-unsplash.jpg', content:content });
 });





app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port,()=>{
   console.log(`Listening on Port:${port}`);
});