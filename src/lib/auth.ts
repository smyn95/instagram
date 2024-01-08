import { adduser } from "@/service/user";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({user: {id, email, name, image}}) {
      if (!email) {
        return false;
      }
      adduser({
        id, email, name: name||'', image, username: email.split('@')[0],
      });
      return true
    },
    async session({ session }) {
      console.log('session', session);
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
