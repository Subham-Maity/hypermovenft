import React, {useState} from "react";
import {FaEthereum} from "react-icons/fa";
import {BiShapePolygon} from "react-icons/bi";

// Define a type for the props of the component
type SwitchNetworkProps = {
    href?: string[]; // An optional array of links for each icon
    text?: string[]; // An optional array of names for each icon
    Child?: React.ReactNode[]; // An optional array of children elements for each icon
    Icons?: React.ReactNode[]; // An optional array of icons for each icon
};

// Define the component as a function
const SwitchNetwork: React.FC<SwitchNetworkProps> = ({
                                                         href,
                                                         text,
                                                         Child,
                                                         Icons,
                                                     }) => {
    // Use a state variable to store the index of the selected icon
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Use a state variable to store the visibility of the dropdown menu
    const [showMenu, setShowMenu] = useState(false);

    // Define a function to handle the click on the button
    const handleClick = () => {
        // Toggle the showMenu state
        setShowMenu((prev) => !prev);
    };

    // Define a function to handle the selection of an icon from the menu
    const handleSelect = (index: number) => {
        // Set the selectedIndex state to the index of the clicked icon
        setSelectedIndex(index);
        // Hide the menu
        setShowMenu(false);
    };

    // Return the JSX element for the component
    return (
        <div className="relative">
            {/* The button element that shows the selected icon */}
            <button
                className="flex items-center justify-center bg-gray-200 rounded-full p-2 focus:outline-none"
                onClick={handleClick}
            >
                {/* Check if Icons prop is defined and has an element at selectedIndex */}
                {Icons && Icons[selectedIndex]}
            </button>
            {/* The dropdown menu element that shows all the icons */}
            {showMenu && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md p-2 mt-2">
                    {/* Map over the Icons prop and render each icon as a menu item */}
                    {Icons &&
                        Icons.map((icon, index) => (
                            <a
                                key={index}
                                href={href ? href[index] : "#"} // Use the href prop or a default value for the link
                                className="flex items-center p-2 hover:bg-gray-100 rounded-md" // Use tailwind css classes for styling
                                onClick={() => handleSelect(index)} // Call the handleSelect function with the index of the icon
                            >
                                {icon} {/* Render the icon element */}
                                <span
                                    className="ml-2">{text ? text[index] : ""}</span> {/* Render the text prop or an empty string */}
                                {Child && Child[index]} {/* Render the Child prop or nothing */}
                            </a>
                        ))}
                </div>
            )}
        </div>
    );
};

// Export the component as default
export default SwitchNetwork