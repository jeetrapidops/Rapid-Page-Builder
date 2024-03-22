import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"


//test controller
export const testController = async (req, res) => {
  try {
    res.send("Test Controller");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//register
export const registerController = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname.trim() || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 5) {
      return res.status(400).json({ message: 'Password must be at least 5 characters long' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ fullname, email, password });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not SignUp' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    const access_token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    //mail code
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: `${process.env.EMAIL_ID}`,
    //     pass: `${process.env.EMAIL_PASS}`
    //   }
    // });

    // const info = await transporter.sendMail({
    //   from: `${process.env.EMAIL_ID}`,
    //   to: email,
    //   subject: 'login successfully!',
    //   text: `${email},\n\nenjoy,\n\nthis app!!!`
    // });
    // console.log('Email sent successfully:', info);

    res.status(200).json({ access_token });
  } catch (error) {
    console.error('Error in loginController:', error);
    res.status(500).json({ message: 'Server error' });
  }
};