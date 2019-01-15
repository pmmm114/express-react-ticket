import jwt from 'jsonwebtoken';
import { TOKEN_SECRET_KEY } from '../utils/secrets';

export const generate = (payload: any, options: any): Promise<string> => {
    const jwtOptions = {
        expiresIn: '1h',
        ...options,
    };
    if (!jwtOptions.expiresIn) {
        delete jwtOptions.expiresIn;
    }

    return new Promise((resolve, reject) => {
        jwt.sign(payload, TOKEN_SECRET_KEY, jwtOptions, (err, token) => {
            if(err) return reject(err);
            resolve(token);
        });
    });
};

export const decode = (token: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        if(!TOKEN_SECRET_KEY) throw new Error('Token Secret Key Error');
        jwt.verify(token, TOKEN_SECRET_KEY, (err, decoded) => {
            if(err) return reject(err);
            resolve(decoded);
        })
    })
}