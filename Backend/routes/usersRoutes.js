const express = require('express');
const User = require('../models/User')
const asynchandler = require('express-async-handler');
const authTokenGenerator = require('../utils/generatetoken');
const authMiddleware=require('../middleware/authMiddlware')
const usersRouter = express.Router();


usersRouter.post('/register', asynchandler(async (req, res) => {

    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
        throw new Error('User Exist');
    }
    const user = await User.create({ name, email, password });
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        token: authTokenGenerator(user._id)
    })

}))

usersRouter.post('/login', asynchandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user && (await user.isPasswordMatch(password))) {
        res.status(200);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: authTokenGenerator(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid Credentials')
    }
}))

//GET PROFILE

usersRouter.get(
    '/profile',
    authMiddleware,
    asynchandler(async (req, res) => {
      try {
        const user = await User.findById(req.user._id).populate('books');
        if (!user) throw new Error(`You don't have any profile yet`);
        res.status(200);
        res.send(user);
      } catch (error) {
        res.status(500);
        throw new Error('Server error');
      }
    })
  );
  
  //UPDATE PROFILE
  
  usersRouter.put(
    '/profile/update',
    authMiddleware,
    asynchandler(async (req, res) => {
      const user = await User.findById(req.user._id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        //This will encrypt automatically in our model
        if (req.body.password) {
          user.password = req.body.password || user.password;
        }
        const updateUser = await user.save();
        res.json({
          _id: updateUser._id,
          name: updateUser.name,
          password: updateUser.password,
          email: updateUser.email,
          token: authTokenGenerator(updateUser._id),
        });
      } else {
        res.status(401);
        throw new Error('User Not found');
      }
    })
  );
  
  usersRouter.delete('/:id',(req,res)=>{
      res.send("Delete Route")
  })
  //Fetch all Users
  
  usersRouter.get(
    '/',
    asynchandler(async (req, res) => {
      const users=await User.find({});
      if(users){
          res.status(200).json(users)
      }
      else{
          res.status(500)
          throw new Error ('No users found at the moment')
      }
    })
  );
  
module.exports = usersRouter ;