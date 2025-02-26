"use client";
import React from "react";
import "../app/styles/sendGreeting.scss";
import Image from "next/image";

export default function SendGreeting() {
  const info = {
    title: "Gửi Lời Chúc",
    subtext:
      "Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!",
  };
  const listmessage = [
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
    {
      name: "Mai Phạm",
      relationship: "Bạn chú rễ",
      message: "Chúc bạn trăm năm hạnh phúc nha",
    },
  ];

  return (
    <div
      id="loi-chuc"
      style={{ backgroundImage: `url('images/bg.png')` }}
      className="my-12 py-8"
    >
      <div className="grid justify-center text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/sec-title-flower.png"
            alt="flower"
            width={126}
            height={59}
          />
        </div>
        <h1 className="font-dancing text-5xl font-semibold mb-4">
          {info.title}
        </h1>
        <span className="font-dancing text-2xl font-semibold mb-4">
          {info.subtext}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto p-8 text-center">
        <div className="bg-white w-full border-4 border-[#FCA5A5] p-1 shadow-lg max-w-lg mx-auto rounded-lg overflow-hidden">
          <div className="mx-auto h-full border-2 p-12 border-[#FCA5A5] flex flex-col rounded-lg overflow-hidden">
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Tên hoặc nickname của bạn*"
              className="border-2 border-[#FCA5A5] p-2.5 rounded-md mb-4 outline-none"
            />
            <input
              name="relationship"
              id="relationship"
              type="text"
              placeholder="Bạn có mối quan hệ gì với cô dâu & chú rễ*"
              className="border-2 border-[#FCA5A5] p-2.5 rounded-md mb-4 outline-none"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Lời chúc của bạn*"
              className="border-2 border-[#FCA5A5] p-2.5 rounded-md mb-4 h-24 outline-none"
            ></textarea>

            <button className="bg-[#FCA5A5] text-white mt-4 py-3 px-4 mx-auto hover:bg-[#FECACA] rounded-full overflow-hidden">
              Gửi Lời Chúc →
            </button>
          </div>
        </div>
        <div className="bg-white w-full border-4 border-[#FCA5A5] p-1 shadow-lg max-w-lg rounded-lg overflow-hidden">
          <div className="border-2 p-2 border-[#FCA5A5] flex flex-col rounded-lg overflow-hidden">
            <h3 className="font-dancing text-3xl mb-4 text-left font-semibold">
              Lời chúc từ mọi người
            </h3>
            <div
              className="list-mesages"
              style={{ height: 400, overflow: "auto" }}
            >
              {listmessage.map((item, index) => (
                <div
                  key={index}
                  className="flex align-center border-b pb-2 mb-4 border-gray-200"
                >
                  <div
                    className="user p-2 mr-2 rounded-full bg-gray-200"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <Image
                      src="/images/user.png"
                      alt="user"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div className="text-left">
                    <span className="flex text-left text-sm font-patrick-hand font-semibold">
                      {item.name}
                    </span>
                    <span className="relative text-left text-xs font-patrick-hand font-semibold -top-2 text-gray-500">
                      {item.relationship}
                    </span>
                    <p className="font-patrick-hand">{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
