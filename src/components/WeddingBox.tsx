"use client";
import React, { useState } from "react";
import "../app/styles/weddingBox.scss";
import Image from "next/image";
import Animation from "./Animation";

export default function WeddingBox() {
  const [isOpenBride, setIsOpenBride] = useState(false);
  const [isOpenGroom, setIsOpenGroom] = useState(false);

  const info = {
    title: "Mừng Cưới",
    subtext:
      "Cảm ơn sự yêu mến, trân trọng của bạn đã dành cho ngày vui của chúng tôi!",
  };
  const accountBride = {
    title: "Chú Rể",
    qr_code: "/images/qr-code-1.jpg",
    bank_name: "ACB",
    account_number: "7293007",
    account_name: "Nguyễn Phi Trường",
  };
  const accountGroom = {
    title: "Cô Dâu",
    qr_code: "/images/qr-code-1.jpg",
    bank_name: "TP Bank",
    account_number: "039729",
    account_name: "Nguyễn Thi Kim Cúc",
  };

  return (
    <div id="mung-cuoi" className="my-12 py-8">
      <div className="grid justify-center text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/sec-title-flower.png"
            alt="flower"
            width={126}
            height={59}
          />
        </div>
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
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4 md:p-8 text-center">
        <Animation startOffScreen="-100%">
          <div
            className={`window-animation bg-white w-full border-4 border-[#ac0202] p-1 shadow-lg max-w-lg rounded-2xl overflow-hidden ${
              isOpenBride ? "open" : ""
            }`}
          >
            <div className="image-hy absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
              <Image
                onClick={() => setIsOpenBride(true)}
                src="/images/hy.png"
                alt="hy"
                width={200}
                height={200}
              />
              <h3 className="font-dancing text-4xl mt-6 font-semibold text-white">
                {accountBride.title}
              </h3>
            </div>
            <div className="p-2 flex flex-col items-center justify-center">
              <h3 className="font-dancing text-4xl mb-4 font-semibold text-[#ac0202]">
                {accountBride.title}
              </h3>
              <div className="my-4">
                <Image
                  src={accountBride.qr_code}
                  alt="qr code"
                  width={200}
                  height={200}
                />
              </div>
              <span className="flex text-lg md:text-2xl font-inconsolata font-semibold mb-4">
                Ngân hàng: <b className="ml-2">{accountBride.bank_name}</b>
              </span>
              <span className="flex text-lg md:text-2xl font-inconsolata font-semibold mb-4">
                Số tài khoản:{" "}
                <b className="ml-2">{accountBride.account_number}</b>
              </span>
              <span className="flex text-lg md:text-2xl font-inconsolata font-semibold mb-4">
                Tên tài khoản:{" "}
                <b className="ml-2">{accountBride.account_name}</b>
              </span>
            </div>
          </div>
        </Animation>
        <Animation startOffScreen="100%">
          <div
            className={`window-animation bg-white w-full border-4 border-[#ac0202] p-1 shadow-lg max-w-lg rounded-2xl overflow-hidden ${
              isOpenGroom ? "open" : ""
            }`}
          >
            <div className="image-hy absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
              <Image
                onClick={() => setIsOpenGroom(true)}
                src="/images/hy.png"
                alt="hy"
                width={200}
                height={200}
              />
              <h3 className="font-dancing text-4xl mt-6 font-semibold text-white">
                {accountGroom.title}
              </h3>
            </div>
            <div className="p-2 flex flex-col items-center justify-center">
              <h3 className="font-dancing text-4xl mb-4 font-semibold text-[#ac0202]">
                {accountGroom.title}
              </h3>
              <div className="my-4">
                <Image
                  src={accountGroom.qr_code}
                  alt="qr code"
                  width={200}
                  height={200}
                />
              </div>
              <span className="flex text-lg md:text-2xl font-inconsolata font-semibold mb-4">
                Ngân hàng: <b className="ml-2">{accountGroom.bank_name}</b>
              </span>
              <span className="flex text-lg md:text-2xl font-inconsolata font-semibold mb-4">
                Số tài khoản:{" "}
                <b className="ml-2">{accountGroom.account_number}</b>
              </span>
              <span className="flex text-lg md:text-2xl font-inconsolata font-semibold mb-4">
                Tên tài khoản:{" "}
                <b className="ml-2">{accountGroom.account_name}</b>
              </span>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
}
