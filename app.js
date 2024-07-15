import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });
import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import router from './src/routes/index.js';
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || "";

app.use('/api',router)
app.use('*',(req,res) => {
  return res.status(404).json({
    message: 'Not Found!'
  })
})

async function connectDB() {
  try {
    const DB = process.env.MONGO;
    connect(DB,{
      useNewUrlParser: true,
    })
    console.log('mongodb connected!');
  } catch (error) {
    console.log('mongodb connect faill!');
    console.log(error);
  }
}

async function main() {
  await connectDB()
  const server = app.listen(port,() => {
    console.log(`server is running! ${port}`);
  });
  server.on('unhandledRejection',() => {
    server.close(() => {
      process.exit(1)
    })
  })
}

main()

