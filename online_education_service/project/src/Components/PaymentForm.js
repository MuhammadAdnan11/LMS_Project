import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import {BsArrowLeft} from "react-icons/bs";
import { Link } from "react-router-dom";


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}


function hideDef() {
    
    document.getElementById("text").style.display = "none";
}



    return (
        <>
        <h2 className="text-center" id="text" style={{display:'block'}}> Add your card detail here to proceed to checkout 👇</h2>
        <div className="container mt-5">
            <div className="row">
                <div className="col col-md-6 offset-md-3 paycol">
                {!success ? 
        <form onSubmit={handleSubmit} >
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            
            <button className="paybtn " id="paybtn" onClick={hideDef} >Pay</button>
            
        </form>
        :
       <div>
           <h2 className="text-green">You just bought a course, congrats this is the best decision of you're life, We will notify you on eamil soon.</h2>
           <Link to="/courses"><span><BsArrowLeft className="fs-2 fw-bold text-green"/></span></Link>
       </div> 
        }
                </div>
            </div>
        </div>
       



       
            
        </>
    )
}


