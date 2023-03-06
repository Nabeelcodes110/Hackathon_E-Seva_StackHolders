const router = require('express').Router()
const passport = require('passport')
const User = require("../Models/User")


router.get('/login/success', async (req, res) => {
    try {
        if (req.user) {
            console.log(req.user)
            const userData = await User.findOne({ email: req.user._json.email })
            if (!userData) {
                const user = await User.create({
                    name: req.user._json.name,
                    email: req.user._json.email,
                    profile: req.user._json.picture
                })

              
            }
            res.status(200).json({
                error: false,
                message: "Successfully Logged in",
                user: req.user

            })
           
        }
        else {
            res.status(403).json({
                error: true,
                message: "Not Authorized"
            })
        }  
       

    }
    catch (err) {
        console.log("User not created" + " " + err)
    }
   
   
  
})

router.get('/getuser' , (req,res)=>{
    try{
        if (req.user) {
            console.log(req.user)
            res.status(200).json({
                error: false,
                message: "Successfully Logged in",
                user: req.user

            })
           
        }
        else {
            res.status(403).json({
                error: true,
                message: "Not Authorized"
            })
        }  
       

    }
    catch (err) {
        console.log("User not created" + " " + err)
    }
   
   
})

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login Failure"
    })
})
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
}))

router.get('/google', passport.authenticate('google', ["profile", 'email']))



router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect(`${process.env.CLIENT_URL}`);
    });
});

module.exports = router