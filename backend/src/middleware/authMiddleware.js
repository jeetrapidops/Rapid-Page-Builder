import JWT from 'jsonwebtoken'

export const requireSignIn = async(req,res,next)=>{
try {
    const decode =  JWT.verify(req.headers.authorization , process.env.JWT_SECRET);
    req.user = decode._id;
    next();
} catch (error) {
    console.log(error);
    res.status(400).send({
        success : false,
        message : "Error in admin middleware"
    })
}
}
