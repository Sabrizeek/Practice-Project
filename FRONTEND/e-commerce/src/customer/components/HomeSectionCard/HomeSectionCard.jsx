import React from "react";
import myLocalImage from "D:\\ITP\\project\\Practice-Project\\FRONTEND\\e-commerce\\src\\assests\\6zazs_512.jpg"; // Adjust the path according to your project structure

const HomeSectionCard = () => {
  return (
    <div
      className="cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3 border "
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={myLocalImage}
          alt="Local"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">El Senor</h3>
        <p className="mt-2 text-sm text-gray-500">
          Men Regular Fit Solid Cut Away Collar Formal Shirt
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
