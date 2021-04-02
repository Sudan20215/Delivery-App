
const router =require('express').Router();

router.get('/',(req,res)=>{
    console.log("I have been hit")
    res.send(
{
    name:'sudan'
}

    )
})
module.exports=router;