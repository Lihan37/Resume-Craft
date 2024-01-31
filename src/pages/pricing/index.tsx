import React, { useState } from "react";
import useTitleSet from "../../hooks/useTitleSet";
import { Container } from "../../components/common/Container";
import SectionHeader from "../../components/common/SectionHeader";
import TextGradient from "../../components/common/TextGradient";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";

interface IPrice {
  premium: number;
  enterprise: number;
}

const Pricing: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("monthly");
  useTitleSet("Pricing");
  const [prices, setPrice] = useState<IPrice>({ premium: 13, enterprise: 31 });

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    const premiumYearly = 13 * 12 - (13 * 12 * 25) / 100;
    const enterpriseYearly = 31 * 12 - (31 * 12 * 25) / 100;
    setPrice((prev) => ({
      ...prev,
      premium: event.target.value === "monthly" ? 9 : premiumYearly,
      enterprise: event.target.value === "monthly" ? 31 : enterpriseYearly,
    }));
  };
  return (
    <div>
      <div className=" relative py-10 bg-gradient-to-t from-blue-200 via-violet-100 to-white">
        <Container>
          <div className="text-center py-10 h-[700px]  rounded-2xl">
            <button className="font-semibold py-2 px-4 border-2 rounded-full">
              Choose Your Package
            </button>
            <SectionHeader>
              Our plans scale <br /> with
              <TextGradient>your business</TextGradient>
            </SectionHeader>
            <p className="mt-5 text-c-dark-light">
              Our expert resume-writing service has empowered over 10
              professionals to secure more interviews, land coveted <br /> job
              opportunities, and accelerate their career growth.
            </p>
          </div>
          <div className=" absolute w-full h-screen top-[27rem] left-0 right-0 text-c-dark">
            <Container>
              <div className="rounded-t-2xl  bg-white w-full h-screen relative">
                <div className=" absolute -top-8 left-0 right-0">
                  <div className=" px-4 lg:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-28 md:gap-0">
                      <div className="w-full text-center hidden md:block">
                        {/* Header  */}
                        <div className="  mb-16 h-64 lg:h-80 flex flex-col items-center justify-center ">
                          <div className=" space-y-2 mt-10 ">
                            <h1 className=" text-xl font-semibold px-5">
                              Pick Your Plan:
                            </h1>
                            <div className=" space-y-1 border-gray-100 py-3 px-5 rounded-md border-2 w-fit font-semibold">
                              <div className=" flex justify-start items-center gap-2 ">
                                <input
                                  type="radio"
                                  name="monthly"
                                  id="monthly"
                                  value="monthly"
                                  className=" cursor-pointer"
                                  checked={selectedOption === "monthly"}
                                  onChange={handleRadioChange}
                                />
                                <label
                                  className=" cursor-pointer"
                                  htmlFor="monthly">
                                  Monthly billing
                                </label>
                              </div>
                              <div className=" flex justify-start items-center gap-2 ">
                                <input
                                  type="radio"
                                  name="Yearly"
                                  id="Yearly"
                                  className="cursor-pointer"
                                  value="yearly"
                                  checked={selectedOption === "yearly"}
                                  onChange={handleRadioChange}
                                />
                                <label
                                  className=" cursor-pointer"
                                  htmlFor="Yearly">
                                  Yearly billing
                                </label>
                                <span className=" px-2 text-base bg-red-100 rounded-xl">
                                  Save 25%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-start items-start flex-col w-full">
                          {packagePlans.map((item, i) => {
                            const eventItem = i % 2 === 0;
                            return (
                              <span
                                key={i}
                                className={` ${
                                  eventItem ? "bg-gray-100" : " bg-white"
                                } w-full  py-5  text-base lg:text-xl font-semibold px-5 text-c-dark`}>
                                {item.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      {/* Free Plan */}
                      <div className="w-full text-center">
                        <div className=" mb-16  bg-c-primary md:bg-transparent text-white md:text-c-dark rounded-2xl md:rounded-none h-64 lg:h-80 flex flex-col items-center justify-center ">
                          <div className="px-5 lg:px-10 space-y-3 lg:space-y-5 mt-10">
                            <h1 className=" font-semibold text-3xl md:text-xl lg:text-3xl">
                              Free Plan
                            </h1>
                            <h1 className=" text-4xl md:text-2xl lg:text-6xl font-bold">
                              $0
                            </h1>
                            <h2 className="text-gray-200 md:text-c-dark-light text-base lg:font-xl">
                              Per Month
                            </h2>
                            <button className="py-1 w-fit px-5 md:px-3 bg-white text-c-dark  text-base md:text-xs lg:text-base font-semibold  border-2 rounded-full md:border-c-dark ">
                              Get Started
                            </button>
                          </div>
                        </div>
                        <div className=" flex justify-start items-start  flex-col w-full">
                          {packagePlans.map((item, i) => {
                            const eventItem = i % 2 === 0;
                            return (
                              <span
                                key={i}
                                className={` ${
                                  eventItem ? "bg-gray-100" : " bg-white"
                                } w-full  py-5 text-[24.2px] lg:text-[27.9px] font-semibold px-5`}>
                                <div className=" w-full items-center flex justify-between md:justify-center gap-4 md:gap-0">
                                  <span className=" md:hidden text-base ">
                                    {item.name}
                                  </span>
                                  {item.free ? (
                                    <RxCheckCircled className=" text-c-primary" />
                                  ) : (
                                    <RxCrossCircled className=" text-rose-500" />
                                  )}
                                </div>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      {/* Premium Plan */}
                      <div className="w-full text-center">
                        <div className="mb-16  h-64 lg:h-80 bg-c-primary text-white rounded-2xl flex flex-col items-center justify-center ">
                          <div className="px-5 lg:px-10 space-y-3 lg:space-y-5 mt-10">
                            <h1 className=" font-semibold text-3xl md:text-xl lg:text-3xl">
                              Premium Plan
                            </h1>
                            <h1 className="  text-4xl md:text-2xl lg:text-6xl font-bold">
                              ${prices.premium}
                            </h1>
                            <h2 className=" text-gray-200 text-base lg:font-xl">
                              Per Month
                            </h2>
                            <button className="py-1 w-fit px-5 md:px-3 text-base md:text-xs lg:text-base bg-white text-neutral-900 font-semibold border-2 rounded-full ">
                              Get Started
                            </button>
                          </div>
                        </div>
                        <div className=" flex justify-start items-start  flex-col w-full">
                          {packagePlans.map((item, i) => {
                            const eventItem = i % 2 === 0;
                            return (
                              <span
                                key={i}
                                className={` ${
                                  eventItem ? "bg-gray-100" : " bg-white"
                                } w-full  py-5 text-[24.2px] lg:text-[27.9px] font-semibold px-5`}>
                                <div className=" w-full items-center flex justify-between md:justify-center gap-4 md:gap-0">
                                  <span className=" md:hidden text-base ">
                                    {item.name}
                                  </span>
                                  {item.premium ? (
                                    <RxCheckCircled className=" text-c-primary" />
                                  ) : (
                                    <RxCrossCircled className=" text-rose-500" />
                                  )}
                                </div>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      {/* Enterprise Plan */}
                      <div className="w-full text-center">
                        <div className="mb-16 bg-c-primary md:bg-transparent text-white md:text-c-dark rounded-2xl md:rounded-none h-64 lg:h-80 flex flex-col items-center justify-center ">
                          <div className="px-5 lg:px-10 space-y-3 lg:space-y-5 mt-10">
                            <h1 className=" font-semibold text-3xl md:text-xl lg:text-3xl">
                              Enterprise Plan
                            </h1>
                            <h1 className=" text-4xl md:text-2xl lg:text-6xl font-bold">
                              ${prices.enterprise}
                            </h1>
                            <h2 className="text-gray-200 md:text-c-dark-light text-base lg:font-xl">
                              Per Month
                            </h2>
                            <button className="py-1 w-fit px-5 md:px-3 bg-white text-c-dark  text-base md:text-xs lg:text-base font-semibold  border-2 rounded-full md:border-c-dark ">
                              Get Started
                            </button>
                          </div>
                        </div>
                        <div className=" flex justify-start items-start  flex-col w-full">
                          {packagePlans.map((item, i) => {
                            const eventItem = i % 2 === 0;
                            return (
                              <span
                                key={i}
                                className={` ${
                                  eventItem ? "bg-gray-100" : " bg-white"
                                } w-full  py-5 text-[24.2px] lg:text-[27.9px] font-semibold px-5`}>
                                <div className=" w-full items-center flex justify-between md:justify-center gap-4 md:gap-0">
                                  <span className=" md:hidden text-base ">
                                    {item.name}
                                  </span>
                                  {item.enterprise ? (
                                    <RxCheckCircled className=" text-c-primary" />
                                  ) : (
                                    <RxCrossCircled className=" text-rose-500" />
                                  )}
                                </div>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </div>
      <div className=" h-[2350px] md:h-[490px] lg:h-[650px] xl:h-[700px] "></div>
    </div>
  );
};

export default Pricing;

const packagePlans = [
  {
    name: "Basic Resume",
    free: true,
    premium: true,
    enterprise: true,
  },
  {
    name: "Basic Cover letter",
    free: true,
    premium: true,
    enterprise: true,
  },
  {
    name: "Single User",
    free: true,
    premium: true,
    enterprise: true,
  },
  {
    name: "Portfolio Create",
    free: false,
    premium: true,
    enterprise: true,
  },
  {
    name: "10 User",
    free: false,
    premium: false,
    enterprise: true,
  },
];
