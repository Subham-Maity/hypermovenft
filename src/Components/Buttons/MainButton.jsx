import React from "react";

const MainButton = ({
  classNames,
  icon,
  title,
  isText = true,
  onClick, // Include onClick prop in the component
}) => {
  return (
    <button
      onClick={onClick} // Pass the onClick prop to the button element
      className={`${classNames} flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-white`}
    >
      {icon}
      <span className={`lg:block ${isText ? "" : "hidden"}`}>{title}</span>
    </button>
  );
};

export default MainButton;
