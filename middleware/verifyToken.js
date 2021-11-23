const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
     if(authHeader){
         const token = authHeader.split(" ")[1]
            try {
                jwt.verify(token, process.env.TOKEN_KEY, (err, user)=>{
                    if(!err){
                        req.user = user
                        next();
                    }else{
                        res.status(403).json('Please login')
                    }

                })

            } catch (error) {
                res.status(400).json('Could not resolve token')
            }
        }else{
         return res.status(401).json('You are not authenticated')
     }

}




const verifyTokenAndAuth = (req,res,next) => {
verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json('Access denied')
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=> {
    verifyToken(req,res, ()=>{
        if(req.user.isAdmin){
                next();
        }else{
            res.status(400).json('You are not allowed')
        }
    })
}


module.exports = {
    verifyTokenAndAuth, verifyTokenAndAdmin
}