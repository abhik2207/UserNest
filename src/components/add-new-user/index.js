'use client';

import React, { useContext, useState } from 'react'
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { addNewUserFormControls, addNewUserFormInitialState } from '@/utils';
import { addNewUserAction, editUserAction } from '@/actions';
import { UserContext } from '@/context';

export default function AddNewUser() {
    const { openDialog, setOpenDialog, addNewUserFormData, setAddNewUserFormData, currentEditedId, setCurrentEditedId } = useContext(UserContext)

    const handleAddNewUserAction = async () => {
        const result = currentEditedId !== null ? await editUserAction(currentEditedId, addNewUserFormData, '/user-management') : await addNewUserAction(addNewUserFormData, '/user-management');
        setAddNewUserFormData(addNewUserFormInitialState);
        setOpenDialog(false);
        setCurrentEditedId(null);
    }

    return (
        <div>
            <Button onClick={() => setOpenDialog(true)} variant="secondary">Add new user</Button>

            <Dialog open={openDialog} onOpenChange={() => {
                setOpenDialog(false);
                setAddNewUserFormData(addNewUserFormInitialState);
                setCurrentEditedId(null);
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{currentEditedId ? 'Edit the user' : 'Add new user'}</DialogTitle>
                    </DialogHeader>
                    <form action={handleAddNewUserAction} className="grid gap-4 py-4">
                        {
                            addNewUserFormControls.map((obj, index) => (
                                <div className="mb-5" key={index}>
                                    <Label htmlFor={obj.name} className="text-right">
                                        {obj.label}
                                    </Label>
                                    <Input
                                        id={obj.id}
                                        name={obj.name}
                                        placeholder={obj.placeholder}
                                        type={obj.type}
                                        className="col-span-3"
                                        value={addNewUserFormData[obj.name]}
                                        onChange={(e) => setAddNewUserFormData({ ...addNewUserFormData, [obj.name]: e.target.value })}
                                    />
                                </div>
                            ))
                        }
                        <DialogFooter>
                            <Button type="submit" className='disabled:opacity-40'>Save</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
