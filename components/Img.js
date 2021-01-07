import React from "react";
import { Image, Placeholder, CloudinaryContext } from "cloudinary-react";
import styled from "styled-components";

const Img = ({ src, alt, style }) => {
  return (
    <Holder style={style}>
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
