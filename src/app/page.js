import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-zinc-900 flex flex-col gap-5 items-center justify-center w-full h-screen">
      <h1 className="text-4xl text-zinc-100 font-medium">Welcome to User Nest!</h1>
      <Link href='/user-management'>
        <Button variant='secondary'>Browse users</Button>
      </Link>
    </div>
  );
}
