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

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="text-yellow-400">
        {index < rating ? "★" : "☆"}
      </span>
    ));
  };

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <Slider {...settings} className="cursor-grab">
      {reviews.map((review, index) => (
        // <a href={review.author_url} target="_blank" rel="noreferrer">
        <div key={index} className="carousel-elem px-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative">
              <Image
                src={review.profile_photo_url}
                alt={review.author_name}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <p className="p-s text-bold text-white-b300 text-left text-lg">
              {review.author_name}
            </p>
          </div>

          <div className="flex mt-1 gap-4">
            <div>{renderStars(review.rating)}</div>{" "}
            <p className="p-xs text-left text-italic text-white-b300">
              {review.relative_time_description}
            </p>
          </div>

          <p className="mt-1 p-xs text-left text-white-b300 pb-8">
            &quot;{review.text.slice(0, 200)}
            {review.text.length > 200 ? "..." : ""}&quot;
          </p>
        </div>
        // </a>
      ))}
    </Slider>
  );
}
