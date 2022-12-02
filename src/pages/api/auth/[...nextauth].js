import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import Providers from "next-auth/providers"
// import GithubProvider from "next-auth/providers/github"

export const authOptions = ({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			nextAuth: process.env.NEXTAUTH_SECRET,
		}),
		// ...add more providers here
	],
});

export default NextAuth(authOptions)