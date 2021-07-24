import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_SECRET_DEV,
      clientSecret: process.env.GITHUB_KEY_SECRET_DEV,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
})