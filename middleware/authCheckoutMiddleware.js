import joi from "joi";

export default async function checkoutSchema(req, res, next) {
    const register = req.body
    
    const checkoutSchema = joi.object({        
        name: joi.string().required,
        lastName: joi.string().min(1).required(),
        cpf: joi.number().min(1).required(),
        country: joi.string().min(1).required(),
        telephone: joi.number().min(1).required(),
        addres: joi.string().min(1).required(),
        cep: joi.number().min(1).required(),
    })

    try{
        const value = await signInSchema.validateAsync(register)       
        
    } catch (error){
        console.log(error.details.map(detail => detail.message))        
        res.status(403).send(error.details.map(detail => detail.message))
    }

    next();
}
