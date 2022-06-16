import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserSchema from "../models/userSchema";

const secretCode = 'secreto';

export const signUp = async (req, res) => {
    const { email, password, userName } = req.body;
  
    try {
        const user = await UserSchema.findOne({ email }); //buscamos el email en la db
        if (user) return res.status(404).json({ message: "There's already an account associated with that email address" }); // si ya existe devolvemos un error
        const hashedPassword = await bcrypt.hash(password, 12); // en la db no almacenamos la pass directamente, sino que guardamos una version hasheada
        const result = await UserSchema.create({ email, password: hashedPassword, userName }); // creo el usuario, el id se genera automaticamente
        const token = jwt.sign( { email: result.email, id: result._id }, secretCode, { expiresIn: "1d" } ); // aca creamos un token para esa cuenta
        res.status(201).json({ result, token }); // y con esto devolvemos ese token
    } catch (error) {
        res.status(500).json({ message: "An error has occurred" });
        console.log(error);
    }
  };

export const signIn = async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const user = await UserSchema.findOne({ email }); //buscamos el email en la db
        if (!user) return res.status(404).json({ message: "There's no account associated with that email address" }); // si no existe devolvemos un error
        const passwordMatch = await bcrypt.compare(password, user.password); //comparamos la contraseña ingresada con la que esta en la db
        if (!passwordMatch) return res.status(400).json({ message: "Wrong password, try again" }); // si no concuerdan devolvemos un error
        const token = jwt.sign({ email: user.email, id: user._id }, secretCode, { expiresIn: "1d" }); // aca creamos un token para esa cuenta
        res.status(200).json({ result: user, token }); // y con esto devolvemos ese token
    } catch (err) {
        res.status(500).json({ message: "An error has occurred" });
        console.log(error);
    }
  };