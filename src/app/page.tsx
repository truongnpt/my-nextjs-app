"use client";
import AlbumWeddingImage from "@/components/AlbumWeddingImage";
import BrideGroomInfo from "@/components/BrideGroomInfo";
import EventWedding from "@/components/EventWedding";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SaveTheDate from "@/components/SaveTheDate";
import ScrollToTop from "@/components/ScrollToTop";
import SendGreeting from "@/components/SendGreeting";
import SlideShow from "@/components/SlideShow";
import WeddingBox from "@/components/WeddingBox";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <>
      <Snowfall
        color="#fff"
        snowflakeCount={100}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: 1000,
        }}
      />
      <Header />
      <SlideShow />
      <BrideGroomInfo />
      <SaveTheDate />
      <AlbumWeddingImage />
      <EventWedding />
      <SendGreeting />
      <WeddingBox />
      <Footer />
      <ScrollToTop />
    </>
  );
}
