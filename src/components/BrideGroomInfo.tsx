"use client";
import Image from "next/image";
import Animation from "./Animation";

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
    farther: "Nguyễn Văn Ái",
    mother: "Trương Thị Bông",
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
      <div className="grid md:grid-cols-2 p-4 md:p-8">
        <Animation startOffScreen="-100%">
          <div>
            <Image
              className="rounded-lg overflow-hidden"
              src={infoBride.image.url}
              alt={infoBride.image.alt}
              width={544}
              height={448}
            />
          </div>
        </Animation>
        <Animation startOffScreen="100%">
          <div className="p-4 md:p-8">
            <h2 className="font-dancing text-5xl font-semibold mb-4 text-white">
              {infoBride.name}
            </h2>
            <h5 className="font-pacifico text-1xl mb-3 text-white">
              <span className="text-white">Bố:</span> {infoBride.farther}
            </h5>
            <h5 className="font-pacifico text-1xl mb-6 text-white">
              <span className="text-white">Mẹ:</span> {infoBride.mother}
            </h5>
            <span className=" mb-6 text-white">
              Địa chỉ: {infoBride.subtext}
            </span>
          </div>
        </Animation>
      </div>
      <div className="grid md:grid-cols-2 p-4 md:p-8">
        <div className="p-4 md:p-8 order-1 md:order-0">
          <Animation startOffScreen="-100%">
            <h1 className="font-dancing text-5xl font-semibold mb-4 text-white">
              {infoGroom.name}
            </h1>
            <h5 className="font-pacifico text-1xl mb-3 text-white">
              <span className="text-white">Bố:</span> {infoGroom.farther}
            </h5>
            <h5 className="font-pacifico text-1xl mb-6 text-white">
              <span className="text-white">Mẹ:</span> {infoGroom.mother}
            </h5>
            <span className=" mb-6 text-white">
              Địa chỉ: {infoGroom.subtext}
            </span>
          </Animation>
        </div>

        <div className="order-0 md:order-1">
          <Animation startOffScreen="100%">
            <div className="flex justify-end">
              <Image
                className="rounded-lg overflow-hidden"
                src={infoGroom.image.url}
                alt={infoGroom.image.alt}
                width={544}
                height={448}
              />
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
}
