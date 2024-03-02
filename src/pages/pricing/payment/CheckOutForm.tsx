import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectUser } from "../../../services/auth/authSelector";

const CheckoutForm: React.FC = () => {
  const user = useSelector(selectUser);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      console.log("Payment Method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(user._id, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "anonymous",
            name: user.name || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    }

    if (paymentIntent?.status === "succeeded") {
      // const booking = {};
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ iconStyle: "solid", ...CARD_OPTIONS }} />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-white my-5 mb-1 hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded">
        Payment!
      </button>
    </form>
  );
};

export default CheckoutForm;

const CARD_OPTIONS = {
  style: {
    base: {
      iconColor: "#fff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fff",
      },
      "::placeholder": {
        color: "#fff",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
