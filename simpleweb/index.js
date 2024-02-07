const express =  require("express");
const app =  express();

app.get('/', (req, res, next) => {
    res.send("Hello world updated");
    next();
})
app.listen(8080, ()=> {
    console.log('the server started');
})
