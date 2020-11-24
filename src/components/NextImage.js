/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NextImage({
  imgSrc,
  lqipImgSrc,
  priority = true,
  imgAlt,
}) {
  var [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    var image = document.querySelector(".image");
    image.height > 50 && setImageLoaded(true);
  }, []);

  return (
    <>
      <Image
        alt={imgAlt}
        className="image"
        onLoad={() => setImageLoaded(true)}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        src={imgSrc}
        quality="50"
        priority={priority}
      />
      <img
        alt={imgAlt}
        src={lqipImgSrc}
        sx={{
          height: "100%",
          width: "100%",
          opacity: "1",
          transition: "opacity 2s ease-in-out",
        }}
        css={
          imageLoaded && {
            opacity: 0,
            objectFit: "cover",
            objectPosition: "center center",
          }
        }
      />
    </>
  );
}
