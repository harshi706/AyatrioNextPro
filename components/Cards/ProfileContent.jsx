import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { IoIosAddCircle, IoMdContacts } from "react-icons/io";
// import { IoChatbubblesOutline } from "react-icons/io5";
// import { MdMenuBook } from "react-icons/md";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import linkdln from "@/public/images/linkdln.jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProfileFetch,
  selectProfileData,
} from "../Features/Slices/profileSlice";

const ProfileContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_PROFILE_REQUEST", payload: "Profile" });
  }, []);
  const peopleData = [
    { name: "Rajit1", image: linkdln },
    { name: "Rajit2", image: linkdln },
    { name: "Rajit3", image: linkdln },
    { name: "Rajit4", image: linkdln },
  ];
  const [peopleState, setPeopleState] = useState(peopleData);
  const profileData = useSelector(selectProfileData);
  const profileLoad = useSelector(loadProfileFetch);
  console.log(profileData);
  useEffect(() => {
    if (profileData) {
      setPeopleState(profileData);
    }
  }, []);
  return (
    <div className="transparent rounded-lg h-100 pb-8">
      <Swiper
        spaceBetween={20}
        // slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        style={{ "--swiper-navigation-size": "24px" }}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {profileData.map((person, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="bg-black rounded-full sm:h-40 h-28 sm:w-40 w-28 mb-2 sm:mt-32 mt-4 sm:ml-4 ml-2"></div>
              <div className="flex justify-center mr-6">
                <div className="text-2xl font-bold ">{person.name}</div>
                <a href="#">
                  <img
                    className="sm:h-10 h-6 sm:w-10 w-6 "
                    src={person.image}
                    alt={`LinkedIn for ${person.name}`}
                  />
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next "></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default ProfileContent;

// mb-6 mt-32 ml-28
//mb-6 mt-32 ml-16
//mb-6 mt-32 ml-1
//mb-6 mt-32 ml-[-48px]
