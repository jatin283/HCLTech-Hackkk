const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./userAuth");

// Sign Up
router.post("/sign-up", async(req, res) => {
    try {
        const {username, email, password} = req.body;

        // check username length is more than 3
        if(username.length < 4){
            return res.status(400).json({message: "Username length should be greather tha 3"});
        }

        // check username already exists
        const existingUsername = await User.findOne({username: username});
        if(existingUsername){
            return res.status(400).json({message: "Username already exits"});
        }

        // check email already exists
        const existingEmail = await User.findOne({email: email});
        if(existingEmail){
            return res.status(400).json({message: "Email already exits"});
        }

        // check password length is greater than 5
        if(password.length <6){
            return res.status(400).json({message: "Password length should be greather tha 5"});
        }

        const hashPass = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email: email,
            password: hashPass,
        });

        await newUser.save();
        return res.status(200).json({message: "SignUp Successfully"});

    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
});

// Sign In
router.post("/sign-in", async(req, res) => {
    try {
        const {username, password, role} = req.body;

        const existingUser = await User.findOne({ username });
        if(!existingUser){
            res.status(400).json({message : "Invalid Credentials"});
        }
        if(role!='CRC' || role!='PI'){
            res.status(400).json({message : "Invalid Credentials"});
        }

        await bcrypt.compare(password, existingUser.password, (err, data) => {
            if(data){
                const authClaims = [
                    {name: existingUser.username},
                    {role: existingUser.role}
                ]

                const token = jwt.sign({authClaims}, "hcltech123", { expiresIn : "30d"})

                res.status(200).json({ 
                    id : existingUser._id,
                    role: existingUser.role,
                    token: token,
                });
            }else{
                res.status(400).json({message : "Invalid Credentials"});
            }
        });

    } catch (error) {
        res.status(500).json({message: "INternal server error"});
    }
});

// get-user-information
router.get("/get-user-information", authenticateToken, async(req, res) => {
    try {
        const {id} = req.headers;
        const data = await User.findById(id).select('-password');
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})


module.exports = router;