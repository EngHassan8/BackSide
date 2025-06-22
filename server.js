

const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")

const app =  express ()

app.use(cors())

//use
app.use(express.json())


// importinga 
const bmsModel = require ("./modal/bmsModel")


// isku xir dstsbase ka in mongoose ka 
mongoose.connect("mongodb+srv://enghassan:jux8sVM0VRAY7lU2@cluster0.wuvavtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("databse ka waa la xareyyeey ")
}).catch((err)=>{
    console.log(err)
})



/// post
app.post("/create", async (req , res)=> {
    const newData = bmsModel (req.body)
    const saveData = await newData.save()
    if (saveData) {
        res.send("xogta waad so galisey sodhowow")

    }
    else {
        res.send("error ayaa dhaceyy")
    }

})

/// isooo bandhig
app.get("/get" , async (req , res)=>{
     const GetData = await bmsModel.find ()
     res.send(GetData)
     
} )


// Api Update ka wye 
app.put("/update/:id", async (req, res)=>{
    const updateData = await bmsModel.updateOne(
        {_id:req.params.id},
        {$set: req.body}
    )
    if (updateData){
        res.send("data has been update")
    }
})
//remove  Api 

app.delete("/remove/:id" ,  async (req, res)=> {
    const GetDalete = await bmsModel.deleteOne(
        {_id: req.params.id},

    )
    if (GetDalete){
         res.send("data has been dalate ")
    }
})

const  Login = require  ("./modal/Login")

// DiwaanGalin route-ka
app.post("/diwaanGalin", async (req, res) => {
  const { Name, Email, Password } = req.body;

  try {
    // Email horay u jiray?
    const existingUser = await Login.findOne({ Email });

    if (existingUser) {
      return res.status(400).json({ message: "Email-kan hore ayaa loo isticmaalay." });
    }

    // Haddii uu cusub yahay
    const newUser = new Login({ Name, Email, Password });
    await newUser.save();

    res.status(201).json({ message: "User cusub waa la diwaan geliyay" });

  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

 
/////////////////login//////

app.post("/Login", async (req, res) => {
  try {
    const admin = await Login.findOne(req.body).select("-password");

    if (admin) {
      res.send({
        success: true,
        message: "Login successfully",
        data: admin
      });
    } else {
      res.send({
        success: false,
        message: "username or password incorrect"
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Server error" });
  }
});



// Api Update ka wye 
app.put("/update/ngo/:id", async (req, res)=>{
    const updateData = await bmsModel.updateOne(
        {_id:req.params.id},
        {$set: req.body}
    )
    if (updateData){
        res.send("data has been update")
    }
})
//remove  Api 

app.delete("/remove/ngo/:id" ,  async (req, res)=> {
    const GetDalete = await bmsModel.deleteOne(
        {_id: req.params.id},

    )
    if (GetDalete){
         res.send("data has been dalate ")
    }
})


app.listen(300 ,() =>{
    console.log("server wuu shaqeynaaaa ")
})