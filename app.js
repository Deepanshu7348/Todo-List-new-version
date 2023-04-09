const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tata");

const trySchema = new mongoose.Schema({
    name: String
});
const item = mongoose.model("second",trySchema);

app.get("/", async (req, res) => {
  try {
    const foundItems = await item.find({});
    res.render("list", { dayej: foundItems });
  } catch (err) {
    console.log(err);
  }
});

// app.post("/",function(req,res){
//     const itemName = req.body.ele1;
//     const todo4 = new item({
//         name:itemName
//     });
//     todo4.save();
//     res.redirect("/");
// });

//Use async/await in your POST request handler
app.post("/", async function(req, res) {
  const itemName = req.body.ele1;
  const todo4 = new item({
    name: itemName
  });
  try {
    await todo4.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});




// app.post("/delete",function(req,res){
//   const checked = req.body.checkbox1;
//   item.findByIdAndRemove(checked,function(err){
//     if(!err){
//       console.log("deleted");
//       res.redirect("/");
//     }
//   });
// })


//Use try/catch blocks in your DELETE request handler
app.post("/delete", async function(req, res) {
  const checked = req.body.checkbox1;
  try {
    await item.findByIdAndRemove(checked);
    console.log("deleted");
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

app.listen(5000,function(){
    console.log("server started");
});


  //Use async/await in your POST request handler
// app.post("/", async function(req, res) {
//   const itemName = req.body.ele1;
//   const todo4 = new item({
//     name: itemName
//   });
//   try {
//     await todo4.save();
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     res.redirect("/");
//   }
// });


    //Use try/catch blocks in your DELETE request handler
// app.post("/delete", async function(req, res) {
//   const checked = req.body.checkbox1;
//   try {
//     await item.findByIdAndRemove(checked);
//     console.log("deleted");
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     res.redirect("/");
//   }
// });








// const express = require("express");
// const bodyparser = require("body-parser");
// const app = express();

// app.set("view engine","ejs");
// app.use(express.urlencoded({extended:true}));
// app.use(express.static('public'));

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/tata");

// const trySchema = new mongoose.Schema({
//     name: String
// });
// const item = mongoose.model("second",trySchema);

// app.get("/", async (req, res) => {
//   try {
//     const foundItems = await item.find({});
//     res.render("list", { dayej: foundItems });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/",function(req,res){
//     const itemName = req.body.ele1;
//     const todo4 = new item({
//         name:itemName
//     });
//     todo4.save();
//     res.redirect("/");
// });

// app.post("/delete",function(req,res){
//   const checked = req.body.checkbox1;
//   item.findByIdAndRemove(checked,function(err){
//     if(!err){
//       console.log("deleted");
//       res.redirect("/");
//     }
//   });
// })

// app.listen(4000,function(){
//     console.log("server started");
// });

