import Image from "next/image";
import "../app/styles/footer.scss";
import Animation from "./Animation";

export default function Footer() {
  return (
    <div
      id="footer-container"
      style={{ backgroundImage: `url('images/bg-footer.png')` }}
    >
      <div className="">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div
            className="couple-image"
            style={{
              backgroundImage: `url('images/footer-couple-pic-frame.png')`,
            }}
          >
            <Image
              src="/images/couple.jpg"
              className="w-[310px] md:w-[410px] h-[310px] md:h-[410px]"
              width={410}
              height={410}
              alt="Couple"
            />
          </div>
          <Animation vertical={true} startOffScreen="50px">
            <h3 className="font-dancing text-6xl md:text-8xl">Thank you!</h3>
          </Animation>
        </div>
      </div>
    </div>
  );
}
