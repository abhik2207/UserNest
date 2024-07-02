'use client';

import React, { useContext } from 'react'
import { Button } from '../ui/button';
import { deleteUserAction } from '@/actions';
import { UserContext } from '@/context';

export default function UserCard({ user }) {
    const { setOpenDialog, setAddNewUserFormData, setCurrentEditedId } = useContext(UserContext);

    const handleUserDelete = async (userId) => {
        const result = await deleteUserAction(userId, '/user-management');
    }

    const handleEdit = (user) => {
        setOpenDialog(true);
        setAddNewUserFormData({
            firstName: user?.firstName,
            lastName: user?.lastName,
            age: user?.age,
            gender: user?.gender,
            email: user?.email,
            phone: user?.phone
        });
        setCurrentEditedId(user?._id);
    }

    return (
        <div className='flex flex-col gap-2 p-4 rounded-lg bg-zinc-200 w-72 cursor-pointer'>
            <h1 className='text-xl font-bold'>{user.firstName} {user.lastName}</h1>
            <h1 className='text-lg font-semibold'>{user.age} - {user.gender}</h1>
            <h1 className='text-lg font-semibold'>{user.email}</h1>
            <h1 className='text-lg font-semibold'>{user.phone}</h1>
            <div className="flex gap-4 items-center justify-end mt-2 pt-4 border-t-2 border-t-zinc-400">
                <Button onClick={() => handleEdit(user)}>Edit</Button>
                <Button variant='destructive' onClick={() => handleUserDelete(user._id)}>Delete</Button>
            </div>
        </div>
    )
}
