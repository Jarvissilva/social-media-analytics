import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import dbclient from "@/utils/dbclient";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(dbclient),
  providers: [Google],
});
