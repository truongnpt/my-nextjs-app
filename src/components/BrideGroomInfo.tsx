"use client";
import Image from "next/image";

export default function BrideGroomInfo() {
  const info = {
    title: "Cô Dâu & Chú Rễ",
    subtext:
      "Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn.",
  };
  const infoBride = {
    name: "Nguyễn Phi Trường",
    farther: "Nguyễn Châu",
    mother: "Trần Thị Cúc",
    subtext: "Xóm 3, thôn 10, xã Mỹ Thắng, huyện Phù Mỹ, tỉnh Bình Định",
    image: {
      url: "/images/bride.jpg",
      alt: "Bride",
    },
  };

  const infoGroom = {
    name: "Nguyễn Thị Kim Cúc",
    farther: "Nguyễn Thiện",
    mother: "Lê Thị Bông",
    subtext: "Xóm 3, thôn 11, xã Mỹ Thắng, huyện Phù Mỹ, tỉnh Bình Định",
    image: {
      url: "/images/groom.jpg",
      alt: "Groom",
    },
  };

  return (
    <div id="co-dau-va-chu-re" className="max-w-6xl mx-auto mt-12 mb-8">
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
      <div className="grid grid-cols-2 p-8">
        <div className="bg-white">
          <Image
            className="rounded-lg overflow-hidden"
            src={infoBride.image.url}
            alt={infoBride.image.alt}
            width={448}
            height={448}
          />
        </div>
        <div className="bg-white p-8">
          <h2 className="font-dancing text-5xl font-semibold mb-4">
            {infoBride.name}
          </h2>
          <h5 className="font-pacifico text-1xl mb-3">
            <span>Con ông:</span> {infoBride.farther}
          </h5>
          <h5 className="font-pacifico text-1xl mb-6">
            <span>Con bà:</span> {infoBride.mother}
          </h5>
          <span className=" mb-6">Địa chỉ: {infoBride.subtext}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-6xl mx-auto p-8">
        <div className="bg-white p-8">
          <h1 className="font-dancing text-5xl font-semibold mb-4">
            {infoGroom.name}
          </h1>
          <h5 className="font-pacifico text-1xl mb-3">
            <span>Con ông:</span> {infoGroom.farther}
          </h5>
          <h5 className="font-pacifico text-1xl mb-6">
            <span>Con bà:</span> {infoGroom.mother}
          </h5>
          <span className=" mb-6">Địa chỉ: {infoGroom.subtext}</span>
        </div>
        <div className="bg-white">
          <Image
            className="rounded-lg overflow-hidden"
            src={infoGroom.image.url}
            alt={infoGroom.image.alt}
            width={448}
            height={448}
          />
        </div>
      </div>
    </div>
  );
}
