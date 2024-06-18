const express = require("express");
const connectDB = require('./config/db');
const app = express();

connectDB();
app.use(express.json({extended: false}));
app.get("/", (req, response) => response.send("La api está funcionando"));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.get("/", (req, response) => response.send("La api está funcionando"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server listening on port: ${PORT}`));
