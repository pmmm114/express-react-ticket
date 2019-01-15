import User from '../../database/models/User'
import Joi from 'joi';
import { generate, decode } from '../../lib/token';

export const test = (req: any, res: any): void => {
    return res.send("Test");
};

export const defaultExport = (req: any, res: any): void => {
    return res.send("defaultExport");
};

export const tokenVerifyTest = async (req:any, res: any): Promise<any> => {
    const token = req.headers['x-access-token'];
    if(!token)  {
        return res.status(403).json({
            sucess: false,
            message: 'not logged in'
        })
    }

    const decodeValue = await decode(token);

    return res.json(decodeValue);
};

export const postLogin = async (req: any, res: any): Promise<any> => {
    type Body = {
        email: string,
        password: string
    }
    const { email, password } = req.body;

    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,16}$/),
    });

    const result: any = Joi.validate(req.body, schema);
    if(result.error) {
        return res.status(400).send("Login Vaild Error");
    }

    const Token = await generate({email, password}, { expiresIn: '1h'});

    return res.json(Token);
}

export const register = (req:any, res:any): void => {
    type Body = {
        email: string,
        password: string
    };
    const { email, password } = req.body;

    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,16}$/),
    });

    const result: any = Joi.validate(req.body, schema);
    if(result.error) {
        return res.status(400).send('Register Vaild Error');
    };

    const user = new User({
        email,
        password
    });
    user.save();
    res.send("username :"+email+", "+"password :"+password);
}

export const getUsers = (req:any, res:any) => {
    User.find((err, users) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users);
    })
}