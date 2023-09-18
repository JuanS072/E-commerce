const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports.requiredAuth = (req, res, next) => {
    try{
        let token  = req.headers?.authorization;
        token = token.split(' ')[1];
        const { uid } = jwt.verify(token, process.env.API_KEY);
        req.uid = uid;
        next();
    }catch(error){
        console.log(error.message);

        const TokenVerificationErrors = {
            ["invalid signature"] : "La firma del JWT no es válida.",
            ["jwt expired"] : "JWT expirado.",
            ["invalid token"] : "El Token es Invalido.",
            ["No Bearer"] : "Utiliza formato Bearer.",
            ["Cannot read properties of undefined (reading 'split')"] : "Sin token.",
        };

        return res.status(401).send({error: TokenVerificationErrors[error.message]});
    }
};