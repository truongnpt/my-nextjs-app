"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../app/styles/eventWedding.scss";
import Animation from "./Animation";

export default function EventWedding() {
  const [isOpen, setIsOpen] = useState(false);
  const [linkGoogleMap, setLinkGoogleMap] = useState<string>();

  const info = {
    title: "Sự Kiện Cưới",
    subtext:
      "Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.",
  };

  const events = [
    {
      id: 0,
      name: "Lễ Cưới Nhà Nữ",
      time: "07:30 29/10/2025",
      address:
        "TƯ GIA NHÀ NỮ - xóm 3, thôn 11, xã Mỹ Thắng, huyện Phù Mỹ, tỉnh Bình Định",
      link_google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30925.97635705663!2d109.0816442743164!3d14.326120600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168cb00760dad47%3A0xfd1e8814e249c132!2zTmjDoCBUcsaw4budbmcgTnB0!5e0!3m2!1svi!2s!4v1740629446262!5m2!1svi!2s",
      image: {
        url: "/images/slide1.jpg",
        alt: "image 1",
        width: 384,
        height: 256,
      },
    },
    {
      id: 1,
      name: "Tiệc Cưới Nhà Nữ",
      time: "09:30 29/10/2025",
      address:
        "TƯ GIA NHÀ NỮ - xóm 3, thôn 11, xã Mỹ Thắng, huyện Phù Mỹ, tỉnh Bình Định",
      link_google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30925.97635705663!2d109.0816442743164!3d14.326120600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168cb00760dad47%3A0xfd1e8814e249c132!2zTmjDoCBUcsaw4budbmcgTnB0!5e0!3m2!1svi!2s!4v1740629446262!5m2!1svi!2s",
      image: {
        url: "/images/slide2.jpg",
        alt: "image 2",
        width: 384,
        height: 256,
      },
    },
    {
      id: 2,
      name: "Lễ Cưới Nhà Nam",
      time: "11:30 29/10/2025",
      address:
        "TƯ GIA NHÀ NAM - xóm 3, thôn 10, xã Mỹ Thắng, huyện Phù Mỹ, tỉnh Bình Định",
      link_google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30925.97635705663!2d109.0816442743164!3d14.326120600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168cb00760dad47%3A0xfd1e8814e249c132!2zTmjDoCBUcsaw4budbmcgTnB0!5e0!3m2!1svi!2s!4v1740629446262!5m2!1svi!2s",
      image: {
        url: "/images/slide2.jpg",
        alt: "image 2",
        width: 384,
        height: 256,
      },
    },
    {
      id: 3,
      name: "Tiệc Cưới Nhà Nam",
      time: "12:00 29/10/2025",
      address:
        "TƯ GIA NHÀ NAM - xóm 3, thôn 11, xã Mỹ Thắng, huyện Phù Mỹ, tỉnh Bình Định",
      link_google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30925.97635705663!2d109.0816442743164!3d14.326120600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168cb00760dad47%3A0xfd1e8814e249c132!2zTmjDoCBUcsaw4budbmcgTnB0!5e0!3m2!1svi!2s!4v1740629446262!5m2!1svi!2s",
      image: {
        url: "/images/slide2.jpg",
        alt: "image 2",
        width: 384,
        height: 256,
      },
    },
  ];

  const handleClick = (link: string) => {
    setLinkGoogleMap(link);

    setIsOpen(true);
  };

  return (
    <div
      id="su-kien-cuoi"
      className="mt-12 mb-8"
      style={{ backgroundImage: `url('images/bg3.png')` }}
    >
      <div
        className="bg-image h-[300px] md:h-[700px]"
        style={{ backgroundImage: `url('images/bg2.jpg')` }}
      />
      <div className="w-full absolute text-center z-10 left-1/2 top-12 md:top-1/4 -translate-x-1/2  md:-translate-y-1/2">
        <Animation vertical={true} startOffScreen="50px">
          <h1 className="font-dancing text-5xl font-semibold mb-4 text-white">
            {info.title}
          </h1>
        </Animation>
        <Animation vertical={true} startOffScreen="50px">
          <span className="font-dancing text-2xl font-semibold mb-4 text-white">
            {info.subtext}
          </span>
        </Animation>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 p-4 md:p-8 gap-4 md:-translate-y-1/2">
        {events.map((event, index) => (
          <Animation
            key={index}
            vertical={true}
            startOffScreen={`${50 * index}px`}
          >
            <div className="p-4 bg-white text-center rounded-lg overflow-hidden">
              <h1 className="font-dancing text-3xl font-semibold mb-4">
                {event.name}
              </h1>
              <Image
                src={event.image.url}
                alt={event.image.alt}
                width={event.image.width}
                height={event.image.height}
              />
              <span className="flex justify-center font-semibold my-4">
                {event.time}
              </span>
              <span className="flex justify-center my-4">{event.address}</span>
              <button
                className="w-full rounded-full text-white py-2 px-4 mt-4 bg-[#FCA5A5] hover:bg-[#FECACA]"
                onClick={() => handleClick(event.link_google_map)}
              >
                Xem Bản Đồ
              </button>
            </div>
          </Animation>
        ))}
      </div>
      {isOpen && (
        <div
          className="fixed inset-12 md:inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <iframe
            src={linkGoogleMap}
            className="w-[400px] md:w-[600px] h-[250px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
}
