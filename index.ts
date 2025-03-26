import express from 'express';
import imagesRouter from './src/routes/images.routes';

const port = 3000
const app =express();
//middlewares
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
  })
//all routes
app.use('/images', imagesRouter)
  
app.listen(port)
 console.log('server corriendo en:'+port)


