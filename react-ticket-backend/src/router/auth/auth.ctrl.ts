import User from '../../database/models/User'

export const test = (req:any, res:any): void => {
    return res.send("Test");
};

export const defaultExport = (req:any, res:any): void => {
    return res.send("defaultExport");
};

export const getLogin = (req:any, res:any): void => {
    
}

export const register = (req:any, res:any): void => {
    const { username, password } = req.body;
    const user = new User();
    // user.save();
    res.send("username :"+username+", "+"password :"+password);
}

export const getUsers = (req:any, res:any) => {
    User.find((err, users) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users);
    })
}