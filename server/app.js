import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());

app.use('/products', productRoutes);
app.use("/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('hello to travelAgency');
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;


mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));