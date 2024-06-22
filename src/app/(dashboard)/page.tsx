import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-y-4">
      <UserButton />

      <h1 className=" text-2xl">
        Build a Real-Time Miro Clone With Nextjs, React, Tailwind (2024)
      </h1>
      <h2 className=" text-lg font-semibold">
        This is a screen for authenticated users only.
      </h2>

    </main>
  );
}
