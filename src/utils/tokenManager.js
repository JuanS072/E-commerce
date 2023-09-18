const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports.generateToken = (uid) => {
    const expiresIn = 60 * 15;
    try{
        const token = jwt.sign({ uid }, process.env.API_KEY,  { expiresIn });
        return { token, expiresIn };
    }catch(error){
        console.log(error);
    }
};