import { redirect } from "next/navigation";
import { auth, signIn } from "@/utils/auth";

export default async function SignIn() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Sign in to Continue</h1>

        {/* Google */}
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="w-full mb-3 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>

        {/* Facebook */}
        <form
          action={async () => {
            "use server";
            await signIn("facebook");
          }}
        >
          <button
            type="submit"
            className="w-full mb-3 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
          >
            <img
              src="https://www.svgrepo.com/show/494341/facebook.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            Sign in with Facebook
          </button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("twitter");
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition"
          >
            <img
              src="https://www.svgrepo.com/show/475689/twitter-color.svg"
              alt="Twitter"
              className="w-5 h-5"
            />
            Sign in with X (Twitter)
          </button>
        </form>
      </div>
    </div>
  );
}
