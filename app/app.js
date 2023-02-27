import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import typeRouter from "./types/router.js";
import arealRouter from "./areal/router.js";
import themeRouter from "./themes/router.js";
import hexagonRouter from "./hexagons/router.js";
import bodyParser from 'body-parser'
import pokemonRouter from "./pokemons/router.js";
import fileUpload from "express-fileupload"

const app = express()
const port = 8000
const allowedOrigins = ['http://localhost:3000','http://127.0.0.1:3000/'];
const options = {
  origin: allowedOrigins
};


app.use(cors(options));
app.use(bodyParser.json());

app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', hexagonRouter)
app.use('/api', typeRouter)
app.use('/api', arealRouter)
app.use('/api', themeRouter)
app.use('/api', pokemonRouter)




const url = 'mongodb://localhost:27017/pkm'; // урл для сервиса с mongodb
//const url = 'mongodb+srv://sgu6ena:Kct9VvPVm3eyM6r@cluster0.l2p9zk1.mongodb.net/?retryWrites=true&w=majority'





mongoose.set('strictQuery', true);

async function startApp() {
  try {
    await mongoose.connect(url, {}, ()=>{
      console.log('connected to base')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}


startApp()

export default app