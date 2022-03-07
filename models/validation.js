const Joi = require('joi')

const registerValid = (data) => {

    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(8).required()
    })

    return schema.validate(data)
}

const loginValid = (data) => {

    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(8).required()
    })

    return schema.validate(data)
}


module.exports.registerValid = registerValid
module.exports.loginValid = loginValid