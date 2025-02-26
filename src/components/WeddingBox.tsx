"use client";
import React from "react";
import "../app/styles/sendGreeting.scss";
import Image from "next/image";

export default function WeddingBox() {
  const info = {
    title: "Mừng Cưới",
    subtext:
      "Cảm ơn sự yêu mến, trân trọng của bạn đã dành cho ngày vui của chúng tôi!",
  };
  const accountBride = {
    title: "Mừng cưới đến chú rể",
    qr_code: "/images/qr-code-1.jpg",
    bank_name: "ACB",
    account_number: "7293007",
    account_name: "Nguyễn Phi Trường",
  };
  const accountGroom = {
    title: "Mừng cưới đến cô dâu",
    qr_code: "/images/qr-code-1.jpg",
    bank_name: "TP Bank",
    account_number: "039729",
    account_name: "Nguyễn Thi Kim Cúc",
  };

  return (
    <div id="mung-cuoi" className="bg-[#fbcbcb] my-12 py-8">
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
        <div className="bg-white w-full border-4 border-[#FCA5A5] p-1 shadow-lg max-w-lg rounded-lg overflow-hidden">
          <div className="p-2 flex flex-col items-center justify-center">
            <h3 className="font-dancing text-4xl mb-4 font-semibold">
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
            <span className="flex text-2xl font-inconsolata font-semibold mb-4">
              Ngân hàng: <b className="ml-2">{accountBride.bank_name}</b>
            </span>
            <span className="flex text-2xl font-inconsolata font-semibold mb-4">
              Số tài khoản:{" "}
              <b className="ml-2">{accountBride.account_number}</b>
            </span>
            <span className="flex text-2xl font-inconsolata font-semibold mb-4">
              Tên tài khoản: <b className="ml-2">{accountBride.account_name}</b>
            </span>
          </div>
        </div>
        <div className="bg-white w-full border-4 border-[#FCA5A5] p-1 shadow-lg max-w-lg rounded-lg overflow-hidden">
          <div className="p-2 flex flex-col items-center justify-center">
            <h3 className="font-dancing text-4xl mb-4 font-semibold">
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
            <span className="flex text-2xl font-inconsolata font-semibold mb-4">
              Ngân hàng: <b className="ml-2">{accountGroom.bank_name}</b>
            </span>
            <span className="flex text-2xl font-inconsolata font-semibold mb-4">
              Số tài khoản:{" "}
              <b className="ml-2">{accountGroom.account_number}</b>
            </span>
            <span className="flex text-2xl font-inconsolata font-semibold mb-4">
              Tên tài khoản: <b className="ml-2">{accountGroom.account_name}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
