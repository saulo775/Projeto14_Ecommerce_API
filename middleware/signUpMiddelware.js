import joi from "joi";

export default async function signUpSchema(req, res, next) {
    const register = req.body
    console.log(register)

    const signUpSchema = joi.object({
        name: joi.string().min(1).required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase().required(),
        password: joi.string().min(4).required(),
        checkPassword: joi.ref("password")
    })

    try{
        const value = await signUpSchema.validateAsync(register)       
        res.send(value)
    } catch (error){
        console.log(error.details.map(detail => detail.message))      
          
        res.status(403).send(error.details.map(detail => detail.message))
    }

    next();
}