"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

interface CustomCarouselProps {
  reviews: Review[];
}

export default function CustomCarousel({ reviews }: CustomCarouselProps) {
  console.log(reviews);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots !text-white",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        // <a href={review.author_url} target="_blank" rel="noreferrer">
        <div key={index} className="carousel-elem px-5">
          <p className="p-s text-bold text-white-b300 text-left">
            {review.author_name}
          </p>
          <p className="p-xs text-left text-italic text-white-b300">
            {review.relative_time_description}
          </p>
          <p className="mt-4 p-xs text-left text-white-b300">
            &quot;{review.text.slice(0, 200)}
            {review.text.length > 200 ? "..." : ""}&quot;
          </p>
          <div className="w-10 h-10 relative mt-4">
            <Image
              src={review.profile_photo_url}
              alt={review.author_name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        // </a>
      ))}
    </Slider>
  );
}
