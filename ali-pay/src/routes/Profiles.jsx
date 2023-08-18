import React from "react";
import { FaBars, FaChevronDown, FaChevronLeft } from "react-icons/fa";


import { abstract, bell } from "../assets";

const Profiles = () => {
  return (
    <div className="px-4 flex flex-col items-center bg-gray-200">
      <div className="bg-white w-full md:w-1/2 shadow-lg  py-4 items-center flex justify-between px-3">
        <div className="px-5 py-3 rounded-md">
          <FaBars fontSize={28} />
        </div>
        <p className="font-bold text-lg">Settings</p>
        <img src={bell} alt="nav" />
      </div>

      <div className="mt-8 px-4 shadow-xl w-full md:w-1/2 flex py-4 bg-white justify-between rounded-xl  ">
        <p>Buisness Account</p>
        <FaChevronDown />
      </div>

      <div className=" rounded-2xl mb-9 bg-white px-3 py-3 mt-8 w-full md:w-1/2 flex justify-center ">
        <div className="text-lg border-2 border-gray-200 rounded-2xl  w-full font-bold   flex flex-col ">
          <div className="flex justify-between">
            <p
              style={{
                borderBottom: "1px solid lightgray",
                borderRight: "1px solid lightgray",
              }}
              className="flex-1 text-center rounded-tl-2xl py-5 bg-[#f0f7eb] font-normal"
            >
              {" "}
              company
            </p>
            <p
              style={{ borderBottom: "1px solid lightgray" }}
              className="flex-1 text-center  py-5  font-normal"
            >
              ceo founder
            </p>
          </div>
          <div className="flex justify-between">
            <p
              style={{
                borderBottom: "1px solid lightgray",
                borderRight: "1px solid lightgray",
              }}
              className="flex-1 text-center py-5  font-normal"
            >
              comapny director
            </p>
            <p
              style={{ borderBottom: "1px solid lightgray" }}
              className="flex-1 text-center py-5  font-normal"
            >
              {" "}
              Assesment
            </p>
          </div>
          <div className="flex justify-between">
            <p
              style={{ borderRight: "1px solid lightgray" }}
              className="flex-1 text-center py-5  font-normal"
            >
              Branch/Department
            </p>
            <p className="flex-1 text-center py-5  font-normal">
              {" "}
              KYC information
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-2xl w-full md:w-1/2 px-4 py-3">
        <div className="flex gap-5 items-center">
          <FaChevronLeft />
          <p className="text-xl">Edit Company Information</p>
        </div>
        <div className="mt-9">
          <div className="flex gap-5">
            <img src={abstract} alt="" />
            <button className="self-end bg-[#f0f7eb] px-4 py-3 rounded-lg boder-2 border-primary-green text-primary-green">
              Change Logo
            </button>
          </div>

          <div className="mt-[4rem] flex flex-col w-full">
            <div className="border-2 px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="Joyona Travis" id="" />
              <p className="absolute -top-4 left-5 bg-white">Company Name</p>
            </div>
            <div className="flex flex-col mt-8 gap-5">
              <p>Is Your Company Registered</p>
              <div className="w-3/4 flex gap-3">
                <button className="flex-1 px-8 py-3 bg-primary-green rounded-lg">
                  Yes
                </button>
                <button className="flex-1 px-8 py-3 bg-white border-2 border-primary-green rounded-lg">
                  No
                </button>
              </div>
            </div>
            <div className="my-4 flex items-center gap-4">
              <button className="border-2 border-primary-green rounded-lg bg-[#f0f7eb] px-3 py-2 font-medium">
                Upload CAC Doc.
              </button>
              <p>Jpeg and Png Only (2mb max)</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input
                type="text"
                placeholder="17, Simbiat Abiola Way, Ikeja"
                id=""
              />
              <p className="absolute -top-4 left-5 bg-white">Official Adress</p>
            </div>

            <div className="my-4 flex items-center gap-4">
              <button className="border-2 border-primary-green rounded-lg bg-[#f0f7eb] px-3 py-2 font-medium">
                Upload proof of Adress.
              </button>
              <p>eg. Nepa bills</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="100 and above" id="" />
              <p className="absolute -top-4 left-5 bg-white">Company Size</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="100505" id="" />
              <p className="absolute -top-4 left-5 bg-white">Pension Code</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="Lagos" id="" />
              <p className="absolute -top-4 left-5 bg-white">Paye State</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="1010155" id="" />
              <p className="absolute -top-4 left-5 bg-white">Paye Id</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="1006678932" id="" />
              <p className="absolute -top-4 left-5 bg-white">NHF Code</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="www.custormerwebsite.com" id="" />
              <p className="absolute -top-4 left-5 bg-white">Website</p>
            </div>
            <div className="border-2 mt-[3rem] px-4 py-5 relative border-primary-green  rounded-2xl">
              <input type="text" placeholder="Travel and Tourism" id="" />
              <p className="absolute -top-4 left-5 bg-white">Industry </p>
            </div>
            <div className="w-full mt-8 mb-6 flex gap-3">
                <button className="flex-1 px-8 py-3 border-2 border-primary-green rounded-full">
                  cancel
                </button>
                <button className="flex-1 px-8 py-3 text-white   bg-primary-green rounded-full">
                  save
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
