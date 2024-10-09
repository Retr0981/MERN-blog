import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Validate the request body
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        // Ensure that the password is a string
        if (typeof password !== 'string') {
            return next(errorHandler(400, 'Password must be a string'));
        }

        // Hash the password using bcryptjs
        const hashedPassword = bcryptjs.hashSync(password, 10); // 10 is the salt rounds

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Send success response
        res.json({ message: 'Signup Successful' });
    } catch (error) {
        // Handle any errors that occur during the save operation
        next(error);
    }
};
