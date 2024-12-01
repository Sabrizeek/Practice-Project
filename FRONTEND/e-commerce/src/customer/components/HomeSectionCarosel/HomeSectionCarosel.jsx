import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarosel = () => {
  const [activeIndex,setActiveIndex]=useState(0)

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard key={item} />);

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    
    transition: "background-color 0.3s, border-color 0.3s",
  };

  const hoverStyle = {
    "&:hover": {
      backgroundColor: "#E0F7FA",
      borderColor: "#039BE5",
    },
  };

  return (
    <div className="px-4 lg:px-8 border border-black">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          style={{
            ...buttonStyle,
            left: "0",
            transform: "translateY(-50%) translateX(-50%)",
           
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon style={{ color: "black" }} />
        </Button>
        <Button
          variant="contained"
          className="z-50 bg-white"
          
          onClick={slideNext}
          style={{
            ...buttonStyle,
            right: "0",
            transform: "translateY(-50%) translateX(50%)",
          }}
          aria-label="next"
        >
          <KeyboardArrowRightIcon style={{ color: "black" }} />
        </Button>
      </div>
      <style jsx>{`
        .z-50:hover {
          background-color: #E0F7FA !important;
          
        }
      `}</style>
    </div>
  );
};

export default HomeSectionCarosel;
