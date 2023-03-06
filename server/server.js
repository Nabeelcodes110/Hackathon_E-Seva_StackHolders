const express = require('express')
require('dotenv').config();
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const connectToMongoose = require('./Database/database')
const  authRoutes = require('./routes/auth')
const app = express()
const donationRoute = require('./routes/donation')
const passportSetup = require('./passport/passport');
// const { connection } = require('mongoose');
const bodyParser = require('body-parser');
const chatbotSetup = require('./routes/chatbot')
const bookRoutes = require('./routes/books')
const Axios = require("axios");



app.use(
    cookieSession({
        name:'eseva',
        keys : ['stackholders'],
        maxAge : 24*60*60*100,
    })
)
app.use(bodyParser.json());
app.use(function(request, response, next) {
    if (request.session && !request.session.regenerate) {
        request.session.regenerate = (cb) => {
            cb()
        }
    }
    if (request.session && !request.session.save) {
        request.session.save = (cb) => {
            cb()
        }
    }
    next()
})

app.use((passport.initialize()));
app.use(passport.session());

app.use(
    cors({
        origin : "http://localhost:3000",
        methods : "GET,POST,PUT,DELETE",
        credentials : true,
    })
)
connectToMongoose()

app.use('/auth' , authRoutes)
app.use('/chatbot' , chatbotSetup)
app.use('/donation', donationRoute)
app.use('/book' , bookRoutes)

app.post("/compile", (req, res) => {
	let code = req.body.code;
	let language = req.body.language;
	let input = req.body.input;

	if (language === "python") {
		language="py"
	}

	let data = ({
		"code": code,
		"language": language,
		"input": input
	});
	let config = {
		method: 'post',
		url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};
	//calling the code compilation API
	Axios(config)
		.then((response)=>{
			res.send(response.data)
			console.log(response.data)
		}).catch((error)=>{
			console.log(error);
		});
})

const port  = process.env.PORT||8080;
app.listen(port , ()=>console.log(`server working on http://localhost:${port}`))