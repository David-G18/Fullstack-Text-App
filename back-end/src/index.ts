import express from 'express';
import cors from 'cors';
import texts from './routes/texts';
import errorHandler from './middlewares/errorHandler';

const app = express();
const PORT = 3001; 

app.use(express.json());    //Middleware transforma la req.body a json
app.use(cors());            //Cross-Origin Resource Sharing, HTTP header

app.use('/texts', texts);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT} `);
});