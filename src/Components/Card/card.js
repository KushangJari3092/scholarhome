import { Button } from "@mui/material";
import React from "react";
import "./card.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Card({ name, eligiblity, benefit, deadline }) {
  return (
    <>
      <div className="bg-white w-72 shadow-lg rounded-lg cardmain">
        <img
          src="https://bigeye.ug/wp-content/uploads/2016/05/Couple-travel.jpg"
          alt=""
          className="w-full h-44 object-cover rounded-t-lg"
        />
        <div className="px-6 py-3 sbody">
          <p className="text-gray-800 pt-3 pb-2 dead">
            <CalendarMonthIcon /> <span className="dedy"> {deadline}</span>
          </p>
          <h1
            className="font-bold text-[20px] stag"
            style={{ textDecoration: "none" }}
          >
            {name}
          </h1>
          <div className="bodypart">
            <div className="eligi">
              <h5>Eligibiity :</h5>
              <h6>{eligiblity[0]}</h6>
            </div>
            <div className="desc">
              <h5>Benefits :</h5>
              <h6 className="pt-2 mb-5 text-[15px] text-gray-700">
                {benefit[0]}
              </h6>
            </div>
          </div>
          <div className="p-1"></div>
        </div>
        <div className="buttforsc">
          <button> View </button>
          <button>Apply</button>
        </div>
      </div>
    </>
  );
}

export default Card;
