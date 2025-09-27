import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const Agence = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);
  const imgArray = [
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa'
  ]

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger:imgDivRef.current,
        markers:true, 
        start:"top 32%",
        end:"top -70%",
        scrub:true , 
        pin:true , 
        onUpdate:function(i){
          const imgIndex = Math.floor(i.progress * imgArray.length);
          if(imgIndex == imgArray.length){
            imgRef.current.src = imgArray[0];
          }else{
                        imgRef.current.src = imgArray[imgIndex];
          }

        }
      },
    });
  });
  return (
    <div>
      <div className="section1 mt-1">
        <div
          ref={imgDivRef}
          className=" overflow-hidden w-[15vw] absolute rounded-2xl left-[40%] top-72"
        >
          <img
          ref={imgRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7
"
            alt=""
          />
        </div>

        <div className="mt-1 relative font-[font2] ">
          <div className="mt-[55vh]">
            <h1 className="text-[15vw] leading-[17vw] uppercase ">
              Soixan 7th <br />
              Twelve
            </h1>
          </div>
          <div className="pl-[50%] ">
            <p className="text-5xl mt-5">
              {" "}
              &nbsp;&nbsp;&nbsp; Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Accusantium ducimus, corporis consequatur, dicta
              similique, labore officia rem sint rerum pariatur excepturi minus
              perspiciatis incidunt! Commodi, sunt vitae. Cumque, harum id
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
