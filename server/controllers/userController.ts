import { NextApiRequest,NextApiResponse } from "next";
const {bcrypt} = require("bcrypt");

const register = async(req : NextApiRequest, res : NextApiResponse) => {
    try{
        const{firstName, lastName, email,password,mobileNumber} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await userModel.create({firstName, lastName, email, hashedPassword, mobileNumber});
        res.status(201).json(newUser);
    }catch(error){
        console.error("Error registering user : ", error);
        res.status(500).json({error : "Internal Server error"});
    }
}

const login = async(req : NextApiRequest, res : NextApiResponse) => {
    try {
        const{email, password} = req.body;
        const user = await userModel.findOne({email});

        if(user && await bcrypt.compare(password, user.password)){
            res.status(201).json({message: 'Login Successful'});
        }else{
            res.status(201).json({message: 'Login unsuccessful'});
        }
    } catch (error) {
        console.error("Error logining user : ", error);
        res.status(500).json({error : "Internal Server error"});
    }
}

module.exports = {login, register};