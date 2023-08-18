import React from "react";

const About = () => {
  return (
    <div className="about__bg py-[2rem] flex flex-col items-center justify-center  px-[5rem] min-h-[90vh] w-full overflow-x-hidden">
      <div>
        <h1 className="text-6xl font-bold  text-primary-green text-center">
          For Indiviual and Businesses
        </h1>
        <p className="text-center my-4 text-lg">
          Join 200+ businesses using Eazipay's easy solution.
        </p>
      </div>
      <div className="flex  flex-col gap-[2rem] md:gap-0 md:flex-row mt-4">
        <div className="bg-primary-green shadow-xl flex-1 drop-shadow-xl text-white rounded-md flex flex-col gap-5 px-[3rem] py-6">
          <h3 className="font-bold text-3xl">Tamper Proof Pay</h3>
          <p className="text-lg leading-10">
            Your staff payroll history is kept in one place forever.No more
            excel sheet or manual records. Download your payroll history anytime
            you need it.
          </p>
        </div>
        <div className="bg-primary-green ml-0 shadow-xl drop-shadow-lg md:-ml-48 flex-1 text-white rounded-md flex flex-col gap-5 px-[3rem] py-6">
          <h3 className="font-bold text-3xl">All Payroll, AnyTime</h3>
          <p className=" text-lg leading-8">
            Wherever you are Eazipay has got you covered on ALL your Payroll
            tasks.
          </p>
          <p className=" text-lg leading-10">
            Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay
            handle all your compliamces in one place and easily, in seconds!
          </p>
        </div>
        <div className="bg-primary-green ml-0 md:-ml-52 drop-shadow-xl shadow-xl flex-1 text-white rounded-md flex flex-col gap-5 px-[3rem] py-6 " >
          <h3 className="font-bold text-3xl">Payroll in Seconds</h3>
          <p className=" text-lg leading-10">Never again wil you spend more than 2 minutes on payroll.</p>
          <p className=" text-lg leading-10">Just click on your staff annd bulk-pay them at once.</p>
          <p className=" text-lg leading-10"> Payment is done permanently.</p>
        </div>
      </div>

      <div className="mt-24">
        <p className="text-center text-lg">
          We are happy to answer your queries. Please, reach us at
          
        </p>
        <p className="text-center text-lg"><span className="text-red-400">hello@myeazipay.com</span>  and expect our response shortly after.</p>
      </div>
    </div>
  );
};

export default About;
