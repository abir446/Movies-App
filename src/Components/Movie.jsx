import React from "react";

const Movie = ({ country, awards, director, rated, img, title, released }) => {
  return (
    <div className="flex md:flex-row  flex-col md:h-1/2 md:gap-3 md:w-1/2 items-center justify-start rounded-xl shadow-lg p-4 m-2 bg-[#7171f533]">
      <img
        className=" h-1/2 md:h-full lg:hover:h-[50vh] hover:w-[20vw] z-2 relative rounded-md"
        src={img}
        alt=""
      />
      <div className="">
        <div className="">
          <span className="font-bold text-lg">Title:</span> {title}
        </div>
        <div className="">
          <span className="font-bold text-lg">Released:</span> {released}
        </div>
        <div className="">
          <span className="font-bold text-lg">Rating:</span> {rated},
          <span className="px-1 font-semibold">IMBD</span>
        </div>
        <div className="">
          <span className="font-bold text-lg">Director:</span> {director}
        </div>
        <div className="">
          <span className="font-bold text-lg">Awards:</span> {awards}
        </div>
        <div className="">
          <span className="font-bold text-lg">Country:</span> {country}
        </div>
      </div>
    </div>
  );
};

export default Movie;
