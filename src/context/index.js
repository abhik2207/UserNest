'use client';

import { addNewUserFormInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserState({ children }) {
    const [currentEditedId, setCurrentEditedId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormInitialState);


    return <UserContext.Provider value={{ currentEditedId, setCurrentEditedId, openDialog, setOpenDialog, addNewUserFormData, setAddNewUserFormData }}>
        {children}
    </UserContext.Provider>
}