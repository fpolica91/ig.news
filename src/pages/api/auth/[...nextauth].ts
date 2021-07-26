import NextAuth from 'next-auth'
import { query as q } from 'faunadb'
import Providers from 'next-auth/providers'
import { fauna } from '../../../services/fauna'

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
  // jwt: {
  // NEXTAUTH_URL
  // signingKey: process.env.SIGNIN_JWT_KEY
  // signingKey: '{"kty":"oct","kid":"suDnhBhRxPf3eKddG4z0H2c3xAmB6lYsVYxJqRXRCrs","alg":"HS512","k":"oh-OI6yHk_DLSWVrfEQyo5IKa68qCKYvpYbZ00-jCQo"}',
  // encryptionKey: '{"kty":"oct","kid":"suDnhBhRxPf3eKddG4z0H2c3xAmB6lYsVYxJqRXRCrs","alg":"HS512","k":"oh-OI6yHk_DLSWVrfEQyo5IKa68qCKYvpYbZ00-jCQo"}'
  // },
  callbacks: {
    async signIn(user, account, profile) {
      try {
        const { email } = user

        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('users_by_email'),
                  q.Casefold(email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('users_by_email'),
                q.Casefold(email)
              )
            )
          )
        )
        return true
      } catch (error) {
        console.log(error.message, "the error message")
        return false
      }
    }
  }
})