/*express used in project */
const express=require('express');
const path=require('path')
const apiRoutes = require('./routes/auth');
const app = express();
// Port used as env
const PORT= process.env.PORT|| 5001;

//to export as json file
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//requires routes
app.use(apiRoutes)

//listening at port
app.listen(PORT,()=>console.log(`listening to http://localhost:${PORT}`))


