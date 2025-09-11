import { signIn } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
