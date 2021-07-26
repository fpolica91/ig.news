import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
  const stripeJS = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_CLIENT)
  return stripeJS
}