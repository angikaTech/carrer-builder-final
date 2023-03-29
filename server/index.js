const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Studentsdata");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const nodeMailer = require('nodemailer');
// const { getMaxListeners } = require("process");
require('dotenv').config()


app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})


app.use(express.json());

mongoose.connect("mongodb+srv://careerbuildersolutions:4vNb2twZ0BDVcwHP@cluster0.dnm0e.mongodb.net/careerbuilder?retryWrites=true&w=majority")


app.use("/image", express.static(path.join(__dirname, "/image")));
var maxSize = 20 * 1024 * 1024;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },

});

const upload = multer({ storage: storage, limits: { fieldSize: maxSize, fileSize: maxSize } });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// app.get("/studentreg1",  (req, res)=> {
//   const docs = studentsdatas.find();
//   console.log(docs);
// });

app.get("/studentreg", async (req, resp) => {
  const list = await UserModel.find({}).sort({ _id: 'desc' });
  resp.json(list);

});

app.get("/studentreg/:id", async (req, res) => {
  const id = req.params.id;
  const post = await UserModel.findById(id);
  console.log(post)
  res.json(post)
  // res.json(post);

});

app.delete("/studentdelete/:id", async (req, res) => {
  const id = req.params.id;
  const blockdeleted = await UserModel.findByIdAndRemove(id).exec();
  res.send("itemdeleted")
});

app.post("/studentreg", async (req, res) => {
  const studentsdata = req.body;
  const newStudentsdata = new UserModel(studentsdata);
  await newStudentsdata.save();
  res.json(studentsdata);
});


app.post("/sendmail", (req, res) => {
  // console.log(req.body,req.body);
  let name = req.body.name;
  let userMail = req.body.email;
  let MobielNumber = req.body.mobielNumber;
  let course = req.body.course;
  let program = req.body.program;
  let dob = req.body.dob;
  let gender = req.body.gender;
  let cityName = req.body.cityName;
  let state = req.body.state;
  let document = req.body.document;
  let code = req.body.code;
  let country = req.body.country;


  const transpoter = nodeMailer.createTransport({
    host: "smtp.hostinger.com",
    port: "465",
    secure: true,
    auth: {
      user: "noreply@careerbuildersolutions.org",
      pass: "p:3?uV_`M^h9Wszn",
    }
  })
  const massage = {
    from: "noreply@careerbuildersolutions.org",
    to: "info@careerbuildersolutions.org",
    // cc: "nishikant.angika@gmail.com",
    subject: "Form submitted by " + name,
    text: "Applicant Name : " + name + "\r\n" +
      "Email : " + userMail + "\r\n" +
      "Mobile no. : " + code + MobielNumber + "\r\n" +
      "Course Name : " + course + "\r\n" +
      "Program Name : " + program + "\r\n" +
      "Date of birth : " + dob + "\r\n" +
      "Gender : " + gender + "\r\n" +
      "City : " + cityName + "\r\n" +
      "State : " + state + "\r\n" +
      "Counrty: " + country,
    attachments: [
      {
        filename: document,
        path: __dirname + '/image/' + document
      }
    ]

  };
  transpoter.sendMail(massage, (err, info) => {
    if (err) {
      console.log(`error in sending mail`, err)
      return res.status(400).json({ massage: `error in sending mail`, err })

    } else {
      console.log("sucessfully send the mail", info)
      return res.json({ message: info })
    }
  })

})



app.post("/formconfmail", (req, res) => {
  // console.log(req.body,req.body);
  let name = req.body.name;
  let userMail = req.body.email;
  // let MobielNumber = req.body.mobielNumber;
  // let course = req.body.course;
  // let program = req.body.program;
  // let dob = req.body.dob;
  // let gender = req.body.gender;
  // let cityName = req.body.cityName;
  // let state = req.body.state;
  // let document = req.body.document;
  // let code = req.body.code;
  // let country = req.body.country;


  const transpoter = nodeMailer.createTransport({
    host: "smtp.hostinger.com",
    port: "465",
    secure: true,
    auth: {
      user: "noreply@careerbuildersolutions.org",
      pass: "p:3?uV_`M^h9Wszn",
    }
  })
  const massage = {
    from: "noreply@careerbuildersolutions.org",
    to: userMail,
    subject: "Form submitted by " + name,
    text: "Dear applicant congratulation"
      + "\r\n" +

      "Your form has been successfully submitted  to CareerBuilder Solution .",
    //   attachments: [
    //     {
    //         filename: document,
    //         path: __dirname + '/image/'+document
    //     }
    // ]

  };
  transpoter.sendMail(massage, (err, info) => {
    if (err) {
      console.log(`error in sending mail`, err)
      return res.status(400).json({ massage: `error in sending mail`, err })

    } else {
      console.log("sucessfully send the mail", info)
      return res.json({ message: info })
    }
  })

})


app.post("/otp", (req, res) => {
  // console.log(req.body,req.body);
  let genrate = req.body.genrate;
  let userMail = req.body.email;
  // let MobielNumber = req.body.mobielNumber;
  // let course = req.body.course;
  // let program = req.body.program;
  // let dob = req.body.dob;
  // let gender = req.body.gender;
  // let cityName = req.body.cityName;
  // let state = req.body.state;
  // let document = req.body.document;
  // let code = req.body.code;
  // let country = req.body.country;


  const transpoter = nodeMailer.createTransport({
    host: "smtp.hostinger.com",
    port: "465",
    secure: true,
    auth: {
      user: "noreply@careerbuildersolutions.org",
      pass: "p:3?uV_`M^h9Wszn",
    }
  })
  const massage = {
    from: "noreply@careerbuildersolutions.org",
    to: userMail,
    subject: " Otp for CarrerBuilder Solution ",
    text: "Dear applicant "
      + "\r\n" +

      "Your one time password is " + genrate,
    //   attachments: [
    //     {
    //         filename: document,
    //         path: __dirname + '/image/'+document
    //     }
    // ]

  };
  transpoter.sendMail(massage, (err, info) => {
    if (err) {
      console.log(`error in sending mail`, err)
      return res.status(400).json({ massage: `error in sending mail`, err })

    } else {
      console.log("sucessfully send the mail", info)
      return res.json({ message: info })
    }
  })

})




app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running on 4000 port")
});
