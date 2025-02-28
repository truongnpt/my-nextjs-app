"use client";
import React, { useEffect, useState } from "react";
import "../app/styles/sendGreeting.scss";
import Image from "next/image";
import Animation from "./Animation";

export default function SendGreeting() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [name, setName] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");
  const [message, setMessage] = useState("");
  const [listMessages, setListMessages] = useState<
    Array<{
      id: number;
      name: string;
      relationship: string;
      message: string;
      createdAt: number;
    }>
  >([]);
  const info = {
    title: "Gửi Lời Chúc",
    subtext:
      "Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!",
  };

  const resetForm = () => {
    setName("");
    setRelationship("");
    setMessage("");
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    try {
      const response = await fetch(
        "https://67014d57b52042b542d76773.mockapi.io/wedding-messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, relationship, message }),
        }
      );
      const result = (await response.json()) as {
        id: number;
        name: string;
        relationship: string;
        message: string;
        createdAt: number;
      };
      if (result) {
        resetForm();
        getList();
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const getList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://67014d57b52042b542d76773.mockapi.io/wedding-messages"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (result) {
        const sortedResult = result.sort(
          (a: { id: number }, b: { id: number }) => b.id - a.id
        );
        setListMessages(sortedResult);
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString("vi-VN");
  };

  useEffect(() => {
    if (!error) {
      getList();
    }
  }, [error]);

  return (
    <div
      id="gui-loi-chuc"
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
        <Animation vertical={true} startOffScreen="50px">
          <h1 className="font-dancing text-5xl font-semibold mb-4 text-[#ac0202]">
            {info.title}
          </h1>
        </Animation>
        <Animation vertical={true} startOffScreen="50px">
          <span className="font-dancing text-2xl font-semibold mb-4 text-[#ac0202]">
            {info.subtext}
          </span>
        </Animation>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4 md:p-8">
        <Animation startOffScreen="-100%">
          <div className="bg-[#ac0202] m-auto w-full md:h-[550px] border-4 border-[#ac0202] p-1 shadow-lg rounded-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="h-full">
              <div className="mx-auto h-full border-2 p-4 md:p-8 border-white flex flex-col rounded-xl overflow-hidden">
                <label className="text-white font-pacifico mb-2">
                  Tên của bạn*
                </label>
                <input
                  name="name"
                  id="name"
                  value={name}
                  type="text"
                  className="border-2 border-white p-2.5 rounded-xl mb-4 outline-none text-white"
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="text-white font-pacifico mb-2">
                  Bạn có mối quan hệ gì với cô dâu & chú rễ*
                </label>
                <input
                  name="relationship"
                  id="relationship"
                  type="text"
                  value={relationship}
                  className="border-2 border-white p-2.5 rounded-xl mb-4 outline-none text-white"
                  onChange={(e) => setRelationship(e.target.value)}
                />
                <label className="text-white font-pacifico mb-2">
                  Lời chúc của bạn*
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={message}
                  className="border-2 border-white p-2.5 rounded-xl mb-4 outline-none text-white"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button
                  disabled={loading || !(name && relationship && message)}
                  className="bg-white font-pacifico w-full text-[#ac0202] mt-4 py-3 px-4 mx-auto hover:bg-[#ac0202] hover:text-white border-2 border-[#ffae00] rounded-xl overflow-hidden"
                >
                  {loading ? "Đang gửi..." : "Gửi Lời Chúc →"}
                </button>
              </div>
            </form>
          </div>
        </Animation>
        <Animation startOffScreen="100%">
          <div className="bg-white m-auto w-full md:h-[550px] border-4 border-[#ac0202] p-1 shadow-lg rounded-xl overflow-hidden">
            <div className="border-2 p-2 h-full border-[#ac0202] flex flex-col rounded-xl overflow-hidden">
              <h3 className="font-dancing text-3xl mb-4 text-left font-semibold text-[#ac0202]">
                Lời chúc từ mọi người
              </h3>
              <div
                className="list-mesages px-2"
                style={{ height: 550, overflow: "auto" }}
              >
                {listMessages &&
                  listMessages.map((item, index) => (
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
                      <div className="w-full text-left">
                        <div className="flex items-center justify-between">
                          <span className="flex text-left text-md font-pacifico font-semibold">
                            {item.name}
                          </span>
                          <span className="relative text-left text-xs font-semibold text-gray-500">
                            {formatDate(item.createdAt)}
                          </span>
                        </div>
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
        </Animation>
      </div>
    </div>
  );
}
