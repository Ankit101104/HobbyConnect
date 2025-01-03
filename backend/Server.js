const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
// const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const clubRoutes = require('./routes/clubRoutes');
const eventRoutes = require('./routes/eventRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
// app.use(helmet());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/users')
const db = mongoose.connection
db.once('open',()=>{
  console.log("Mongodb connection successfull")
})

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const Users = mongoose.model("data",userSchema)

app.post('/post',async(req,res)=>{
   const{name,email,password}=req.body
   const user = new Users({
    name,
    email,
    password
   })
   await user.save()
   console.log(user)
   res.send("registration successful")
})


// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/clubs', clubRoutes);
app.use('/api/events', eventRoutes);

app.get('/', (req, res) => res.send('API is running...'));

// Error Middleware
app.use(errorHandler);

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



