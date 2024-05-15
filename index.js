import express from 'express';
import router from './routes/routes.js'; 
import 'dotenv/config';
const app = express()
const PORT = process.env.PORT || 3000

console.log(process)
console .log(process.argv)

//Middleware
app.use('/',router);


app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto http://localhost:${port}`);
});