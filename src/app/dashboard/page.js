import Image from "next/image";
import { auth } from "@/utils/auth";
import LogoutButton from "@/components/logout-button";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <Image
            width={50}
            height={50}
            src={session.user?.image}
            alt="Profile"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{session.user?.name}</h2>
          <p className="text-gray-600">{session.user?.email}</p>
        </div>

        <hr className="my-6" />

        <div className="space-y-2 text-sm text-gray-800">
          <p>
            <span className="font-semibold">User ID:</span> {session.user?.id}
          </p>
          <p>
            <span className="font-semibold">Session ID:</span> {session.id}
          </p>
          <p>
            <span className="font-semibold">Session Token:</span>{" "}
            {session.sessionToken}
          </p>
          <p>
            <span className="font-semibold">Expires:</span>{" "}
            {new Date(session.expires).toLocaleString()}
          </p>
        </div>

        <LogoutButton />
      </div>
    </div>
  );
}
