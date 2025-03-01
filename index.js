import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { dbConnection } from './database/db.js';
import userRoutes from './routes/userRoutes.js';
import staticRoutes from './routes/staticRoutes.js'

const app = express();

const PORT = process.env.PORT || 8000;

dbConnection(process.env.URI);


//Middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Middleware to serve static files (CSS, JS, Images)
app.use(express.static('public'));
app.set('view engine', 'ejs')



app.use('/', staticRoutes)

app.use('/User', userRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
