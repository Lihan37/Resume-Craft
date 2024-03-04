import React, { useState } from "react";
import InputText from "../../../../components/common/InputText";
import { BiLoaderAlt } from "react-icons/bi";
import Swal from "sweetalert2";

interface MonthlyData {
  free: {
    price: number | string;
    download: number | string;
  };
  premium: {
    price: number | string;
    download: number | string;
  };
  enterprise: {
    price: number | string;
    download: number | string;
  };
  discount: { amount: number | string };
}

export interface InitialFormData {
  monthly: MonthlyData;
  yearly: MonthlyData;
  active: boolean;
}

const initialState: InitialFormData = {
  monthly: {
    free: {
      price: "",
      download: "",
    },
    premium: {
      price: "",
      download: "",
    },
    enterprise: {
      price: "",
      download: "",
    },
    discount: {
      amount: "",
    },
  },
  yearly: {
    free: {
      price: "",
      download: "",
    },
    premium: {
      price: "",
      download: "",
    },
    enterprise: {
      price: "",
      download: "",
    },
    discount: {
      amount: "",
    },
  },
  active: false,
};

interface IForm {
  loading?: boolean;
  btnDisabled?: boolean;
  initialData?: InitialFormData;
  getValue?: (data: InitialFormData) => void;
}

const PricingForm: React.FC<IForm> = ({
  loading,
  btnDisabled,
  initialData,
  getValue,
}) => {
  const [state, setState] = useState<InitialFormData>(
    initialData || initialState
  );

  const handleMonthlyPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof MonthlyData
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      monthly: {
        ...prevState.monthly,
        [type]: {
          ...prevState.monthly[type],
          [name]: value,
        },
      },
    }));
  };

  const handleYearlyPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof MonthlyData
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      yearly: {
        ...prevState.yearly,
        [type]: {
          ...prevState.yearly[type],
          [name]: value,
        },
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isMonthlyDataEmpty = Object.values(state.monthly).some((data) =>
      Object.values(data).some((value) => value === "")
    );
    const isYearlyDataEmpty = Object.values(state.yearly).some((data) =>
      Object.values(data).some((value) => value === "")
    );

    if (!isMonthlyDataEmpty && !isYearlyDataEmpty && getValue) {
      getValue(state);
    } else {
      Swal.fire({
        icon: "error",
        text: "Fill all the inputs !",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-start gap-5 text-gray-200">
        <div className=" space-y-3">
          <h1 className="text-2xl font-bold  text-center">Monthly</h1>
          <h1 className="text-xl font-bold ">Free</h1>
          <InputText
            name="price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMonthlyPriceChange(e, "free")
            }
            value={state.monthly.free.price.toString()}
            placeholder="Price...."
            type="number"
          />
          <InputText
            name="download"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMonthlyPriceChange(e, "free")
            }
            value={state.monthly.free.download.toString()}
            placeholder="Download Point...."
            type="number"
          />
          <h1 className="text-xl font-bold ">Premium</h1>
          <InputText
            name="price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMonthlyPriceChange(e, "premium")
            }
            value={state.monthly.premium.price.toString()}
            placeholder="Price...."
            type="number"
          />
          <InputText
            name="download"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMonthlyPriceChange(e, "premium")
            }
            value={state.monthly.premium.download.toString()}
            placeholder="Download Point...."
            type="number"
          />
          <h1 className="text-xl font-bold ">Enterprise</h1>
          <InputText
            name="price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMonthlyPriceChange(e, "enterprise")
            }
            value={state.monthly.enterprise.price.toString()}
            placeholder="Price...."
            type="number"
          />
          <InputText
            name="download"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMonthlyPriceChange(e, "enterprise")
            }
            value={state.monthly.enterprise.download.toString()}
            placeholder="Download Point...."
            type="number"
          />

          <h1 className="text-xl font-bold ">Discount % </h1>
          <InputText
            name="amount"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleMonthlyPriceChange(e, "discount")
            }
            value={state.monthly.discount.amount.toString()}
            placeholder="Discount...."
            type="number"
          />
        </div>
        <div className=" space-y-3">
          <h1 className="text-2xl font-bold  text-center">Yearly</h1>
          <h1 className="text-xl font-bold ">Free</h1>
          <InputText
            name="price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleYearlyPriceChange(e, "free")
            }
            value={state.yearly.free.price.toString()}
            placeholder="Price...."
            type="number"
          />
          <InputText
            name="download"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleYearlyPriceChange(e, "free")
            }
            value={state.yearly.free.download.toString()}
            placeholder="Download Point...."
            type="number"
          />
          <h1 className="text-xl font-bold ">Premium</h1>
          <InputText
            name="price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleYearlyPriceChange(e, "premium")
            }
            value={state.yearly.premium.price.toString()}
            placeholder="Price...."
            type="number"
          />
          <InputText
            name="download"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleYearlyPriceChange(e, "premium")
            }
            value={state.yearly.premium.download.toString()}
            placeholder="Download Point...."
            type="number"
          />
          <h1 className="text-xl font-bold ">Enterprise</h1>
          <InputText
            name="price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleYearlyPriceChange(e, "enterprise")
            }
            value={state.yearly.enterprise.price.toString()}
            placeholder="Price...."
            type="number"
          />
          <InputText
            name="download"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleYearlyPriceChange(e, "enterprise")
            }
            value={state.yearly.enterprise.download.toString()}
            placeholder="Download Point...."
            type="number"
          />

          <h1 className="text-xl font-bold ">Discount % </h1>
          <InputText
            name="amount"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleYearlyPriceChange(e, "discount")
            }
            value={state.yearly.discount.amount.toString()}
            placeholder="Discount...."
            type="number"
          />
        </div>
      </div>
      <label
        htmlFor="hs-vertical-checkbox-in-form"
        className=" mt-5 w-full flex p-3 select-none cursor-pointer  bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  ">
        <input
          checked={state.active}
          onChange={() => setState((prv) => ({ ...prv, active: !prv.active }))}
          type="checkbox"
          className="shrink-0 mt-0.5  border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
          id="hs-vertical-checkbox-in-form"
        />
        <span className="text-base text-gray-400 ms-3 font-semibold">
          Active This Price Slot
        </span>
      </label>
      <button
        type="submit"
        disabled={btnDisabled}
        className="bg-white my-5 flex justify-center items-center gap-5 mb-1 hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded">
        Create ! {loading && <BiLoaderAlt className="animate-spin text-xl" />}
      </button>
    </form>
  );
};

export default PricingForm;
