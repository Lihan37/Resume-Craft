import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectUser } from "../../../services/auth/authSelector";
import { IPaymentData } from "..";
import { useCreatePaymentMutation } from "../../../services/api/api";
import { BiLoaderAlt } from "react-icons/bi";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

interface ICheckoutForm {
  data: IPaymentData;
  setIsOpen?: (data: boolean) => void;
}

const CheckoutForm: React.FC<ICheckoutForm> = ({
  data,
  setIsOpen = () => {},
}) => {
  const user = useSelector(selectUser);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const stripe = useStripe();
  const elements = useElements();
  const [createPayment, { isSuccess }] = useCreatePaymentMutation();

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(!isSuccess);
    }
  }, [isSuccess]);

  const getClientSecret = async () => {
    try {
      const response = await fetch(`${baseUrl}/payment/v1/payment-intent`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: data.price }),
      });
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data.price > 0) {
      getClientSecret();
    }
  }, [data.price]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Set loading to true before payment processing
    setLoading(true);

    const { error } = await stripe.createPaymentMethod({
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
      setLoading(false); // Set loading to false if there is an error
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
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
      setLoading(false); // Set loading to false if there is a confirmation error
    }

    if (paymentIntent?.status === "succeeded") {
      const paymentData = {
        type: data.plan,
        downloadlimite: data.downloadlimite,
        timeLimite: data.timeLimite,
        amount: data.price,
        transactionId: paymentIntent.id,
      };

      createPayment(paymentData);
      setLoading(false); // Set loading to false after successful payment
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Successfully Complete",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ iconStyle: "solid", ...CARD_OPTIONS }} />
      <button
        type="submit"
        disabled={!stripe || !clientSecret || loading}
        className="bg-white my-5 flex justify-center items-center gap-5 mb-1 hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded">
        Payment! {loading && <BiLoaderAlt className="animate-spin text-xl" />}
      </button>
    </form>
  );
};

export default React.memo(CheckoutForm);

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
