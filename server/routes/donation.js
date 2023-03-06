const router  = require('express').Router()
const donationModel = require('../Models/Donations')

router.post('/adddonation' , async (req,res)=>{
    try{
        const donation = await donationModel.create({
            name : req.body.name,
            email : req.body.email,
            contact : req.body.contact,
            book : req.body.book,
            city : req.body.city
        }).then(data=>res.json({data}))

        console.log(donation)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router