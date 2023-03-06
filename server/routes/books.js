const router = require('express').Router()
const donationModel = require('../Models/Donations')

router.get('/getbooks' , (req,res)=>{
    donationModel.find({}).then(data=>res.json({data}))
    .catch(err=>{console.log(err)})
})

module.exports = router