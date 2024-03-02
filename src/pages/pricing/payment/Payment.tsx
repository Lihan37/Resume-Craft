import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ReactNode } from "react";
// const key = import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY as string;
const stripePromise = loadStripe(
  "pk_test_51OHsovKZXsOulhabK1e712E63a9Rc5TzPPYPUkc787ZCWjptvCeUbFeheuwIjDuOAhjrud6UWaQFLLbzuYOIxWHo00x6YSvaM3"
);

interface IPayment {
  children: ReactNode;
}

const Payment: React.FC<IPayment> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[700px] break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 p-8">
        <h1 className="text-2xl my-3 mt-0 font-bold text-center w-full">
          PAYMENT
        </h1>
        <Elements stripe={stripePromise}>{children}</Elements>
      </div>
    </div>
  );
};

export default Payment;
