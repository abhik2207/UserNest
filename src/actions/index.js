'use server';

import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

export const fetchUsersAction = async () => {
    await connectToDB();
    try {
        const allUsers = await User.find();

        if (allUsers) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(allUsers)),
                message: 'Users fetched successfully!'
            }
        }
        else {
            return {
                success: false,
                message: 'Try again later!'
            }
        }
    }
    catch (err) {
        console.log(err);

        return {
            success: false,
            message: 'Internal server error!'
        }
    }
}

export const addNewUserAction = async (formData, pathToRevalidate) => {
    await connectToDB();

    try {
        const newUser = await User.create({ ...formData });

        if (newUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: 'User created successfully!'
            }
        }
        else {
            return {
                success: false,
                message: 'Try again later!'
            }
        }
    }
    catch (err) {
        console.log(err);

        return {
            success: false,
            message: 'Internal server error!'
        }
    }
}

export const deleteUserAction = async (userId, pathToRevalidate) => {
    await connectToDB();

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (deletedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: 'User deleted successfully!'
            }
        }
        else {
            return {
                success: false,
                message: 'Try again later!'
            }
        }
    }
    catch (err) {
        console.log(err);

        return {
            success: false,
            message: 'Internal server error!'
        }
    }
}

export const editUserAction = async (userId, formData, pathToRevalidate) => {
    await connectToDB();

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { ...formData }, { new: true });

        if (updatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: 'User updated successfully!'
            }
        }
        else {
            return {
                success: false,
                message: 'Try again later!'
            }
        }
    }
    catch (err) {
        console.log(err);

        return {
            success: false,
            message: 'Internal server error!'
        }
    }
}
