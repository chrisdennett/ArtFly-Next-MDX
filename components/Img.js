import React from "react";
import { Image, Placeholder } from "cloudinary-react";
import styled from "styled-components";

const Img = ({ src, alt, style, shadow }) => {
  return (
    <Holder style={style}>
      <Image
        alt={alt}
        cloudName="artfly"
        publicId={`artfly-projects/${src}`}
        loading="lazy"
        dpr="auto"
        responsive
        width="auto"
        crop="scale"
        responsiveUseBreakpoints="true"
      >
        <Placeholder type="pixelate" />
      </Image>
    </Holder>
  );
};

export default Img;

const Holder = styled.div`
  img {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px,
      rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
  }
`;
