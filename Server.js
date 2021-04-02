/*express used in project */
const express=require('express')
const app = express();
// Port used as env
const PORT= process.env.PORT|| 5001;

//to export as json file
app.use(express.urlencoded({extended:true}));
app.use(express.json);

//listening at port
app.listen(PORT,()=>console.log(`listening to http://localhost:${PORT}`))


