const User = require('../models/user');
const {sendSuccess, sendError} = require("../responseHandler")

//Creating and saving a new user 
const createUser = async (req, res) => {
    const {name, country, email} = req.body

    //create a user
    const user = new User({
        name,
        country,
        email,
    });

    //save user in the Database
    await user.save(async (err, user) => {
        if (err) {
            return sendError(res, err, 500)
        }

        return sendSuccess(res, user, 201)
    })
}

// Retrieve and return all profiles from the database.
const getUser = async (req, res) => {
    await Profile.find((err, profile) => {
        if (err) {
            return sendError(res, err, 500)
        }
        return sendSuccess(res, profile, 200)
    })
}

// Find profile and update it with the request body
const updateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
        if (err) {
            return sendError(res, err, 404)
        }
        return sendSuccess(res, user, 201)
    })
}

// Delete a profile with the specified profile Id in the request
const deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return sendError(res, err);
        }else{
            return sendSuccess(res, {})
        }
    })
}


module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
};