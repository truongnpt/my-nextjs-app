import Image from "next/image";
import "../app/styles/footer.scss";

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
              width={410}
              height={410}
              alt="Couple"
            />
          </div>
          <h3 className="font-dancing text-8xl">Thank you!</h3>
        </div>
      </div>
    </div>
  );
}
