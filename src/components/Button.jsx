import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`rounded-full py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:opacity-60 transition ease-in-out hover:scale-90`}
    >
      Get Started
    </button>
  );
};

export default Button;
