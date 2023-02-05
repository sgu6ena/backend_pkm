import express from 'express'
import mongoose from 'mongoose';
import typeRouter from "./types/router.js";
import arealRouter from "./areal/router.js";
import themeRouter from "./themes/router.js";
import fileUpload from "express-fileupload"
import hexagonRouter from "./hexagons/router.js";
import bodyParser from 'body-parser'
const app = express()
const port = 8000

app.use(bodyParser.json());

app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', hexagonRouter)
app.use('/api', typeRouter)
app.use('/api', arealRouter)
app.use('/api', themeRouter)
// const url = 'mongodb://localhost:27017/pkm'; // урл для сервиса с mongodb
const url = 'mongodb+srv://sgu6ena:Kct9VvPVm3eyM6r@cluster0.l2p9zk1.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);

async function startApp() {
  try {
    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,})

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}


startApp()

export default app