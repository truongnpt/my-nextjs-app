import "../app/styles/saveTheDate.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Countdown from "react-countdown";

const Completionist = () => (
  <div className="datetime">
    <span>Đám cưới nha!</span>
  </div>
);

export default function SaveTheDate() {
  const value = new Date("10-29-2025");

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
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto p-8 text-center">
        <div className="bg-white p-12 shadow-lg max-w-lg mx-auto rounded-lg overflow-hidden">
          <div className="mx-auto border-4 p-12 rounded-lg overflow-hidden">
            <h1 className="font-dancing text-5xl font-semibold text-center mb-4">
              {info.saveTheDate}
            </h1>
            <h2 className="text-xl text-center mb-4 text-gray-500">
              {info.of}
            </h2>
            <h3 className="font-pacifico text-3xl font-bold text-center mb-6">
              {info.boy} & {info.girl}
            </h3>
            <p className="text-center mb-12">{info.subtext}</p>
            <a
              href="#loi-chuc"
              className="bg-[#FCA5A5] text-white rounded-full py-4 px-4 mx-auto hover:bg-[#FECACA]"
            >
              {info.message} →
            </a>
          </div>
        </div>
        <div className="bg-white p-12 shadow-lg max-w-lg mx-auto rounded-lg overflow-hidden">
          <div className="mx-auto border-4 rounded-lg overflow-hidden">
            <div className="calendar">
              <Calendar className="font-pacifico" value={value} />
            </div>
            <div className="countdown border-t mt-4 py-4">
              <Countdown date={value} renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
