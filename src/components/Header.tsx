import Image from "next/image";
import "../app/styles/header.scss";

export default function Header() {
  const info = {
    boy: "Phi Trường",
    girl: "Kim Cúc",
    subtext: "Just Married",
  };
  const links = [
    { name: "Cô Dâu & Chú Rễ", href: "#co-dau-va-chu-re" },
    { name: "Ngày Cưới", href: "#ngay-cuoi" },
    { name: "Album Hình CƯới", href: "#hinh-cuoi" },
    { name: "Sự Kiện Cưới", href: "#su-kien-cuoi" },
    { name: "Gửi Lời Chúc", href: "#gui-loi-chuc" },
    { name: "Mừng Cưới", href: "#mung-cuoi" },
  ];
  return (
    <div id="header">
      <div className="grid py-8">
        <div className="flex items-center justify-center gap-4 text-white">
          <h3 className="font-dancing text-3xl">{info.boy}</h3>
          <div className="heart">
            <Image src="/images/heart.gif" width={50} height={50} alt="Heart" />
          </div>
          <h3 className="font-dancing text-3xl text-white">
            {info.girl} &nbsp; &nbsp;
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4 pt-3">
          <span className="line text-sm text-white">{info.subtext}</span>
        </div>
      </div>
      <div className="main-menu hidden md:flex items-center justify-center gap-2 border-t border-b border-white/20 py-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="capitalize text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
