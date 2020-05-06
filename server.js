const express = require('express');
const path = require('path');
const app = express();

const PORT = 5500 || process.env.PORT
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));