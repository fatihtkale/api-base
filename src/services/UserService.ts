import User from "../entity/User";
import dataSource from '../database/database';
import UserEntity from '../entity/User';
import { SendError } from "../utils/ServerResponse";
import bcrypt from 'bcryptjs';

const userRepository = dataSource.getRepository(UserEntity);

export const createUser = async (user: User) => {

    if(!validateUserInput(user)) return SendError('Invalid user body');

    if(!user) return SendError('User is required');

    const existingUser = await userRepository.findOne({ where: { email: user.email, phoneNumber: user.phoneNumber  }});

    if(existingUser) return SendError('User already exists');

    user.password = hashPassword(user.password);

    const newUser = await userRepository.create(user);
    
    await userRepository.save(newUser);

    return newUser;
}

/* Util Functions */
const validateUserInput = (user: User) => {
    if(!user) return SendError('User is required');
    if(!user.email) return SendError('Email is required');
    if(!user.password) return SendError('Password is required');
    if(!user.phoneNumber) return SendError('Phone number is required');

    return true;
}

const hashPassword = (password: string) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        return hash;
    })

    return password
}