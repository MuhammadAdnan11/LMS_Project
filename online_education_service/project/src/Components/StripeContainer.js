import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MmtPaEEVZHpyQqNpyOvmC3nhjjrRl5KvDPsKwblsHiVb7JXRbpOHkk8rnEgJzLxt4CD7hoKQPQ2DsIX6IkvCVMl00pS8iSovr"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
		
			<PaymentForm />
		</Elements>
	)
}