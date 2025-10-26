// npm init -y

//npm i express nodemon nodemailer multer mongoose jsonwebtoken dotenv bcrypt cors validator cloudinary axios


  // Enable CORS and parse JSON body
  // app.use(cors());
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));
  // app.use(cookieParser());


import express from "express";
import axios from "axios";

const app = express();

const url = `https://render-hosting-se2b.onrender.com`; // your backendsite URL
const interval = 30000; // 30 seconds

let lastReloadTime = "Not yet reloaded";

function reloadWebsite() {
  axios
    .get(url)
    .then(() => {
      lastReloadTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
      console.log(`✅ Website reloaded at ${lastReloadTime}`);
    })
    .catch((error) => {
      console.error(`❌ Error reloading website: ${error.message}`);
    });
}

// call it repeatedly
setInterval(reloadWebsite, interval);

// optional: trigger once on startup
reloadWebsite();

app.get("/", (req, res) => {
  res.send(`Last time website reloaded: ${lastReloadTime}`);
});

const port = 4000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});

