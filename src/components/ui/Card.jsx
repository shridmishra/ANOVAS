"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ imageUrl, category, title, siteUrl }) => {
  return (
    <Link href={siteUrl} passHref>
      <div
        className="cursor-pointer bg-zinc-800 text-white p-4 m-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        {/* Image div */}
        <div className="mb-4">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={250}
            className="rounded-lg"
          />
        </div>

        {/* Category div */}
        <div className="text-sm uppercase text-gray-200 mb-2">
          {category}
        </div>

        {/* Title div */}
        <div className="text-xl font-bold">
          {title}
        </div>
      </div>
    </Link>
  );
};
