// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())


// app.get("/login",cors(),(req,res)=>{

// })

// app.post("/login", async(req,res)=>{
//     const{email,password} = req.body

//     try{
//         const check = await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("notexist")

//     }
// })





// app.post("/register", async(req,res)=>{
//     const{email,password,name,cpassword} = req.body

//     const data={
//         email:email,
//         password:password,
//         name:name,
//         cpassword:cpassword,
        
//     }

//     try{
//         const check = await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("notexist")

//     }
// })


// // get user data from mongo db  👇

// // app.get("/register" , (req,res) =>{
// //     collection.find((err, data) =>{
// //         if(err){
// //             res.status(500).send(err)
// //         }
// //         else{
// //             res.status(200).send(data)
// //         }
// //     })
// // })

// // ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

// app.listen(8000,()=>{
//     console.log("port connected")
// })

























// Her i started :point_down:

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors= require("cors");
app.use(cors());
const bcrypt= require("bcryptjs");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));

const jwt = require("jsonwebtoken");
var nodemailer = require('nodemailer');

// give any random number to JWT_SECRET 👇
const JWT_SECRET = "hjsjfsfsfkseruebew()akfasfjirjnfsfgreriejkloeywuwbns[]ddsn";


mongoUrl = "mongodb+srv://samiullah:191014Samikhan@clusteroes.fnamn1s.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))


require("./mongo");
const User = mongoose.model("UserInfo");

// API for register page 👇
app.post("/register", async(req,res)=>{
    const {fname,email,password,userType} = req.body;

    const encryptedPassword= await bcrypt.hash(password,10)

    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
           return res.send({error:"user already exist"});
        }
        await User.create({
            fname,
            email,
            password:encryptedPassword,
            userType,
        });
        res.send({status:"ok"})
        

    }
    catch(error){
        res.send({status:"error"})

    }
});





// API and model for free course enrollment form of the home page 👇
const User1 = mongoose.model("FreeCourseEnrolUser");

app.post("/freeenrol", async(req,res)=>{
    const {fname,email,phone} = req.body;

    
        await User1.create({
            fname,
            email,
            phone,
        });
        res.send({status:"ok"})
        

    });
    








// API for login page 👇

app.post("/login", async (req,res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({ email });
    if(!user){
        return res.json({error :"User Not Found"});
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({email:user.email}, JWT_SECRET)

        if(res.status(201)){
            return res.json({status:"ok", data: token});
        }
        else{
            return res.json({error:"error"});


        }
    }
    res.json({status:"error", error:"Invalid Password"})
});



// API for if user successfully login so they will see the content 👇

app.post("/userData", async(req,res)=>{
    const {token} = req.body;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        const useremail= user.email;
        User.findOne({email:useremail})
        .then((data)=>{
            res.send({status:"ok", data:data});
        })
        .catch((error)=>{
            res.send({status:"error", data:error})
          });

    }
    catch(error){
      
    }
});


app.listen(5000, ()=>{
    console.log("server started");
})


// writing api for forgot password 👇

app.post("/forgot-password", async(req,res)=>{
    const {email}=req.body;
    try{
  const oldUser= await User.findOne({ email })
   if(!oldUser){
    return res.json({status :"user not exist!!"});
   }
   const secret = JWT_SECRET + oldUser.password;
   const token = jwt.sign({email:oldUser.email, id: oldUser._id},secret,{
    expiresIn:"5m",
   });
   const link=`http://localhost:5000/reset-password/${oldUser._id}/${token}`;
//    nodemailer 👇
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'samikhan191014@gmail.com',
        pass: 'qnesrmaarlwmjeqi'
        
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'pakistanarmykosalaam@gmail.com',
    subject: 'Password Reset',

    text: link,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

//   nodemailer end 
   console.log(link)
    }
    catch(error){

    }
})


app.get("/reset-password/:id/:token", async(req,res)=>{
    const {id , token} = req.params;
    console.log(req.params);
    const oldUser =await User.findOne({_id:id});
    if(!oldUser){
        return res.json({status: "user not exist!!"})
    }
   const secret = JWT_SECRET + oldUser.password;
   try{
     const verify = jwt.verify(token, secret);
     res.render("index", {email:verify.email,status:"Not Verified"});
   }
   catch(error){
    res.send("Not Verified")

   }


})





app.post("/reset-password/:id/:token", async(req,res)=>{
    const {id , token} = req.params;
    const {password} = req.body;
    const oldUser =await User.findOne({_id:id});
    if(!oldUser){
        return res.json({status: "user not exist!!"})
    }
   const secret = JWT_SECRET + oldUser.password;
   try{
     const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password,10);
    await User.updateOne(
        {
            _id:id,
        },
        {
            $set:{
                password:encryptedPassword,
            },
        }
    );
     res.render("index", {email:verify.email,status:"verified"});
    res.json({status : "password updated"});

   }
   catch(error){
    res.json({status: "something went wrong"});

   }


})



// API for fetching users data from mongodb into my React app 👇

app.get("/getAllUser", async(req,res)=>{
    try{
        const allUser= await User.find({});
        res.send({status:"ok", data : allUser});

    }
    catch(error){
        console.log(error)

    }
})




// API for deleting user from react app 👇

app.post("/deleteUser", async(req,res)=>{
    const {userid} = req.body;
    try{
      User.deleteOne(
        {_id:userid}
      ).then((err,res)=>{
        console.log(err)
      })
      res.send({status:"ok", data:"Deleted Successfully !"})

    }
    catch(error){
        console.log(error)
    }
})



// API for pagination in UserDetail page  👇

app.get("/paginatedUsers", async(req,res)=>{
    const allUser = await User.find({})
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page-1)*limit
    const lastIndex = (page)*limit

    const results={}
    results.totalUser=allUser.length;
    results.pageCount=Math.ceil(allUser.length/limit);

    if(lastIndex<allUser.length){
        results.next={
            page:page+1,
        }
    }
    if(startIndex>0){
        results.prev={
            page:page-1,
        }
    }
   
    

    results.result= allUser.slice(startIndex,lastIndex);
    res.json(results);
})
