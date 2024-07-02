import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import { Button } from "@/components/ui/button";
import UserCard from "@/components/user-card";
import Link from "next/link";

export default async function UserManagement() {
    const allUsers = await fetchUsersAction();

    return (
        <div className="py-12 px-32 w-full min-h-screen bg-zinc-900 flex flex-col">
            <div className="flex w-full justify-between">
                <h1 className="text-white font-bold text-2xl">User Management System</h1>
                <div className="flex gap-4">
                    <AddNewUser />
                    <Link href='/'>
                        <Button variant='secondary'>Back</Button>
                    </Link>
                </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
                {allUsers && allUsers?.data.length > 0 ?
                    allUsers.data.map((user, index) => (
                        <UserCard key={index} user={user} />
                    ))
                    : <h1 className="text-white">No users found</h1>
                }
            </div>
        </div>
    )
}
