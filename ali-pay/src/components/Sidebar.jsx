import React from "react";
import { FaChevronDown } from "react-icons/fa";
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import { Union, book, clip, doc, menu, money, sidep, wallet } from "../assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:block bg-white shadow-xl fixed top-0 left-0 w-[17vw]  bottom-0">
      <div>
        <img src={Union} alt="" className="h-[150px] w-full" />
      </div>
      <div className="flex flex-col mt-8">
        <div
          style={{  borderLeft:'3px solid green' }}
          className="px-3 flex items-center gap-2  bg-[#E7FFE7] py-4"
        >
          <div  className="flex items-center gap-2">
            <img src={menu} alt="" />
            <p>Dashboard</p>
          </div>
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center  gap-2 py-4"
        >
          <div className="flex items-center gap-2">
            <img src={wallet} alt="" />
            <p>Wallet</p>
          </div>
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center justify-between gap-2 py-4"
        >
          <Link to="/employee" className="flex items-center gap-2">
            <img src={sidep} alt="" />
            <p>Employee Management</p>
          </Link>
          <FaChevronDown />
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center justify-between gap-2 py-4"
        >
          <div className="flex items-center gap-2">
            <img src={doc} alt="imag" />
            <p>payroll</p>
          </div>
          <FaChevronDown />
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center justify-between gap-2 py-4"
        >
          <div className="flex items-center gap-2">
            <img src={clip} alt="" />
            <p>compliance</p>
          </div>
          <FaChevronDown />
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center justify-between gap-2 py-4"
        >
          <div className="flex items-center gap-2">
             <img src={money} alt="" />
          <p>Quick Loan</p>
          </div>
         
          <FaChevronDown />
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center justify-between gap-2 py-4"
        >
          <div className="flex items-center gap-2">
            <img src={book} alt="" />
            <p>Book Keeping</p>
          </div>
          <FaChevronDown />
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center justify-between gap-2 py-4"
        >
          <div className="flex items-center gap-2">
          <BsTelephone />
            <p>Support</p>
          </div>
        </div>
        <div
          style={{ borderTop: "1px solid gray" }}
          className="px-3 flex items-center justify-between gap-2 py-4"
        >
          <Link to={'/profiles'} className="flex items-center gap-2">
            <AiOutlineSetting />
            <p>settings</p>
      </Link>
      <FaChevronDown />
    </div>
    </div>
    </div>
  );
};

export default Sidebar;
