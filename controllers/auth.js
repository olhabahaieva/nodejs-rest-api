const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const {SECRET_KEY} = process.env;

const register = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });

    if(user){
        throw HttpError(409, "Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({...req.body, password: hashPassword});

    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
    })
};

const login = async(req, res)=>{
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if(!user){
    throw HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if(!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  }

  const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "23h"})

  res.json({
    token,
  })
}

const getCurrent = async(req, res, next) =>{
    const{email, subscription} = req.user;
    res.json({
        email,
        subscription
    })
}

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
}
