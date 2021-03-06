import styles from "./styles.module.scss"
import { signIn, useSession } from 'next-auth/client'
import { api } from "../../services/axios"
import { getStripeJs } from "../../services/stripe-js"
import { useRouter } from "next/router"

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubmit() {
    if (!session) {
      signIn()
      return
    }
    if (session.activeSubscription) {
      return router.push('/posts');
    }
    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubmit}
    >
      Subscribe Now
    </button>
  )
}