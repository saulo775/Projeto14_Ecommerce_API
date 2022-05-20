import joi from "joi";

export default async function checkoutSchema(req, res, next) {
    const register = req.body
    
    const checkoutSchema = joi.object({        
      
        lastName: joi.string().min(1).required(),
        cpf: joi.string().min(1).required(),
        country: joi.string().min(1).required(),
        telephone: joi.string().min(1).required(),
        addres: joi.string().min(1).required(),
        cep: joi.string().min(1).required(),
        name: joi.string().min(1).required(),
        card: joi.string().required(),
        cvv: joi.string().required(),
        typeCard: joi.string().required(),
        userId: joi.required(),
        cartData: joi.required()
        

        
    })

    try{
        const value = await checkoutSchema.validateAsync(register)       
        
    } catch (error){
        console.log(error.details.map(detail => detail.message))        
        return res.status(403).send(error.details.map(detail => detail.message))
    }

    next();
}
