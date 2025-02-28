import "../app/styles/saveTheDate.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Countdown from "react-countdown";
import Animation from "./Animation";

const Completionist = () => (
  <div className="datetime">
    <span>Đám cưới nha!</span>
  </div>
);

export default function SaveTheDate() {
  const value = new Date("2025-10-29");

  const info = {
    boy: "Phi Trường",
    girl: "Kim Cúc",
    subtext:
      "Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc!",
    message: "Gửi lời chúc",
    saveTheDate: "Ngày Cưới",
    of: "của chú rễ và cô dâu",
  };

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="grid grid-cols-4 gap-4">
          <div className="datetime">
            <span>{days}</span>
            <br />
            <span>Ngày</span>
          </div>
          <div className="datetime">
            <span>{hours}</span>
            <br />
            <span>Giờ</span>
          </div>
          <div className="datetime">
            <span>{minutes}</span>
            <br />
            <span>Phút</span>
          </div>
          <div className="datetime">
            <span>{seconds}</span>
            <br />
            <span>Giây</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      id="ngay-cuoi"
      style={{ backgroundImage: `url('images/bg.png')` }}
      className="py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4 md:p-8 text-center">
        <Animation startOffScreen="-100%">
          <div className="bg-white border-4 border-[#ac0202] p-4 md:p-8 shadow-lg w-50 mx-auto rounded-2xl overflow-hidden">
            <div className="mx-auto bg-[#ac0202] border-4 border-[#ac0202] px-4 md:px-6 py-4 md:py-12 rounded-2xl overflow-hidden">
              <h1 className="font-dancing text-2xl font-semibold text-center mb-4 text-white">
                {info.saveTheDate}
              </h1>
              <h2 className="text-xl text-center mb-4 text-white">{info.of}</h2>
              <h3 className="font-dancing text-5xl font-bold text-center mb-6 text-white">
                {info.boy} & {info.girl}
              </h3>
              <p className="text-center mb-8 text-white">{info.subtext}</p>
              <a
                href="#gui-loi-chuc"
                className="relative bg-white border-2 border-[#ac0202] flex items-center justify-center text-[#ac0202] rounded-full py-2 md:py-4 px-4 mx-auto hover:bg-[#ac0202] hover:text-white hover:border-2 hover:border-white"
              >
                {info.message} →
              </a>
            </div>
          </div>
        </Animation>
        <Animation startOffScreen="100%">
          <div className="bg-[#ac0202] h-full p-4 md:p-8 shadow-lg w-full mx-auto rounded-2xl overflow-hidden">
            <div className="border-4 bg-white border-[#ac0202] rounded-2xl overflow-hidden box-shadow-lg">
              <div className="calendar">
                <Calendar className="font-pacifico" value={value} />
              </div>
              <div className="countdown border-t border-[#ac0202]/20 mt-4 py-4">
                <Countdown date={value} renderer={renderer} />
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
}
