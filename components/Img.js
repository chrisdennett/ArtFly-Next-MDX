import styled from "./img.module.css";
import React from "react";
import { Image, Placeholder } from "cloudinary-react";

const Img = ({ src, alt, style }) => {
  return (
    <div className={styled.imgHolder} style={style}>
      <Image
        alt={alt}
        secure="true"
        cloudName="artfly"
        publicId={src}
        dpr="auto"
        responsive
        width="auto"
        crop="scale"
        responsiveUseBreakpoints="true"
      >
        <Placeholder type="blur" />
      </Image>
    </div>
  );
};

export default Img;
