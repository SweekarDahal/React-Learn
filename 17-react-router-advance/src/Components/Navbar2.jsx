import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex py-2 px-5">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="px-5 py-2 bg-gray-500 text-black rounded active:scale-95 m-2"
      >
        Go to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="px-5 py-2 bg-gray-500 text-black rounded active:scale-95 m-2"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="px-5 py-2 bg-gray-500 text-black rounded active:scale-95 m-2"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
