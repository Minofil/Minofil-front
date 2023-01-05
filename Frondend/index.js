import express from 'express'
import cors from 'cors'
import lotus from './routes/lotus.js'
import space from './routes/space.js'
import dotenv from 'dotenv'


dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000;

///middleware
app.use(cors())

//lotus
app.use("/lotus",lotus)
app.use("/space",space)

app.get("/",(req,res)=>{
  res.send("Welcome to Mino")
})

app.listen(PORT,()=>{
  console.log("Server Running on Port 5000");
})
