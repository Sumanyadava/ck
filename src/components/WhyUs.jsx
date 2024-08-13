import React from "react";

const WhyUs = () => {
  return (
    <div>
    <div className="flex h-[50vh] w-full text-black justify-center items-center gap-5 sm:flex-col md:flex-row">
      <div className=" sm:w-1/3 ">
        <h1 className="text-black text-4xl font-bold">
          Focus and Scale your business, leave the HubSpot CRM to Us
        </h1>
        <p>
        
        Our small, yet dedicated team of professionals will work closely with your business team and make sure the CRM is fully functional
          
        </p>
        <button>Our Benifits listed below</button>
      </div>
      <h1 className="text-9xl text-center font-bold sm:w-2/3">
        <p className="text-sm">Your Partner</p>
        Why Choose HubCentral
      </h1>
    </div>



    <div className=" w-full flex justify-around gap-5 items-center flex-wrap">
            <div className="bg-[#FEDD26] p-5 rounded-xl">
              {" "}
              Outsource your CRM for best ROI{" "}
            </div>

            <div className="bg-[#FF90E7] p-5 rounded-xl"> RevOps Experts </div>
            <div className="bg-[#FA421E] p-5 rounded-xl">
              Unlimited HubSpot tasks{" "}
            </div>
            <div className="bg-[#FFF27E] p-5 rounded-xl">
              {" "}
              Submit request by anyone in you team{" "}
            </div>
          </div>
    </div>
  );
};

export default WhyUs;
