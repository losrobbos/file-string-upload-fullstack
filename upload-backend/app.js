
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { v2 as cloudinary } from 'cloudinary'

// load env config 
const env = dotenv.config()

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

app.use( cors() )
app.use( express.json({ limit: "500KB" })) // parse body into req.body object

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/upload", async (req, res) => {

  const { image } = req.body

  try {
    const result = await cloudinary.uploader.upload(image)
    res.json({
      image_url: result.secure_url,
    });
  }
  catch(err) {
    console.log(err)
    res.status(400).json({
      error: err.message
    })
  }

})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
