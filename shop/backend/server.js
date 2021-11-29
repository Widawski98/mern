import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/ProductRouter.js';
import orderRouter from './routers/orderRouter.js';


dotenv.config();

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://Admin:Admin@cluster0.aqeaz.mongodb.net/Data',
{
  useNewUrlParser: true,
  useUnifiedTopology:true,

}
).then(() => console.log('mongoDB connected...'));







app.use('/api/users', userRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use((err, req, res, next)=>{
  res.status(500).send({message: err.message})
})





const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
