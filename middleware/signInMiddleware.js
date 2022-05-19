import joi from "joi";

export default async function signInSchema(req, res, next) {
    const register = req.body
    console.log(register)

    const signInSchema = joi.object({        
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase().required(),
        password: joi.string().min(4).required()
    })

    try{
        const value = await signInSchema.validateAsync(register)       
    } catch (error){
        console.log(error.details.map(detail => detail.message))        
        res.status(403).send(error.details.map(detail => detail.message))
    }

    next();
}