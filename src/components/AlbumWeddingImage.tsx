"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../app/styles/albumWeddingImage.scss";
import Animation from "./Animation";

interface ImageProp {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export default function AlbumWeddingImage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageProp>();

  const info = {
    title: "Album Hình Cưới",
    subtext:
      "Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.",
  };

  const albumWeddingImages = [
    {
      id: 0,
      url: "/images/slide1.jpg",
      alt: "image 1",
      width: 384,
      height: 256,
    },
    {
      id: 1,
      url: "/images/slide2.jpg",
      alt: "image 2",
      width: 384,
      height: 256,
    },
    {
      id: 2,
      url: "/images/small.jpg",
      alt: "image 3",
      width: 384,
      height: 577,
    },
    {
      id: 3,
      url: "/images/small.jpg",
      alt: "image 3",
      width: 384,
      height: 256,
    },
    {
      id: 4,
      url: "/images/slide1.jpg",
      alt: "image 1",
      width: 384,
      height: 256,
    },
    {
      id: 5,
      url: "/images/slide2.jpg",
      alt: "image 2",
      width: 384,
      height: 256,
    },
    {
      id: 6,
      url: "/images/slide2.jpg",
      alt: "image 2",
      width: 384,
      height: 256,
    },
    {
      id: 7,
      url: "/images/small.jpg",
      alt: "image 1",
      width: 384,
      height: 256,
    },
    {
      id: 8,
      url: "/images/slide2.jpg",
      alt: "image 2",
      width: 384,
      height: 256,
    },
    {
      id: 9,
      url: "/images/small.jpg",
      alt: "image 3",
      width: 384,
      height: 577,
    },
    {
      id: 10,
      url: "/images/slide2.jpg",
      alt: "image 3",
      width: 384,
      height: 256,
    },
    {
      id: 11,
      url: "/images/slide1.jpg",
      alt: "image 1",
      width: 384,
      height: 256,
    },
    {
      id: 12,
      url: "/images/small.jpg",
      alt: "image 2",
      width: 384,
      height: 577,
    },
    {
      id: 13,
      url: "/images/slide2.jpg",
      alt: "image 2",
      width: 384,
      height: 256,
    },
    {
      id: 14,
      url: "/images/small.jpg",
      alt: "image 1",
      width: 384,
      height: 256,
    },
    {
      id: 15,
      url: "/images/slide2.jpg",
      alt: "image 2",
      width: 384,
      height: 256,
    },
    {
      id: 16,
      url: "/images/small.jpg",
      alt: "image 3",
      width: 384,
      height: 577,
    },
    {
      id: 17,
      url: "/images/small.jpg",
      alt: "image 3",
      width: 384,
      height: 256,
    },
    {
      id: 18,
      url: "/images/slide1.jpg",
      alt: "image 1",
      width: 384,
      height: 256,
    },
    {
      id: 19,
      url: "/images/small.jpg",
      alt: "image 2",
      width: 384,
      height: 577,
    },
  ];

  const albumWeddingImages1 = albumWeddingImages.slice(0, 7);
  const albumWeddingImages2 = albumWeddingImages.slice(7, 13);
  const albumWeddingImages3 = albumWeddingImages.slice(13, 19);

  const handleImageClick = (id: number) => {
    const currentImage = albumWeddingImages.find((image) => image.id === id);
    setCurrentImage(currentImage);

    setIsOpen(true);
  };

  return (
    <div id="hinh-cuoi" className="max-w-6xl mx-auto mt-12 mb-8">
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
      <div className="grid grid-cols-3 p-8 gap-4">
        <div>
          {albumWeddingImages1.map((image) => (
            <div className="mb-4" key={image.id}>
              <Animation vertical={true} startOffScreen="50px">
                <button onClick={() => handleImageClick(image.id)}>
                  <Image
                    className="rounded-lg overflow-hidden"
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                </button>
              </Animation>
            </div>
          ))}
        </div>
        <div>
          {albumWeddingImages2.map((image) => (
            <div className="mb-4" key={image.id}>
              <Animation vertical={true} startOffScreen="50px">
                <button onClick={() => handleImageClick(image.id)}>
                  <Image
                    className="rounded-lg overflow-hidden"
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                </button>
              </Animation>
            </div>
          ))}
        </div>
        <div>
          {albumWeddingImages3.map((image) => (
            <div className="mb-4" key={image.id}>
              <Animation vertical={true} startOffScreen="50px">
                <button onClick={() => handleImageClick(image.id)}>
                  <Image
                    className="rounded-lg overflow-hidden"
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                </button>
              </Animation>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          {currentImage && (
            <Image
              src={currentImage.url}
              alt={currentImage.alt}
              width={currentImage.width * 3}
              height={currentImage.height * 3}
              className="cursor-pointer w-auto max-h-full"
              quality={100}
            />
          )}
        </div>
      )}
    </div>
  );
}
