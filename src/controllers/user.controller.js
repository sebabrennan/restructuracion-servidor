import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

export const registerResponse = (req, res, next)=>{
    try {
        res.redirect("/login").json({
            msg: 'Register OK',
            session: req.session    // --> passport.user: id mongo
        })
    } catch (error) {
        next(error);
    }
};

export const loginResponse = async(req, res, next)=>{
    try {
        const user = await userDao.getById(req.session.passport.user);
        const { first_name, last_name, email, age, role } = user;
        res.redirect("/profile").json({
            msg: 'Login OK',
            session: req.session,
            userData: {
                first_name,
                last_name,
                email,
                age,
                role
            },
        })
    } catch (error) {
        next(error);
    }
}

export const githubResponse = async(req, res, next)=>{
    try {
        const { first_name, last_name, email, isGithub } = req.user;
        res.json({
            msg: 'Register/Login Github OK',
            session: req.session,
            userData: {
                first_name,
                last_name,
                email,
                isGithub
            }
        })
    } catch (error) {
        next(error);
    }
}
