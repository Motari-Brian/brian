import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import {  FaUser, FaFile, FaClipboardList, FaStar, FaWallet ,} from 'react-icons/fa';

  const documents = [
    { name: "401k Participant Fee Disclosure", date: "January 15, 2023" },
    { name: "2023 Blue Choice Benefits Summary", date: "February 20, 2023" },
    { name: "Medical & Dental", date: "March 10, 2023" },
  ];
  const articles = [
    { title: "Benefits are Important to You", date: "January 25, 2024" },
    
  ];

const Root = () => {
  
  const iconSize = '4rem'; 
  const userName = "Motari"; 
  
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      

      <NavBar />
      
      <div className="items-center justify-center bg-slate-50 p-4 rounded-md mt-2 mb-4 mx-auto relative z-10" style={{ width: "85%", height: "auto" }}>
        <div className="text-black text-2xl w-1/2">
          Welcome back {userName}, What are you looking <br />for today?
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mx-auto w-full md:w-[85%] h-[4cm] mb-[2cm] rounded-md overflow-hidden">
        <div className="p-4 bg-slate-50 flex items-center justify-center">
          <a href="#profile">
          <FaUser  size={iconSize}/>
          <span className="ml-2">Profile</span>
        </a>
        </div>
        <div className="p-4 bg-slate-50 flex items-center justify-center">
          <a href="#">

          <FaFile  size={iconSize} />
          <span>Document Library</span>
        </a>
        </div>
        <div className="p-4 bg-slate-50 flex items-center justify-center">
          <a href="#">
        <FaClipboardList size={iconSize} />
        <span>Enrollment Summary</span>
        </a>
        </div>
        <div className="p-4 bg-slate-50 flex items-center justify-center">

          <a href="#">
        <FaStar  size={iconSize}/>
        <span>Life Events</span>
        </a>
        </div>
        <div className="p-4 bg-slate-50 flex items-center justify-center">
          <a href="#">
          <FaWallet size={iconSize} />
        <span>Total Compensation statement</span>
        </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-auto w-full md:w-[85%] mt-2 mb-[2cm] rounded-md overflow-hidden">

 
  <div className="p-4 bg-slate-50 flex items-center justify-center overflow-auto" style={{ gridRowStart: 'span 2' }}>
  <a href="#">
    <h2 className="text-lg font-bold mb-2">My Time Off</h2>
    <div className="flex justify-between mb-2">
      <span>Hours Taken:</span>
      
      <span>8</span>
    </div>
    <div className="flex justify-between mb-2">
      <span>Hours Calculated:</span>
      
      <span>40</span>
    </div>
    <div className="flex justify-between mb-2">
      <span>Hours Remaining:</span>
      
      <span>32</span>
    </div>
    <button className="bg-cyan-500 text-white py-2 px-4 rounded">
      Request Time Off
    </button>
  </a>
  </div>

  
  <div className="p-4 bg-slate-50 flex items-center justify-center" style={{ gridRowStart: 'span 1' }}>
  <a href="#">
        <h2 className="text-lg font-bold mb-2">Compliance Documents</h2>
        <ul className="text-left">
          {documents.map((document, index) => (
            <li key={index} className="flex items-center text-cyan-500 mb-2">
              <span className="mr-2">
                <FaFile />
              </span>
              {document.name}
              <div className="ml-2 text-black">
                {document.date}
              </div>
            </li>
          ))}
        </ul>
      </a>
  </div>

  
  <div className="p-4 bg-slate-50 flex items-center justify-center" style={{ gridRowStart: 'span 2' }}>
  <a href="#">
            <p>Yo have an unread company message. </p>
            <span style={{ color: '#0e7490' }}>View message</span>
          </a>
  </div>
  <div className="p-4 bg-slate-50 flex items-center justify-center" style={{ gridRowStart: 'span 2' }}>
  <a href="#">
        <h2 className="text-lg font-bold mb-2">News and Articles</h2>
        <ul className="text-cyan-500 text-left">
          {articles.map((article, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">
                <FaFile />
              </span>
              {article.title}
              <div className="ml-2 text-black">
                {article.date}
              </div>
            </li>
          ))}
        </ul>
      </a>
  </div>
  <div className="p-4 bg-slate-50 flex items-center justify-center" style={{ gridRowStart: 'span 2' }}>
  <a href="#">
    <h2 className="text-lg font-bold mb-2">Contacts</h2>
    <div className="flex items-center mb-2">
      <span className="mr-2">
      
        <FaUser size="2rem" />
      </span>
      <div>
        <p>Contact: David Lee</p>
        <p className="text-cyan-500">Sr. Human Resources Manager</p>
        <p className="text-cyan-500">Email: dlee@company.com</p>
        <p className="text-cyan-500">Phone: (404) 812-1532</p>
      </div>
    </div>
  </a>
  </div>
  
  <div className="p-4 bg-slate-50 flex items-center justify-center " style={{ gridRowStart: 'span 2' }}>
  <a href="#">
    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
    <ul className="text-cyan-700 text-left">
      <li>
        <span className="mr-2" style={{ color: '#0e7490' }}>
          &#8226;
        </span>
        View MD
      </li>
      <li>
        <span className="mr-2" style={{ color: '#0e7490' }}>
          &#8226;
        </span>
        The Mayo Clinic
      </li>
      <li>
        <span className="mr-2" style={{ color: '#0e7490' }}>
          &#8226;
        </span>
        National Institute of Health
      </li>
    </ul>
  </a>
  </div>
  
</div>
      <Outlet />
    </div>
  );
};

export default Root;
